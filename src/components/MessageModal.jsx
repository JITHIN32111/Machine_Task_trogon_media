import React from "react";
import { msgIcon } from "../datas/data";

function MessageModal({ setOpenMessage }) {
  return (
    <div className="z-40 xl:hidden bg-white sm:w-1/2 fixed top-0 mt-20 left-1">
      <div class="w-[350px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:py-4 px-11 dark:bg-gray-800 dark:border-gray-700">
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
              <li class="py-3 sm:py-4" key={index}>
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
    </div>
  );
}

export default MessageModal;
