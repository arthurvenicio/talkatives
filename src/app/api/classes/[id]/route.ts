import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const classFromDatabase = await prisma.class.findFirst({
    where: {
      id: id as string
    },
    include: {
      StudentOnClass: true,
      Module: true,
      Teacher: {
        include: {
          Class: false
        }
      }
    }
  });

  if (!classFromDatabase) {
    return NextResponse.json(classFromDatabase);
  }

  return NextResponse.json(classFromDatabase);
}
