import React from "react";
import user2img from "../../public/allImages/user2img.png";
import { CiHeart } from "react-icons/ci";
import { ImInfo } from "react-icons/im";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import tvImg from '../../public/allImages/tv.png'
function Posts() {
  return (
    <div className=" flex flex-col items-center bg-white full shadow-md  rounded-lg">
      <div>
        <figure>
          <img className="rounded-t-2xl " src={user2img} alt="" />
        </figure>
      </div>
      <div className="py-4 flex flex-col pl-6 sm:pl-4  gap-y-2">
        <div className="flex flex-row  items-center">
          <h1 className="text-xl pr-72  font-bold ">Faheema</h1>

          <span className="flex flex-row items-center justify-center  sm:pr-4 pr-2 gap-x-2">
            <span className="rounded-full bg-rose-200">
              <CiHeart className="text-rose-600" size={30} />
            </span>
            <span className="rounded-full bg-rose-100 w-7 h-7 text-center flex items-center pl-1">
              <FaLocationArrow className="text-purple-900" size={20} />
            </span>
            <span className="rounded-full bg-gray-100 border border-gray-300 shadow-black shadow-2xl w-8 h-8 text-center flex items-center pl-1">
              <ImInfo className="text-black" size={20} />
            </span>
          </span>
        </div>
        <span className="flex flex-row  text-gray-400">
          <FaLocationDot className="pt-1" size={20} />
          52km from you
        </span>
        <span className="text-base font-Arial font-medium text-balck ">
          Lorem Ipsum is simply dummy text of the printing and <br />
           typesetting
          industry. Lorem Ipsum has been the industry's.
        </span>
        <h1 className="text-xl pr-72 font-bold ">Interests</h1>

        <div className="grid grid-cols-3 md:grid-cols-4 pr-2 gap-4">
           <span className="rounded-full p bg-pink-600 text-white px-2">
          Tv Shows
        </span>
        <span className="rounded-full p bg-pink-600 text-white px-2">
          Tv Shows
        </span>  <span className="rounded-full p bg-pink-600 text-white px-2">
          Tv Shows
        </span>  <span className="rounded-full p bg-pink-600 text-white px-2">
          Tv Shows
        </span>  <span className="rounded-full p bg-pink-600 text-white px-2">
          Tv Shows
        </span>  <span className="rounded-full p bg-pink-600 text-white px-2">
          Tv Shows
        </span>  <span className="rounded-full p bg-pink-600 text-white px-2">
          Tv Shows
        </span>
        </div>

      </div>
    </div>
  );
}

export default Posts;
