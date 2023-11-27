import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string; invoiceId: string } }
) {
  const { id, invoiceId } = params;

  const invoice = await prisma.payment.findUnique({
    where: { id: invoiceId, teacherId: id }
  });

  if (!invoice)
    return NextResponse.json(
      {
        error: 'Invoice not found'
      },
      { status: 404 }
    );

  return NextResponse.json({ invoice });
}
