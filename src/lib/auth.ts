import { prisma } from '@/config/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60 // 1 day
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;
      }
      return session;
    }
  },
  events: {
    async signIn(params) {
      const user = await prisma.user.findFirst({
        where: {
          id: params.user.id
        },
        include: {
          student: true,
          teacher: true,
          permissionOnUser: true
        }
      });

      if (!user) return;

      if (!user.userType) {
        await prisma.user.update({
          where: {
            id: user.id
          },
          data: {
            userType: 'TEACHER',
            teacher: {
              create: {
                firstName: user.name!,
                lastName: user.name!,
                birthdate: new Date().toISOString(),
                document: '00000000000',
                genderId: 1
              }
            }
          }
        });
      }

      if (!user) return;
    }
  },
  secret: process.env.NEXTAUTH_SECRET!
};
