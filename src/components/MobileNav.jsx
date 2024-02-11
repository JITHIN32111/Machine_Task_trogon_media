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
import { MdCloseFullscreen } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
function MobileNav({setShow}) {
  const Menus = [
    { title: "Home", icon: RiHome2Fill },
    { title: "Messages", icon: TbMessageCircle2Filled },
    { title: "Settings", icon: IoMdSettings },
    { title: "Upgrade", icon: BsRocketFill },
    { title: "Explore", icon: FaBinoculars },
  ];
  return (
    <div className="z-45 xl:hidden sm:w-1/2 fixed top-0 mt-20 left-1">
      <div className="px-2  flex flex-col items-center ml-0 bg-white w-[300px] shadow-md  py-2 max-h-[400px] overflow-auto">
        <div>
          <span className="flex justify-end pb-2 text-gray-500 ">
          <MdCloseFullscreen size={20} className="text-end cursor-pointer" onClick={() => setShow(false)}/>

          </span>
         
          <div>
            <figure>
              <img src={userImg} className="rounded-[8px] h-32 ml-4 w-32" alt="" />
            </figure>
          </div>

          <div className="py-2 flex flex-col  gap-y-1">
            <h2 className="text-xl text-black font-[700] ">Mohammed Anas</h2>
            <h2 className="text-xl text-gray-600 font-[700] ">MN001XDR</h2>
            <span className="flex text-gray-400 flex-row justify-start gap-1 text-md font-normal items-start'">
              <IoEyeOutline className="mt-[6px]" />
              <span>View Profile</span>
            </span>
          </div>
        </div>

        <ul className="   w-[200px] mr-2 bg-white flex flex-col gap-y-1">
          {Menus.map((Menu, index) => (
            <li
              className={`flex rounded-md p-2 cursor-pointer ${
                index === 0
                  ? "bg-rose-200 text-black"
                  : "bg-white text-gray-400"
              } hover:bg-light-whitefont-medium text-md items-center gap-x-4`}
            >
              <Menu.icon
                className={`${index === 0 ? "text-pink-600" : "text-black"}`}
                size={23}
              />

              <span>{Menu.title}</span>
            </li>
          ))}
        </ul>
        <h1 className="font-bold text-md">Download our App</h1>
        <p className="text-sm text- font-normal">
          Lorem Ipsum is simply dummy text of <br /> the printing and
          typesetting industry.
        </p>
        <div className="mt-4 flex flex-row gap-x-4">
          <img src={appStoreImg} className="w-1/2 h-5 rounded-md" alt="" />
          <img src={googlePlay} alt="" className="w-1/2 h-5 rounded-md" />
        </div>
        
        <div>
      <div className="mt-2 gap-2 font-medium flex justify-center items-center flex-wrap text-[11px]">
        <p>Privacy Policy</p>
        <p>Terms and Condition</p>
        <p>Pricing</p>
      </div>
      <div className="mt-2 font-medium   gap-8 flex justify-start pl-4 items-center  flex-wrap text-[11px]">
        <p>Feedback</p>
        <p>Help & Support</p>
      </div>
     
     <div className="flex flex-row text-pink-700 justify-start gap-x-3 pl-4 pt-2">
     <FaYoutube/>
     <RiInstagramFill/>
     <RiFacebookFill/>
     <RiTwitterXFill/>
     <p className="text-[12px] text-gray-500">© 2024 Mynikkah </p>
     </div>

      </div>
      </div>

      {/* <div className="px-6 mt-6 text-black flex flex-col items-start ml-16 bg-white w-[300px] shadow-md  py-4 rounded-lg">
        <h1 className="font-bold text-lg">Download our App</h1>
        <p className="text-sm text- font-normal">
          Lorem Ipsum is simply dummy text of <br /> the printing and
          typesetting industry.
        </p>
        <div className="mt-4 flex flex-col gap-y-4">
          <img src={appStoreImg} alt="" />
          <img src={googlePlay} alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default MobileNav;
