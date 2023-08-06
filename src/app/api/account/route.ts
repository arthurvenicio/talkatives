import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';
import { compare, hash } from 'bcrypt';

export const GET = async (req: Request) => {
  const { email, password } = await req.json();

  const user = await prisma.user.findFirst({
    where: { email },
    include: {
      student: true,
      teacher: true
    }
  });

  if (!user)
    return NextResponse.json(
      { error: 'Usuário não encontrado' },
      { status: 404 }
    );

  const passwordMatch = await compare(password, user.password!);

  if (!passwordMatch)
    return NextResponse.json(
      { error: 'Os dados fornecidos estão incorretos' },
      { status: 400 }
    );

  return NextResponse.json(user, { status: 200 });
};

export const POST = async (req: Request) => {
  const body = await req.json();

  const userAlreadyExistis = await prisma.user.findFirst({
    where: {
      email: body.email
    }
  });

  if (userAlreadyExistis)
    return NextResponse.json(
      { error: ' Já existe um cadastro com esse email' },
      { status: 400 }
    );

  const cleanedDocument = body.document.replace(/\D/g, '');
  const passwordHash = await hash(body.password, 10);

  const aggregateAccount =
    body.userType === 'TEACHER'
      ? {
          teacher: {
            create: {
              firstName: body.teacher?.firstName as string,
              lastName: body.teacher?.lastName as string,
              birthdate: new Date(body.birthdate).toISOString(),
              document: cleanedDocument,
              gender: {
                connect: {
                  id: Number(body.gender)
                }
              }
            }
          }
        }
      : {
          student: {
            create: {
              firstName: body.student?.firstName as string,
              lastName: body.student?.lastName as string,
              birthdate: new Date(body.birthdate),
              gender: {
                connect: {
                  name: body.gender
                }
              },
              document: body.document as string
            }
          }
        };

  try {
    const account = await prisma.account.create({
      data: {
        provider: 'credentials',
        type: 'credentials',
        user: {
          create: {
            name: body.name,
            email: body.email,

            password: passwordHash,
            ...aggregateAccount
          }
        }
      },
      include: {
        user: true
      }
    });

    return NextResponse.json(account, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: 'Erro ao criar usuário'
      },
      { status: 400 }
    );
  }
};
