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
    videoPlatform: 'youtube',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta, metus vel ornare condimentum, mi lacus tincidunt felis, nec feugiat elit mauris quis nisl. Nulla urna elit, eleifend sed consectetur sed, pellentesque at felis. Etiam tortor lorem, congue sed mauris in, interdum luctus lorem. Quisque quis congue erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget eleifend leo. Etiam in risus eu elit venenatis feugiat. Nam viverra ante eget facilisis malesuada. Aenean molestie, dolor at efficitur imperdiet, massa leo commodo magna, eget efficitur dolor leo nec lacus. Sed vitae erat libero. Phasellus et felis vel libero convallis malesuada. 9013892u38012 12312u312y3-21-127312t4124t24612564213rt125312999'
  };

  return (
    <div className="w-full h-full  flex flex-row gap-10">
      <div className="flex-[2] flex flex-col gap-6">
        <div className="border-b border-solid w-96">
          <p className="text-3xl text-primary font-bold">{data.title}</p>
        </div>
        <div className="w-[853px]">
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
        <div className="w-[853px]">
          <p className="font-normal text-justify text-sm text-gray-500">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}
