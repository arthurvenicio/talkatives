import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const invoices = await prisma.payment.findMany({
    where: {
      teacherId: id
    }
  });

  if (!invoices.length)
    return NextResponse.json(
      {
        error: 'No invoice was found for this teacher'
      },
      {
        status: 404
      }
    );

  return NextResponse.json({ invoices });
}
