import React, { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import MobileNav from "./MobileNav";
import { TiThMenuOutline } from "react-icons/ti";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import MessageModal from "./MessageModal";

function Header() {
  const [show, setShow] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  const toggleMessage = () => {
    setOpenMessage(!openMessage); // Toggle the openMessage state
  };

  return (
    <div className="w-full z-10 sticky top-0 left-0 h-20 bg-white shadow-xl px-4 flex flex-row justify-between items-center">
      <div className="flex flex-row gap-x-4">
        <TiThMenuOutline
          className="xl:hidden text-black cursor-pointer"
          onClick={toggleMenu}
          size={30}
        />
        <BiSolidMessageSquareDetail
          className="lg:hidden text-black cursor-pointer"
          onClick={toggleMessage}
          size={30}
        />
      </div>

      <div className="flex text-md sm:text-lg flex-row items-center cursor-pointer transition text-black ease-in hover:scale-90 ml-auto">
        <span>Logout</span>
        <IoMdLogOut className="ml-1" size={25} />
      </div>

      {show ? <MobileNav setShow={setShow} /> : null}
      {openMessage ? <MessageModal setOpenMessage={setOpenMessage} /> : null}
    </div>
  );
}

export default Header;
