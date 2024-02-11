import React from "react";
import userMsg1 from "../../public/allImages/userMsg1.png";
import userMsg2 from "../../public/allImages/userMsg2.png";
import userMsg3 from "../../public/allImages/userMsg3.png";
import userMsg4 from "../../public/allImages/userMsg4.png";
import userMsg5 from "../../public/allImages/userMsg5.png";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import Likes from "../components/Likes";

function Messages() {
  const msgIcon = [
    { icon: userMsg1 },
    { icon: userMsg2 },
    { icon: userMsg3 },
    { icon: userMsg4 },
    { icon: userMsg5 },
  ];

  return (
    <div className="hidden lg:block pr-8">
      <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:py-4 px-11 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Messages
          </h5>
          <a
            href="#"
            class="text-md font-normal text-pink-500 hover:underline dark:text-blue-500"
          >
            see all
          </a>
        </div>
        <div class="flow-root">
          <ul
            role="list"
            class="divide-y  w-[200px] sm:w-[220] divide-pink-300 dark:divide-gray-700"
          >
            {msgIcon.map((msgIcon, index) => (
              <li class="py-3 sm:py-4">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="w-11 h-10  rounded-full"
                      src={msgIcon.icon}
                      alt="Neil image"
                    />
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <div className="flex flex-row gap-x-16">
                      <p class="text-md font-medium text-gray-900  dark:text-white">
                        Faheema
                      </p>
                      <p className="text-sm">12.04</p>
                    </div>

                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      talk to u later
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Likes />
      <div>
      <div className="mt-2 gap-8 font-medium flex justify-center items-center flex-wrap text-[11px]">
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
  );
}

export default Messages;
