import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  const teacher = await prisma.teacher.findFirst({
    where: {
      id: String(id)
    },
    include: {
      Class: true
    }
  });
  return NextResponse.json(teacher);
}
