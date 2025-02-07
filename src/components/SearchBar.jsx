"use client";
import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const SearchBar = () => {
  const [searchData, setSearchDta] = useState("");
  return (
    <div className="container mx-auto px-4 py-5">
      <div className="flex  items-center rounded-[24px] border-2 border-customGreen">
        <input
          className="w-full border-none focus:ring-0 bg-transparent"
          placeholder="search items"
          type="text"
          value={searchData}
          onChange={(e) => setSearchDta(e.target.value)}
        />
        <FaArrowCircleRight
          size={30}
          color="customGreen"
          className="text-customGreen m-2"
        />
      </div>
    </div>
  );
};

export default SearchBar;
