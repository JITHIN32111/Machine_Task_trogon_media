import React from "react";
import profileImg from "../../public/allImages/UserProfile.png";
import { IoEyeOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import tvImg from "../../public/allImages/tv.png";
import designImg from "../../public/allImages/Design.png";
import actingImg from "../../public/allImages/acting.png";
import artImg from "../../public/allImages/art.png";
import gamesImg from "../../public/allImages/games.png";
import cricketImg from "../../public/allImages/cricket.png";
import photographyImg from "../../public/allImages/photography.png";
function UserProfileTop() {
    const Menus = [
        { title: "Tv Shows", icon: tvImg },
        { title: "Photography", icon: photographyImg },
        { title: "Design", icon: designImg },
        { title: "Acting", icon: actingImg },
        { title: "Art Gallery", icon: artImg },
        { title: "Board games", icon: gamesImg },
        { title: "Cricket", icon: cricketImg },
      ];
  return (
    <div className="flex mt-5 flex-col">
      <div className="flex flex-row gap-x-6">
        {/* userImg */}
        <figure>
          <img className="rounded-xl" src={profileImg} alt="" />
        </figure>
        {/* userImg end */}

        {/* userDetails */}
        <div className=" flex flex-col w-[400px] px-6 py-2 rounded-2xl shadow-2xl">
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
          <div className="flex flex-row"></div>
          {/* interests */}
        </div>
        {/* userDetails end*/}
      </div>

      <div></div>
    </div>
  );
}

export default UserProfileTop;
