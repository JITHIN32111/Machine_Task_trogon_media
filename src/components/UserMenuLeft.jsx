import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { RiHome2Fill } from "react-icons/ri";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { BsRocketFill } from "react-icons/bs";
import { FaBinoculars } from "react-icons/fa6";
function UserMenuLeft() {
  return (
    <div className="px-8 ml-8 bg-white w-[300px]  py-8 rounded-lg">
      <div>
        <div>
          <figure>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU' className="rounded-[8px]" alt="" />
          </figure>
        </div>

        <div className="py-4 flex flex-col gap-y-2">
          <h2 className="text-2xl text-black font-[700] ">Mohammed Anas</h2>
          <h2 className="text-2xl text-gray-400 font-[700] ">MN001XDR</h2>
          <span className="flex flex-row justify-start gap-2 text-lg font-medium items-center'">
          <IoEyeOutline  className="mt-[6px]"/>
          <span>View Profile</span>
          </span>
        </div>

      </div>

      <ul className=" w-[200px] bg-white ">
        <li
          className={`flex  rounded-md p-2 cursor-pointer bg-pink-300 hover:bg-light-white text-gray-900 font-[500] text-lg items-center gap-x-4 `}
        >

          <span>Home</span>
        </li>
        <li
          className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-600 text-lg font-[500] items-center gap-x-4 `}
        >
          <span>Home</span>
        </li>
        <li
          className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-900 text-sm items-center gap-x-4 `}
        >
          <span>Home</span>
        </li>
        <li
          className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-900 text-sm items-center gap-x-4 `}
        >
          <span>Home</span>
        </li>
      </ul>
    </div>
  );
}

export default UserMenuLeft;
