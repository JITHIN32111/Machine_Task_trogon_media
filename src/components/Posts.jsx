import React from "react";
import user1img from "../../public/allImages/user4img.png";
import user2img from "../../public/allImages/user3img.png";
import user3img from "../../public/allImages/user5img.png";

import { CiHeart } from "react-icons/ci";
import { ImInfo } from "react-icons/im";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import tvImg from "../../public/allImages/tv.png";
import designImg from "../../public/allImages/Design.png";
import actingImg from "../../public/allImages/acting.png";
import artImg from "../../public/allImages/art.png";
import gamesImg from "../../public/allImages/games.png";
import cricketImg from "../../public/allImages/cricket.png";
import photographyImg from "../../public/allImages/photography.png";

const PostImgs = [{ icon: user1img }, { icon: user2img }, { icon: user3img }];

const Menus = [
  { title: "Tv Shows", icon: tvImg },
  { title: "Photography", icon: photographyImg },
  { title: "Design", icon: designImg },
  { title: "Acting", icon: actingImg },
  { title: "Art Gallery", icon: artImg },
  { title: "Board games", icon: gamesImg },
  { title: "Cricket", icon: cricketImg },
];
function Posts() {
  return (
    <div className="flex w-full flex-col gap-y-8 pl-4 px-12 sm:pr-0 sm:pl-20 md:pl-10 lg:pl-40  xl:pl-0">
      {PostImgs.map((post,index)=>(

   
    <div className=" flex flex-col items-center   bg-white w-full shadow-md  rounded-lg">
      
      <div >
        
        <div>
          <figure>
            <img className="rounded-t-2xl w-full " src={post.icon} alt="" />
          </figure>
        </div>
        <div className="py-4 flex flex-col pr-0 md:pr-6  pl-6 sm:pl-4 md:pl-4 lg:pl-3 gap-y-2">
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
            typesetting industry. Lorem Ipsum has been the industry's.
          </span>
          <h1 className="text-xl pr-72 font-bold ">Interests</h1>

          <div className="grid grid-cols-3 md:grid-cols-4 pr-0  sm:pr-2  gap-3 sm:gap-2 ">
            {Menus.map((menu, index) => (
              <span
                className={`rounded-full flex flex-row w-32 sm:w-32  py-1  px-2  text-sm bg-pink-600 text-white pl-4`}
              >
                <img src={menu.icon} className="w-4 pt-1 h-4" alt="" />
                {menu.title}
              </span>
            ))}
          </div>
        </div>
      </div>
      
    </div>
       ))}
    </div>
    
  );
}

export default Posts;
