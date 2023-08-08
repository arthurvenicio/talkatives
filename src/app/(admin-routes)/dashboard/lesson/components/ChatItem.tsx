'use client';

import Image from 'next/image';
import { useState } from 'react';

interface IChatItem {
  user: {
    name: string;
    photoUrl: string;
    comment: string;
  };
}

export const ChatItem = ({ user: { name, photoUrl, comment } }: IChatItem) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-transparent border-b border-solid border-[#BDBDBD] w-full h-auto flex flex-row p-4">
      <div className="flex flex-row justify-center items-start gap-2">
        <div className="w-10 h-10">
          <Image
            src={photoUrl}
            className="rounded-full hover:cursor-pointer"
            width={50}
            height={50}
            alt="Arthur photo"
          />
        </div>
        <div className="flex-1">
          <div>
            <p className="font-bold text-sm">{name}</p>
          </div>
          <div>
            {comment.length >= 151 && !showMore ? (
              <>
                <p className="font-light text-xs text-justify">
                  {comment.slice(0, 150)}...
                </p>
                {!showMore && (
                  <button
                    className="bg-transparent border-none text-primary text-xs font-medium"
                    onClick={() => handleShowMore()}
                  >
                    Ver mais
                  </button>
                )}
              </>
            ) : (
              <>
                <p className="font-light text-xs text-justify">{comment}</p>
                {showMore && (
                  <button
                    className="bg-transparent border-none text-primary text-xs font-medium"
                    onClick={() => handleShowMore()}
                  >
                    Ver menos
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
