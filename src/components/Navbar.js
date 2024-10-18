"use client";
import React, { useState } from "react";
import Link from "next/link";
import Cart from "./Cart";
import LocationSetting from "./LocationSetting";
import Image from "next/image";
import { FiAlignJustify } from "react-icons/fi";
import { FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLocationSettingOpen, setIsLocationSettingOpen] = useState(false);
  const openLocationSetting = () => {
    setIsLocationSettingOpen(true);
  };
  const closeLocationSetting = () => {
    setIsLocationSettingOpen(false);
  };
  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "overlay") {
      closeCart();
      closeLocationSetting();
    }
  };

  return (
    <nav className="bg-customGreen shadow-md ">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-4 px-3">
          <div class="col-span-9 md:col-span-5 order-2 md:order-1 flex justify-end  md:justify-start items-center">
            <button className="flex items-center mr-2 sm:mr-5 py-4 ">
              <MdLocationOn
                size={25}
                color="white"
                className="text-xs sm:text-base"
              />
              <div className="flex flex-col items-start">
                <p className=" text-white text-xs sm:text-sm">location</p>
                <p className="text-xs text-white ">location</p>
              </div>
            </button>
            <Link
              href="/"
              className="text-white ml-2 sm:ml-5 flex justify-center items-center text-xs sm:text-base"
            >
              <FaPhoneAlt className="mr-1" />
              0305-9508153
            </Link>
          </div>
          <div class="col-span-3 md:col-span-2 order-1 md:order-2 flex justify-start  md:justify-center  items-center">
            <Link href="/">
              {/* <Image
                height="110"
                width="110"
                src="https://hafizsweets.com/_next/image?url=https%3A%2F%2Fconsole.indolj.io%2Fupload%2F1676456372-logo-min.jpg%3Fq%3D10&w=128&q=75"
                alt="hafiz sweets"
                className="hidden sm:block absolute top-0 z-10 "
              /> */}
              <img
                src="https://hafizsweets.com/_next/image?url=https%3A%2F%2Fconsole.indolj.io%2Fupload%2F1676456372-logo-min.jpg%3Fq%3D10&w=128&q=75"
                alt="hafiz sweets"
                className="absolute top-0 z-10 w-[90px] h-[90px] sm:w-[110px] sm:h-[110px]"
              />
            </Link>
          </div>
          <div class="hidden md:flex  md:col-span-5 md:order-3  justify-end items-center">
            <button onClick={openCart} className="relative mr-5">
              <FaShoppingCart size={24} color="white" />
              <span className="absolute  bottom-2.5  bg-customGreen border-2 text-white rounded-full text-xs px-2 py-1">
                3
              </span>
            </button>

            <button
              onClick={openLocationSetting}
              className="text-white focus:outline-none ml-5"
            >
              <FiAlignJustify size={30} />
            </button>
          </div>
        </div>
      </div>

      {(isCartOpen || isLocationSettingOpen) && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
          onClick={handleOutsideClick}
        />
      )}

      <div
        className={`fixed right-0 top-0 transition-all duration-700 ease-in-out 
          ${isCartOpen ? "w-80 opacity-100" : "w-0 opacity-0"}
          h-full bg-white shadow-lg border-l border-gray-200 overflow-hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-gray-800 focus:outline-none"
          >
            <RxCross2 size={25} />
          </button>
        </div>
        <div className="p-4">
          <Cart />
        </div>
      </div>
      <div
        className={`fixed right-0 top-0 transition-all duration-700 ease-in-out 
          ${isLocationSettingOpen ? "w-80 opacity-100" : "w-0 opacity-0"}
          h-full bg-white shadow-lg border-l border-gray-200 overflow-hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">Your Location</h2>
          <button
            onClick={closeLocationSetting}
            className="text-gray-800 focus:outline-none"
          >
            <RxCross2 size={25} />
          </button>
        </div>
        <div className="p-4">
          <LocationSetting />
        </div>
      </div>
    </nav>
  );
}
