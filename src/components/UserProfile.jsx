import React,{useState} from "react";
import profileImg from "../../public/allImages/UserProfile.png";
import { FaLocationDot } from "react-icons/fa6";

import { CiHeart } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { Menus } from "../datas/data";
import { userDetails } from "../datas/data";

function UserProfile() {
  const [loading, setLoading] = useState(true);

  const handleImageLoaded = () => {
    setLoading(false);
  };
  return (
    <div className="flex mt-5 flex-col mx-auto">
      <div className="flex flex-row gap-x-6 ">
        {/* userImg */}
        <figure className="hidden md:block relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          {/* You can replace the loading spinner with any loading indicator */}
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-700"></div>
        </div>
      )}
      <img
        className={`rounded-xl ${loading ? "hidden" : "block"}`}
        src={profileImg}
        alt=""
        onLoad={handleImageLoaded}
        onError={handleImageLoaded} // in case of loading failure
      />
    </figure>
        {/* userImg end */}

        {/* userDetails */}
        <div className=" flex flex-col w-full md:w-[400px] px-6 py-2 rounded-2xl shadow-2xl">
          <figure className="md:hidden">
            <img className="rounded-xl h-96" src={profileImg} alt="" />
          </figure>
          <h2 className="text-[22px] text-black font-[700] ">Faheema</h2>
          <h2 className="text-[22px] text-gray-600 font-[700] ">MN001XDR</h2>
          <span className="flex text-gray-400 flex-row justify-start gap-2 text-lg font-normal items-start'">
            <span className="flex flex-row  text-gray-400">
              <FaLocationDot className="pt-2" size={20} />
              <p className="text-[15px]">52 km from you</p>
            </span>
          </span>
          <span className="text-[17px] font-[500] pt-1">
            <p>Never Married</p>
            <p>Bachelors (BSc Computer Science)</p>
            <p>Kozhikode, Kozhikode, Kerala</p>
            <p className="text-[15px] font-normal pt-3 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
          </span>
          {/* interests */}
          <h1 className="text-[22px] text-black font-[700] pt-2">Interests</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:sm:grid-cols-3 pr-0  sm:pr-0  gap-3 sm:gap-2 pt-2  ">
            {Menus.map((menu, index) => (
              <span
                className={`rounded-full flex flex-row w-32 sm:w-28  py-1   text-sm bg-white text-purple-800 border border-purple-800 pl-2`}
              >
                <img src={menu.icon} className="w-4 pt-1 h-4" alt="" />
                {menu.title}
              </span>
            ))}
          </div>
          {/* interests end*/}

          {/* buttons */}
          <div className="flex flex-row items-center gap-x-12 justify-center mt-6">
            <span className="px-2 sm:w-[150px] w-full sm:px-3 pr-5 py-1 flex flex-row  rounded-full bg-pink-300">
              <span className="rounded-full ">
                <CiHeart className="text-rose-600 font-bold" size={30} />
              </span>
              <h1 className="sm:text-[13px] pt-1 md:text-[13px] lg:text-[15px] text-[15px] font-medium text-black">
                Show Interest
              </h1>
            </span>
            <span className="px-2 sm:w-[150px] w-full sm:px-3 pr-5 py-1 flex flex-row  rounded-full bg-pink-200">
              <span className="rounded-full ">
                <FaLocationArrow
                  className="text-purple-900 font-bold"
                  size={28}
                />
              </span>
              <h1 className="sm:text-[13px] pt-1 md:text-[13px] lg:text-[15px] text-[15px] font-medium text-black">
                Share Profile
              </h1>
            </span>
          </div>
          <div className="flex flex-row items-center gap-x-2 justify-center px-2 bg-pink-600 mt-6 rounded-full py-2 text-white text-[16px]">
            <IoIosCall size={20} />
            Request Call
          </div>
          {/* buttons end*/}
        </div>
        {/* userDetails end*/}
      </div>
      {/* userBio */}
      <span className="w-full flex flex-col justify-start pl-4 py-5 bg-white shadow-2xl rounded-3xl ml-0  lg:ml-4 mx-auto mt-10">
        <h1 className="text-black font-bold text-xl">Bio</h1>
        {userDetails.map((section, index) => (
          <div key={index}>
            <h1 className="text-gray-600 font-bold text-xl pt-5">
              {section.title}
            </h1>
            <div className="flex flex-col mt-3 gap-y-2">
              {section.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="flex flex-row  justify-start">
                  <p className="text-md font-bold w-32">{detail.label}</p>
                  <p className="font-normal pl-20 sm:pl-48 ">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="bg-pink-600 text-center text-white font-medium rounded-full py-3 mt-8 mb-4 px-2">
          Upgrade to See More
        </div>
      </span>
      {/* userBio end*/}
    </div>
  );
}

export default UserProfile;
