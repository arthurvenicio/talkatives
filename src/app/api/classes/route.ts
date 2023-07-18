import { prisma } from '@/config/prisma';
import { cleanObj } from '@/utils/cleanObj';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, description, teacherId } = await req.json();

  try {
    const createdClass = await prisma.class.create({
      data: {
        name,
        description,
        Teacher: {
          connect: {
            id: teacherId
          }
        }
      }
    });

    return NextResponse.json(cleanObj(createdClass, ['teacherId']), {
      status: 200
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 403 });
  }
}
