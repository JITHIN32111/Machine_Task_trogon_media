import React, { useState } from "react";
import user1img from "../../public/allImages/user4img.png";
import user2img from "../../public/allImages/user3img.png";
import user3img from "../../public/allImages/user8.png";
import { Link, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { ImInfo } from "react-icons/im";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { PostImgs, Menus } from "../datas/data";

function Posts() {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col gap-y-8 pl-4 px-0 sm:px-12 sm:pl-20 md:pl-10 lg:pl-40 xl:pl-0">
      {PostImgs.map((post, index) => (
        <div
          onClick={() => navigate("/userInfo")}
          key={index}
          className="flex flex-col items-center bg-white w-full shadow-md rounded-lg"
        >
          <div className={`shimmer ${loading ? "shimmer-loading" : ""}`}>
            <figure>
              <img
                className={`rounded-t-2xl w-full ${loading ? "hidden" : ""}`}
                src={post.icon}
                alt=""
                onLoad={handleImageLoad}
              />
            </figure>
          </div>
          <div className="py-4 flex flex-col w-full pr-0 md:pr-6 pl-2 sm:pl-4 md:pl-4 lg:pl-3 gap-y-2">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-xl pr-4 md:pr-12 font-bold">Faheema</h1>

              <span className="flex pr-2 sm:pr-0 flex-row items-center gap-x-2">
                <span className="rounded-full bg-rose-200">
                  <CiHeart className="text-rose-600" size={30} />
                </span>
                <span className="rounded-full bg-rose-100 w-7 h-7 flex items-center justify-center">
                  <FaLocationArrow className="text-purple-900" size={20} />
                </span>
                <span className="rounded-full bg-gray-100 border border-gray-300 shadow-black shadow-2xl w-8 h-8 flex items-center justify-center">
                  <ImInfo className="text-black" size={20} />
                </span>
              </span>
            </div>
            <span className="flex flex-row text-gray-400 items-center">
              <FaLocationDot className="pt-1" size={20} />
              52km from you
            </span>
            <span className="text-base font-Arial font-medium text-balck ">
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the industry's.
            </span>
            <h1 className="text-xl pr-4 md:pr-12 font-bold">Interests</h1>

            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 pr-0 sm:pr-2 gap-3 sm:gap-2">
              {Menus.map((menu, index) => (
                <span
                  key={index}
                  className="rounded-full flex flex-row w-28 sm:w-32 py-1 px-2 text-sm bg-pink-600 text-white pl-4"
                >
                  <img src={menu.icon} className="w-4 pt-1 h-4" alt="" />
                  {menu.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
