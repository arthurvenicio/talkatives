interface ExerciseParams {
  params: {
    id: string;
  };
}

export default function Exercise({ params }: ExerciseParams) {
  const { id } = params;

  const data = {
    title: 'Exercise 01',
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
        <form className="flex flex-col gap-2">
          <div>
            <p>
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-5 h-5"
              />
              <label htmlFor="vehicle1"> I have a bike</label>
            </div>
            <div className="flex flex-row items-center gap-2">
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
                className="w-5 h-5"
              />
              <label htmlFor="vehicle2"> I have a car</label>
            </div>
            <div className="flex flex-row items-center gap-2">
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
                className="w-5 h-5"
              />
              <label htmlFor="vehicle2"> I have a car</label>
            </div>
            <div className="flex flex-row items-center gap-2">
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
                className="w-5 h-5"
              />
              <label htmlFor="vehicle2"> I have a car</label>
            </div>
            <div className="flex flex-row items-center gap-2">
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
                className="w-5 h-5"
              />
              <label htmlFor="vehicle2"> I have a car</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
