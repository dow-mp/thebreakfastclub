import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    
    <div className="flex justify-center w-full">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className="text-white focus:ring bg-blue-900 hover:bg-blue-800 rounded-lg mx-0.5 px-3 py-1 text-sm md:mx-1 md:px-3 md:py-1 md:text-lg lg:mx-1 lg:px-3 lg:py-1 lg:text-xl xl:mx-1 xl:px-3.5 xl:py-1.5 xl:text-3xl 2xl:mx-2 2xl:px-8 2xl:py-4 2xl:text-5xl"
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default Pagination;
