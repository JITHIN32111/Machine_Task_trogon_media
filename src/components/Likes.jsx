import React from 'react'
import userMsg1 from  '../../public/allImages/userMsg1.png'
import userMsg2 from  '../../public/allImages/userMsg2.png'
import userMsg3 from  '../../public/allImages/userMsg3.png'
import userMsg4 from  '../../public/allImages/userMsg4.png'
import userMsg5 from  '../../public/allImages/userMsg5.png'
function Likes() {
    const msgIcon = [{ icon: userMsg1 }, { icon: userMsg2 }, { icon: userMsg3 }, { icon: userMsg4 }, { icon: userMsg5 }];
  return (
    <div>
      <div class="w-full p-4 mt-6 bg-white border border-gray-200 rounded-lg shadow sm:py-4 px-5 dark:bg-gray-800 dark:border-gray-700">


<div class="flex items-center gap-2 justify-between mb-4">
    <h5 class="text-lg font-bold leading-none text-gray-900 dark:text-white">Likes and Matches</h5>
    <a href="#" class="text-md font-normal text-pink-500 hover:underline dark:text-blue-500">
       see all
    </a>
</div>
<div className='flex flex-row relative text-white'>
<span className='rounded-3xl bg-pink-700 pl-4 z-40 relative py-1 px-20 mr-[-12px] flex items-center'>Likes</span>
<span className='rounded-3xl bg-pink-300 z-35 relative py-1 px-12 ml-[-15px] flex items-center text-black'>Matches</span>

</div>

<div >

    <ul role="list" class="divide-y  w-[200px] sm:w-[220] divide-pink-300 dark:divide-gray-700">
    {msgIcon.map((msgIcon,index)=>(
  <li class="py-3 sm:py-4">
  <div class="flex items-center">
      <div class="flex-shrink-0">
          <img class="w-11 h-10  rounded-full" src={msgIcon.icon} alt="Neil image"/>
      </div>
      <div class="flex-1 min-w-0 ms-4">
        <div className='flex flex-row gap-x-16'>
        <p class="text-md font-medium text-gray-900  dark:text-white">
          Faheema
          </p>
          <p className='text-sm'>12.04</p>
        </div>
        
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          Likes you 3 min ago
          </p>
      </div>
     
  </div>
</li>

  ))}
        
      
        
       
    </ul>
</div>
</div>
    </div>
  )
}

export default Likes
