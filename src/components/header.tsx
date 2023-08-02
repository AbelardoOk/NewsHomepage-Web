import { Logo } from "../../public/logo";
export function Header() {
  return (
    <header className="flex justify-between items-center bg-neutral-white px-28 py-16">
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
    </header>
  );
}
