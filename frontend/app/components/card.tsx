'use client'
import React, { ReactNode } from 'react';
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
interface Text {
  title: string,
  tag: string,
  text: string
}

const Card: React.FC<Text> = ({ title, tag, text }) => {
  function Like () {
    console.log('Like')
  }
  function Dislike () {
    console.log('Dislike')
  }
  return (
    <div className="cursor-pointer transition-all duration-150 p-2 m-2 h-[240px] secondary-dark border-2 border-stone-900 hover:border-stone-400 rounded-xl">
      <div className='p-2 h-full overflow-hidden'>
        <span className='pb-2 flex flex-row gap-2 items-end border-b-2 border-stone-600'>
          <h1 className="text-2xl">
            {title}
          </h1>
          <h2 className='text-sm'>
            {tag}
          </h2>
        </span>
        <div className="overflow-hidden h-[130px]">
          <p className="p-2 flex-grow text-wrap">
            {text}
          </p>
        </div>
        <div className='border-t-2 border-stone-600 flex flex-row gap-4 justify-end text-2xl pt-2'>
          <button onClick={Like} aria-label='like'>
            <BiLike />
          </button>
          <button onClick={Dislike} aria-label='dislike'>
            <BiDislike />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;