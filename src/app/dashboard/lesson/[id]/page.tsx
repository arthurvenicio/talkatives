import { ChatView } from '../components/ChatView';

interface LessonParams {
  params: {
    id: string;
  };
}
export default function Lesson({ params }: LessonParams) {
  const { id } = params;

  const data = {
    title: 'Lesson 01',
    videoUrl: 'fcyySC1qxJM',
    videoPlatform: 'youtube'
  };

  return (
    <div className="w-full h-full  flex flex-row gap-10">
      <div className="flex-[2] p-14 flex flex-col gap-10">
        <div className="border-b border-solid w-96">
          <p className="text-3xl text-primary font-bold">{data.title}</p>
        </div>
        <div>
          {data.videoPlatform === 'youtube' && (
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${data.videoUrl}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          )}

          {data.videoPlatform === 'vimeo' && (
            <iframe
              width="853"
              height="480"
              src={`https://player.vimeo.com/video/286898202?h=fd61acd044`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          )}
        </div>

        <div>
          <p className="font-normal text-base">Video description</p>
        </div>
      </div>
      <div className="flex-1">
        <ChatView />
      </div>
    </div>
  );
}
