import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export default function LoginBtn() {
  return (
    <>
      <Link href={"/"} className="color-yellow  justify-self-end mr-0 ml-auto ">
        <div className="justify-between items-center flex flex-row h-full gap-2">
          <FaUserCircle size={20} />
          <p>Se connecter</p>
        </div>
      </Link>
    </>
  );
}
