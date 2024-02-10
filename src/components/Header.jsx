import React from "react";
import { IoMdLogOut } from "react-icons/io";

function Header() {
  return (
    <div className="w-full h-20 bg-white shadow-xl px-4 flex flex-row justify-end items-center">
      <div className="flex text-md sm:text-lg flex-row items-center pr-12 cursor  pointer transition text-black ease-in hover:scale-90">
        <IoMdLogOut
          className="mr-1 
         " size={25}
        />
        <span>Logout</span>
      </div>
    </div>
  );
}

export default Header;
