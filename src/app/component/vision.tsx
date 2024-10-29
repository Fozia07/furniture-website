import React from 'react'
import Image from 'next/image'
import vision from "../public/Mask group (4).png"
function Vision() {
  return (
    <div>
        <div className='max-w-screen-2xl mx-20 mt-11 relative lg:mx-20 '>
            <div className=" my-2 bg-slate-500 absolute inset-20 left-0 w-full h-4/5 sm:bottom-0 sm:left-32 sm:w-4/5 sm:h-1/2 sm:px-11 md:h-1/2 md:inset-60 lg:inset-70 xl:inset-90 xl:h-1/3 xl:bg-opacity-50">
               <h1 className='text-white text-xl py-2 text-center font-semibold md:text-lg xl:text-xl  '>Vision</h1>
               <p className="text-white text-xs  text-center  sm:text-center sm:px-4 md:text-base md:px-18 lg:text-lg lg:px-20 xl:text-xl  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, at nostrum. Voluptatem aut, odit voluptatum praesentium debitis aliquam mollitia quasi repellat. Aliquid tempore in cupiditate consequatur molestiae reprehenderit </p>
               <button className='text-sm text-center px-3  rounded-2xl text-white  bg-black mt-4 mx-8 md:mx-20 xl:mx-40 '>read more</button>
            </div>
            <div className='flex justify-center '>
               <Image src={vision} alt=''className='  mb-44'></Image>
            </div>
            
      
        </div>
  </div>
  )
}

export default Vision