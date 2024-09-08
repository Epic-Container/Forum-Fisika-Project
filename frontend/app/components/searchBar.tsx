'use client'
import React, { useState } from 'react';
import { TbSearch, TbFilterSearch, TbArrowBigDownLines, TbArrowBigDownLinesFilled } from "react-icons/tb";

const SearchBar = () => {
  const [Toggle, setToggle] = useState(false);

  function toggleHandler() {
    setToggle(!Toggle)
  }

  return (
    <div className="shadow-xl border-2 drop-shadow-xl border-stone-600 flex flex-row items-center gap-4 m-2 p-2 fixed h-[60px] secondary-dark w-[80%] sm:w-[85%] md:w-[94%] rounded-xl backdrop-blur-md bg-[rgba(255,255,255,0.05)]">
      <div className='hidden sm:block '>
        <div className='flex flex-row gap-4 items-center'>
          <button className='trasition-all duration-150 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-xl'>
            Create Post
          </button>
        </div>
      </div>
      <div className="group flex-grow flex flex-row items-center">
        <button className="sm:block hidden text-2xl p-2 group-focus:border-r-2 rounded-l-lg bg-teal-500 hover:bg-teal-600" aria-label="Filter Search">
          <TbFilterSearch />
        </button>
        <button onClick={toggleHandler} className="sm:hidden block text-2xl p-2 group-focus:border-r-2 rounded-l-lg bg-teal-500 hover:bg-teal-600" aria-label="Filter Search">
          {
            Toggle ? <TbArrowBigDownLinesFilled /> : <TbArrowBigDownLines />
          }
        </button>
        {Toggle && (
          <span className="sm:hidden block left-[1px] top-[59px] text-sm flex flex-col gap-2 bg-stone-950 absolute p-2 rounded-lg transition duration-500 ease-in-out transform origin-top translate-y-0 opacity-100">
            <button className='trasition-all duration-150 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg'>Filter</button>
            <button className='trasition-all duration-150 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg'>Make Post</button>
          </span>
        )}
        <input
          className="p-2 flex-grow group-focus:border-sky-500 outline-none bg-stone-950 "
          type="text"
          placeholder="Search Anything"
          name="search"
        />
        <button className="text-2xl p-2 group-focus:border-r-2 rounded-r-lg bg-sky-500 hover:bg-sky-600" aria-label="Search">
          <TbSearch />
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
