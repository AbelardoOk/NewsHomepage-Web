"use client";

import { useState } from "react";
import { Logo } from "../../public/logo";
import { useWindowSize } from "rooks";
import { CloseIcon } from "../../public/closeIcon";
import { MenuIcon } from "../../public/menuIcon";

export function Header() {
  const { innerWidth } = useWindowSize();

  const [isOpenMenu, setIsOpenMenu] = useState(true);

  return (
    <header className="bg-neutral-white z-20">
      {innerWidth !== null && innerWidth > 768 ? (
        <div className="flex flex-row justify-between items-center px-28 py-16">
          <Logo />
          <div className="flex justify-between font-normal gap-8">
            <a href="" className="hover:text-primary-red transition duration-300">
              Home
            </a>
            <a href="" className="hover:text-primary-red transition duration-300">
              New
            </a>
            <a href="" className="hover:text-primary-red transition duration-300">
              Popular
            </a>
            <a href="" className="hover:text-primary-red transition duration-300">
              Trending
            </a>
            <a href="" className="hover:text-primary-red transition duration-300">
              Categories
            </a>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="flex flex-row center justify-between px-4 py-8">
            <Logo />
            <button onClick={() => setIsOpenMenu((prev) => !prev)}>{!isOpenMenu ? <CloseIcon /> : <MenuIcon />}</button>
          </div>

          {!isOpenMenu ? (
            <div className="absolute z-10 h-screen mt-[-6.5rem] ml-[-70%] w-screen bg-black opacity-50 transition duration-150"></div>
          ) : (
            <div></div>
          )}

          {!isOpenMenu ? (
            <div className="absolute h-screen w-screen transition duration-300 z-20">
              <div className="ml-[30%] pt-8 px-6 bg-neutral-white transition duration-300 h-screen">
                <div className="flex flex-col justify-between font-normal gap-6">
                  <a href="" className="text-neutral-veryDarkBlue hover:text-primary-red transition duration-300">
                    Home
                  </a>
                  <a href="" className="text-neutral-veryDarkBlue hover:text-primary-red transition duration-300">
                    New
                  </a>
                  <a href="" className="text-neutral-veryDarkBlue hover:text-primary-red transition duration-300">
                    Popular
                  </a>
                  <a href="" className="text-neutral-veryDarkBlue hover:text-primary-red transition duration-300">
                    Trending
                  </a>
                  <a href="" className="text-neutral-veryDarkBlue hover:text-primary-red transition duration-300">
                    Categories
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </header>
  );
}
