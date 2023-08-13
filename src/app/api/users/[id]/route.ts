import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const user = await prisma.user.findFirst({
    where: {
      id: id as string
    },
    include: {
      permissionOnUser: true,
      student: {
        include: {
          gender: true
        }
      },
      teacher: {
        include: {
          gender: true
        }
      }
    }
  });

  if (!user) {
    return NextResponse.json(user, { status: 404 });
  }

  return NextResponse.json(user, { status: 200 });
}
