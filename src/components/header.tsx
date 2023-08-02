import { useState } from "react";
import { Logo } from "../../public/logo";
import { useWindowSize } from "rooks";
import { CloseIcon } from "../../public/closeIcon";
import { MenuIcon } from "../../public/menuIcon";

export function Header() {
  const { innerWidth } = useWindowSize();

  const [isOpenFeature, setIsOpenFeature] = useState(true);
  const [isOpenCompany, setIsOpenCompany] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  return (
    <header className="flex justify-between items-center bg-neutral-white px-28 py-16">
      {innerWidth !== null && innerWidth > 768 ? (
        <div>
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
        <div className="flex flex-row items-start justify-between">
          <Logo />
          <button onClick={() => setIsOpenMenu((prev) => !prev)}>{!isOpenMenu ? <CloseIcon /> : <MenuIcon />}</button>
        </div>
      )}
    </header>
  );
}
