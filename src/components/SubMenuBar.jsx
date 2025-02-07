"use client";
import React, { useRef, useState, useEffect } from "react";

const SubMenu = () => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  let subMenuItems = [
    { items: "subMenuBar", id: 1 },
    { items: "subMenuBar", id: 2 },
    { items: "subMenuBar", id: 3 },
    { items: "subMenuBar", id: 4 },
    { items: "subMenuBar", id: 5 },
  ];

  useEffect(() => {
    const checkScrollButtons = () => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };
    const handleResize = () => {
      checkScrollButtons();
    };
    window.addEventListener("resize", handleResize);

    checkScrollButtons();

    const handleScroll = () => {
      checkScrollButtons();
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [subMenuItems]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center bg-customGreen">
      {showLeftButton && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-20 bg-white text-customGreen py-2 px-3 shadow hover:bg-gray-200 transition h-full"
        >
          &lt;
        </button>
      )}

      <div
        className="flex overflow-x-auto  text-white py-2 px-5 scrollbar-hide mx-auto"
        ref={scrollRef}
      >
        {subMenuItems.map((items, index) => (
          <span
            key={index}
            className="py-3 px-4 mx-2 rounded-full hover:text-customGreen hover:bg-white font-bold cursor-pointer transition-all duration-300 ease-in-out"
          >
            {items.items}
            {index}
          </span>
        ))}
      </div>

      {showRightButton && (
        <button
          onClick={scrollRight}
          className="absolute right-0 z-20 bg-white text-customGreen py-2 px-3  shadow hover:bg-gray-200 transition  h-full"
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default SubMenu;
