"use client";
import React, { useState } from "react";
import Link from "next/link";
import Cart from "./Cart";
import LocationSetting from "./LocationSetting";
import Image from "next/image";

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
    <nav className="bg-customGreen shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button className="flex items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clip-rule="evenodd"
              />
            </svg>
            <div className="flex flex-col items-start">
              <p className="text-sm text-white">location</p>
              <p className="text-xs text-white">location</p>
            </div>
          </button>
          <Link href="/" className="text-white mx-5">
            0305-9508153
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/">
            <Image
              height="110"
              width="110"
              src="https://hafizsweets.com/_next/image?url=https%3A%2F%2Fconsole.indolj.io%2Fupload%2F1676456372-logo-min.jpg%3Fq%3D10&w=128&q=75"
              alt="hafiz sweets"
              className="absolute top-0"
            />
          </Link>
        </div>

        <div className="flex">
          <button onClick={openCart} className="relative mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-6"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>

            <span className="absolute  bottom-2.5  bg-customGreen border-2 text-white rounded-full text-xs px-2 py-1">
              3
            </span>
          </button>

          <button
            onClick={openLocationSetting}
            className="text-white focus:outline-none mx-5"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              className="h-6 w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="white"
                d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
              />
            </svg>
          </button>
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
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
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
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="p-4">
          <LocationSetting />
        </div>
      </div>
    </nav>
  );
}
