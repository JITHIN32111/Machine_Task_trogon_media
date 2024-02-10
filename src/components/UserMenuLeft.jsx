import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { RiHome2Fill } from "react-icons/ri";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { BsRocketFill } from "react-icons/bs";
import { FaBinoculars } from "react-icons/fa6";
import userImg from "../../public/allImages/userImg.png";
import appStoreImg from "../../public/allImages/AppStore.png";
import googlePlay from "../../public/allImages/GooglePlay.png";
function UserMenuLeft() {
  const Menus = [
    { title: "Home", icon: RiHome2Fill },
    { title: "Messages", icon: TbMessageCircle2Filled },
    { title: "Settings", icon: IoMdSettings },
    { title: "Upgrade", icon: BsRocketFill },
    { title: "Explore", icon: FaBinoculars },
  ];
  return (
    <div>
      <div className="px-2 flex flex-col items-center ml-16 bg-white w-[300px] shadow-md  py-4 rounded-lg">
        <div>
          <div>
            <figure>
              <img src={userImg} className="rounded-[8px]" alt="" />
            </figure>
          </div>

          <div className="py-4 flex flex-col  gap-y-2">
            <h2 className="text-2xl text-black font-[700] ">Mohammed Anas</h2>
            <h2 className="text-2xl text-gray-600 font-[700] ">MN001XDR</h2>
            <span className="flex text-gray-400 flex-row justify-start gap-2 text-lg font-normal items-start'">
              <IoEyeOutline className="mt-[6px]" />
              <span>View Profile</span>
            </span>
          </div>
        </div>

        <ul className=" w-[250px] mr-2 bg-white flex flex-col gap-y-2">
          {Menus.map((Menu, index) => (
            <li
              className={`flex rounded-md p-2 cursor-pointer ${
                index === 0
                  ? "bg-rose-200 text-black"
                  : "bg-white text-gray-400"
              } hover:bg-light-whitefont-medium text-lg items-center gap-x-4`}
            >
              <Menu.icon
                className={`${index === 0 ? "text-pink-600" : "text-black"}`}
                size={23}
              />

              <span>{Menu.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-6 mt-6 text-black flex flex-col items-start ml-16 bg-white w-[300px] shadow-md  py-4 rounded-lg">
        <h1 className="font-bold text-lg">Download our App</h1>
        <p className="text-sm text- font-normal">
          Lorem Ipsum is simply dummy text of <br /> the printing and
          typesetting industry.
        </p>
        <div className="mt-4 flex flex-col gap-y-4">
          <img src={appStoreImg} alt="" />
          <img src={googlePlay} alt="" />
        </div>
      </div>
    </div>
  );
}

export default UserMenuLeft;
