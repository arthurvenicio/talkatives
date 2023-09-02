import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const moduleFromDatabase = await prisma.module.findMany({
    where: {
      classId: id
    }
  });

  if (!moduleFromDatabase) {
    return NextResponse.json(moduleFromDatabase);
  }

  return NextResponse.json(moduleFromDatabase);
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { name, classId } = await req.json();
  const { id } = params;

  try {
    const moduleData = await prisma.module.create({
      data: {
        name,
        class: {
          connect: {
            id
          }
        }
      }
    });

    return NextResponse.json(moduleData, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(error.message, { status: 403 });
  }
}
