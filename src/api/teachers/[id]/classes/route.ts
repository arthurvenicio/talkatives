import { prisma } from '@/config/prisma';
import { cleanObj } from '@/utils/cleanObj';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const classes = await prisma.class.findMany({
    where: {
      teacherId: id
    }
  });

  if (!classes.length) {
    return NextResponse.json(
      { message: `Teacher ${id} doesn\'t have any classes` },
      { status: 404 }
    );
  }

  const classesCleaned = classes.map((c) => cleanObj(c, ['teacherId']));

  return NextResponse.json(classesCleaned);
}
