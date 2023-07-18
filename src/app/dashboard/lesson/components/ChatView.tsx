import { ChatItem } from './ChatItem';

const dataFromApi = [
  {
    name: 'Arthur',
    photoUrl: 'https://i.imgur.com/W9OXQBS.jpg',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
  Suspendisse porta, metus vel ornare condimentum, mi lacus\
  tincidunt felis, nec feugiat elit mauris quis nisl. Nulla urna\
  elit, eleifend sed consectetur sed, pellentesque at felis. Etiam\
  tortor lorem, congue sed mauris in, interdum luctus lorem. Quisque\
  quis congue erat. Interdum et malesuada fames ac ante ipsum primis\
  in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing\\'
  },
  {
    name: 'Alesson',
    photoUrl: 'https://i.imgur.com/dE6nvfQ.png',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
  Suspendisse porta, metus vel ornare condimentum, mi lacus\\'
  },
  {
    name: 'Arthur',
    photoUrl: 'https://i.imgur.com/W9OXQBS.jpg',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
    Suspendisse porta, metus vel ornare condimentum, mi lacus\
    tincidunt felis, nec feugiat elit mauris quis nisl. Nulla urna\
    elit, eleifend sed consectetur sed, pellentesque at felis. Etiam\
    tortor lorem, congue sed mauris in, interdum luctus lorem. Quisque\
    quis congue erat. Interdum et malesuada fames ac ante ipsum primis\
    in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing\
    elit. Sed eget eleifend leo. Etiam in risus eu elit venenatis\
    feugiat. Nam viverra ante eget facilisis malesuada. Aenean\
    molestie, dolor at efficitur imperdiet, massa leo commodo magna,\
    eget efficitur dolor leo nec lacus. Sed vitae erat libero.\
    Phasellus et felis vel libero convallis malesuada. 9013892u38012\
    12312u312y3-21-127312t4124t24612564213rt125312999'
  },
  {
    name: 'Arthur',
    photoUrl: 'https://i.imgur.com/W9OXQBS.jpg',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta, metus vel ornare condime metus vel ornare condime metus vel ornare condime'
  },
  {
    name: 'Alesson',
    photoUrl: 'https://i.imgur.com/dE6nvfQ.png',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
  Suspendisse porta, metus vel ornare condimentum, mi lacus\\'
  },
  {
    name: 'Alesson',
    photoUrl: 'https://i.imgur.com/dE6nvfQ.png',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
  Suspendisse porta, metus vel ornare condimentum, mi lacus\\'
  },
  {
    name: 'Alesson',
    photoUrl: 'https://i.imgur.com/dE6nvfQ.png',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
  Suspendisse porta, metus vel ornare condimentum, mi lacus\\'
  },
  {
    name: 'Alesson',
    photoUrl: 'https://i.imgur.com/dE6nvfQ.png',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
  Suspendisse porta, metus vel ornare condimentum, mi lacus\\'
  },
  {
    name: 'Alesson',
    photoUrl: 'https://i.imgur.com/dE6nvfQ.png',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
  Suspendisse porta, metus vel ornare condimentum, mi lacus\\'
  }
];

export const ChatView = () => {
  return (
    <div className="w-full h-full border-l border-solid bg-[#ddd] flex flex-col justify-between">
      {dataFromApi ? (
        <div className="overflow-y-scroll h-[785px]">
          {dataFromApi.map((item, index) => (
            <ChatItem key={index} user={item} />
          ))}
        </div>
      ) : (
        <div className="flex-1 flex flex-col justify-center items-center">
          <p className="text-sm font-bold text-gray-600">
            Não há nenhum comentario neste vídeo.
          </p>
          <p className="text-xs font-bold text-gray-600">
            Seja o primeiro a comentar!
          </p>
        </div>
      )}

      <div className="w-full h-28 flex flex-row ">
        <textarea
          name="comment"
          placeholder="Escreva um comentario..."
          className="flex-[4] p-2 bg-gray-200 text-black focus:outline-0 resize-none"
        />
        <button className="h-full flex-1 bg-gray-500 font-bold text-white">
          Enviar
        </button>
      </div>
    </div>
  );
};
