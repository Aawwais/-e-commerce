"use client";
import { FaCakeCandles } from "react-icons/fa6";
import { LuCake } from "react-icons/lu";
import SubMenuBar from "./SubMenuBar";
import { useEffect, useRef, useState } from "react";

const MainMenuBar = () => {
  let mainMenu = [
    { menu: "Cake", icon: <LuCake size={60} /> },
    { menu: "Cake", icon: <LuCake size={60} /> },
    { menu: "Cake", icon: <LuCake size={60} /> },
    { menu: "Cake", icon: <LuCake size={60} /> },
    { menu: "Cake", icon: <LuCake size={60} /> },
    { menu: "Cake", icon: <LuCake size={60} /> },
    { menu: "Cake", icon: <LuCake size={60} /> },
  ];
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

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
  }, [mainMenu]);

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
    <div className="sticky top-0 -mt-[7px]">
      <div className="relative flex items-center bg-customBrown">
        {showLeftButton && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-20 bg-customBrown text-customGreen py-2 px-3  shadow hover:bg-gray-200 transition h-full"
          >
            &lt;
          </button>
        )}
        <ul className="flex  overflow-x-auto px-5 mx-auto" ref={scrollRef}>
          {mainMenu.map((items, index) => {
            return (
              <li
                key={index}
                className="hover:bg-customGreen  py-2 px-4 transition-all duration-0 ease-in-out hover:duration-1000 cursor-pointer"
              >
                <span className="flex flex-col justify-center items-center">
                  <div className="mb-2">{items.icon}</div>
                  {items.menu}
                </span>
              </li>
            );
          })}
        </ul>
        {showRightButton && (
          <button
            onClick={scrollRight}
            className="absolute right-0 z-20 bg-customBrown text-customGreen py-2 px-3 d shadow hover:bg-gray-200 transition h-full"
          >
            &gt;
          </button>
        )}
      </div>
      <SubMenuBar />
    </div>
  );
};

export default MainMenuBar;
