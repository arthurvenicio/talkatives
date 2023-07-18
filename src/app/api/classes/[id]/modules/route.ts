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
