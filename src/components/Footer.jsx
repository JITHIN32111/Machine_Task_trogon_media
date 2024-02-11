import React from 'react'

import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
function Footer() {
  return (
    <div>
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
          <FaYoutube />
          <RiInstagramFill />
          <RiFacebookFill />
          <RiTwitterXFill />
          <p className="text-[12px] text-gray-500">© 2024 Mynikkah </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
