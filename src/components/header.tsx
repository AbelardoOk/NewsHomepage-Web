import { Logo } from "../../public/logo";
export function Header() {
  return (
    <header className="flex justify-between items-center bg-neutral-white px-28 py-16">
      <Logo />
      <div className="flex justify-between font-normal gap-8">
        <a href="">Home</a>
        <a href="">New</a>
        <a href="">Popular</a>
        <a href="">Trending</a>
        <a href="">Categories</a>
      </div>
    </header>
  );
}
