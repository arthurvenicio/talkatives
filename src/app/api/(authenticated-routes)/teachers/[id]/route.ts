import { prisma } from '@/config/prisma';
import { cleanObj } from '@/utils/cleanObj';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const teacher = await prisma.teacher.findUnique({
    where: {
      id: String(id)
    },
    include: {
      Class: false,
      gender: true
    }
  });

  if (!teacher) {
    return NextResponse.json({ message: 'Teacher not found' }, { status: 404 });
  }

  const teacherClean = cleanObj(teacher, ['genderId']);

  return NextResponse.json(teacherClean);
}
