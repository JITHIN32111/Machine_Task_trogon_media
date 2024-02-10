import React,{useState} from "react";
import { IoMdLogOut } from "react-icons/io";
import MobileNav from "./MobileNav";
function Header() {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full  z-10 sticky top-0 left-0 h-20 bg-white shadow-xl px-4 flex flex-row justify-end items-center">
     
     <h1 className='xl:hidden text-black' onClick={() => setShow(true)}>Open User</h1>

      <div className="flex text-md sm:text-lg flex-row items-center pr-12 cursor  pointer transition text-black ease-in hover:scale-90">

        <IoMdLogOut
          className="mr-1 
         " size={25}
        />
        <span>Logout</span>
      </div>
      {show?(
       <MobileNav setShow={setShow}/>
   ):null}
    </div>
  );
}

export default Header;
