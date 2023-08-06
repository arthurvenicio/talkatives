import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const setting = await prisma.setting.findFirst({
      where: {
        userId: id
      },
      include: {
        User: false
      }
    });

    if (setting) throw new Error('Setting not found');

    return NextResponse.json(setting, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 404 });
  }
};
