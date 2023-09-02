import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string; moduleId: string } }
) {
  const { id, moduleId } = params;

  const moduleFromDatabase = await prisma.module.findFirst({
    where: {
      classId: id,
      id: moduleId
    },
    include: {
      lesson: false
    }
  });

  if (!moduleFromDatabase) {
    return NextResponse.json(moduleFromDatabase);
  }

  return NextResponse.json(moduleFromDatabase);
}
