import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string; moduleId: string } }
) {
  const { id, moduleId } = params;

  const lessons = await prisma.lesson.findMany({
    where: {
      moduleId: moduleId
    }
  });

  if (!lessons) {
    return NextResponse.json(
      { message: `The module ${moduleId} doesn't have lessons.` },
      { status: 404 }
    );
  }

  return NextResponse.json(lessons, { status: 200 });
}

export async function POST(
  req: Request,
  { params }: { params: { id: string; moduleId: string } }
) {
  const { id, moduleId } = params;
  const { name, description, type, lessonDate } = await req.json();

  switch (type) {
    case 'VIDEO': {
      const { video } = await req.json();
      try {
        const lesson = await prisma.lesson.create({
          data: {
            name,
            description,
            type,
            lessonDate,
            video: {
              create: {
                videoPlatform: video.videoPlatform,
                videoUrl: video.videoUrl
              }
            },
            comment: {},
            Module: {
              connect: {
                id: moduleId
              }
            }
          }
        });
        return NextResponse.json(lesson, { status: 201 });
      } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 403 });
      }
      break;
    }
    case 'EXERCISE':
      const { questions } = await req.json();

      try {
        const lesson = await prisma.lesson.create({
          data: {
            name,
            description,
            type,
            lessonDate,
            question: {},
            comment: {},
            Module: {
              connect: {
                id: moduleId
              }
            }
          }
        });

        const questionsData = questions.map((q: any) => {
          return {
            question: q.question,
            Lesson: {
              connect: {
                id: lesson.id
              }
            }
          };
        });

        await prisma.question.createMany({
          data: questionsData
        });

        const lessonWithQuestions = await prisma.lesson.findFirst({
          where: {
            id: lesson.id
          }
        });

        return NextResponse.json(lessonWithQuestions, { status: 201 });
      } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 403 });
      }
      break;
    default:
      return NextResponse.json(
        { message: 'Invalid lesson type' },
        { status: 403 }
      );
      break;
  }
}
