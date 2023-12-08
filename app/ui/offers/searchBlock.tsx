import { IoSearch } from "react-icons/io5";

export default function SearchBlock() {
  return (
    <div className="w-72 flex items-center  p-2 gap-2 border-2 border-black">
      <IoSearch size={20} />
      <input type="text" placeholder="Search..." />
    </div>
  );
}
