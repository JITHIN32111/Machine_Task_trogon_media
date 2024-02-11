import React, { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import MenuModal from "./MenuModal";
import { TiThMenuOutline } from "react-icons/ti";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaHeartCircleExclamation } from "react-icons/fa6";
import MessageModal from "./MessageModal";
import LikesModal from "./LikesModal";

function Header() {
  const [show, setShow] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [openLikes, setOpenLikes] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
    setOpenLikes(false);
    setOpenLikes(false);
    setOpenMessage(false);
  };

  const toggleMessage = () => {
    setOpenMessage(!openMessage);
    setOpenLikes(false);
  };

  const toggleLikes = () => {
    setOpenLikes(!openLikes);
    setOpenMessage(false);
  };

  return (
    <div className="w-full z-10 sticky top-0 left-0 h-20 bg-white shadow-xl px-4 flex flex-row justify-between items-center">
      <div className="flex flex-row gap-x-4">
        <TiThMenuOutline
          className="xl:hidden text-black cursor-pointer transition  ease-in hover:scale-90"
          onClick={toggleMenu}
          size={30}
        />
        <BiSolidMessageSquareDetail
          className="lg:hidden text-black cursor-pointer transition  ease-in hover:scale-90"
          onClick={toggleMessage}
          size={30}
        />
        <FaHeartCircleExclamation
          className="lg:hidden text-black cursor-pointer transition  ease-in hover:scale-90"
          onClick={toggleLikes}
          size={30}
        />
      </div>

      <div className="flex text-md sm:text-lg flex-row items-center cursor-pointer transition text-black ease-in hover:scale-90 ml-auto">
        <span>Logout</span>
        <IoMdLogOut className="ml-1" size={25} />
      </div>

      {show ? <MenuModal setShow={setShow} /> : null}
      {openMessage ? <MessageModal setOpenMessage={setOpenMessage} /> : null}
      {openLikes ? <LikesModal setOpenLikes={setOpenLikes} /> : null}
    </div>
  );
}

export default Header;
