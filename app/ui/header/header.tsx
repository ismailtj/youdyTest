import Image from "next/image";
import NavLinks from "./nav-links";
import LoginBtn from "./loginBtn";

export default function Header() {
  return (
    <>
      <div className="h-12" />
      <div className="w-full bg-primary-color flex justify-center fixed z-50 top-0 shadow-xl">
        <div className="max-w-7xl w-full flex flex-row items-center px-1">
          <Image src="/YoudyLogo.webp" height={50} width={50} alt={"Logo"} />

          <h1 className="text-3xl font-bold color-secondary">YOUDY</h1>
          <NavLinks />
          <LoginBtn />
        </div>
      </div>
    </>
  );
}
