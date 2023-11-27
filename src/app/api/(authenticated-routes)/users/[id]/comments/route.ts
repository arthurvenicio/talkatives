import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const comments = await prisma.comment.findMany({
    where: {
      authorId: id as string
    }
  });

  if (!comments) {
    return NextResponse.json(comments);
  }

  return NextResponse.json(comments);
}
