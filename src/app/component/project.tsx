import React from 'react'
import Image from 'next/image'
import pic4 from '../public/Mask group (5).png'
import pic5 from '../public/Mask group (6).png'
import pic6 from '../public/Mask group (7).png'
import pic7 from '../public/Mask group (8).png'
import pic8 from '../public/10 1.png'
import pic9 from '../public/12 1.png'
import pic10 from '../public/13 1.png'
import pic11 from '../public/14 1 (1).png'
import pic12 from '../public/14 1.png'
import pic13 from '../public/8 1 (1).png'
import pic14 from '../public/8 1.png'
import pic15 from '../public/9 61.png'
import pic16 from '../public/unsplash_mpN7xjKQ_Ns.png'




function Project() {
  return (
    <div>
      <div className='max-w-screen-2xl mx-auto'>

          <h1 className='font-bold text-center text-4xl mt-11 mx-20 underline decoration-solid'>PROJECTS</h1>
          <p className='my-4 text-center text-base mx-20'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque repudiandae</p>

        <div className='grid grid-cols-1 mt-14 w-full mx-20 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
           <div>
            <Image src={pic4} alt=''></Image>
            <h1 className='text-xl font-medium'>King Tower</h1>
            <p>marble flooring</p>
           </div>
           <div>
            <Image src={pic5} alt=''></Image>
            <h1 className='text-xl font-medium'>Dubai Mall</h1>
            <p>Wood flooring</p>
           </div>
           <div>
            <Image src={pic6} alt=''></Image>
            <h1 className='text-xl font-medium'>King Road Office</h1>
            <p>outdoor flooring</p>
           </div>
           <div>
            <Image src={pic7} alt=''></Image>
            <h1 className='text-xl font-medium'>Beech Tower Alupang</h1>
            <p>wood flooring</p>
           </div>
        </div>
        <div className='bg-black w-[179px] h-[52px] mx-11  rounded-lg mt-16 align-bottom flex flex-row-reverse '>
               <button className='text-white pr-12 py-3 text-lg  font-bold '>View all</button>
        </div>
        <div className='mx-10 text-center  md:text-center'>
        <h1 className='font-bold  text-4xl pl-11 mt-11 underline decoration-solid'>THE COLLECTIONS</h1>
        <p className='my-4 pl-11 text-base '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque repudiandae</p>
        </div>

        <div className='grid grid-cols-2 gap-2 mt-14 w-full mx-10 md:grid-cols-3 xl:grid-cols-4'>
           <div>
            <Image src={pic8} alt=''></Image>
            <h1 className='text-xl font-medium'>Zurich Vision 60x60 </h1>
            <p>257 SAR</p>
           </div>
           <div>
            <Image src={pic9} alt=''></Image>
            <h1 className='text-xl font-medium'>Zurich peral 60x60</h1>
            <p>312SAR</p>
           </div>
           <div>
            <Image src={pic10} alt=''></Image>
            <h1 className='text-xl font-medium'>Zurich Grey 60x60</h1>
            <p>312 SAR</p>
           </div>
           <div>
            <Image src={pic11} alt=''></Image>
            <h1 className='text-xl font-medium'>Zurich Dark grey</h1>
            <p>312 SAR</p>
           </div>
           <div>
            <Image src={pic12} alt=''></Image>
            <h1 className='text-xl font-medium'>windsor White oak</h1>
            <p>512 Sar</p>
           </div>
           <div>
            <Image src={pic14} alt=''></Image>
            <h1 className='text-xl font-medium'>Sicity Grey dacor</h1>
            <p>312 SAR</p>
           </div>
           <div>
            <Image src={pic13} alt=''></Image>
            <h1 className='text-xl font-medium'>Saridinia White</h1>
            <p>312 SAr</p>
           </div>
           <div>
            <Image src={pic15} alt=''></Image>
            <h1 className='text-xl font-medium'>Sicity Grey</h1>
            <p>312 SAR</p>
           </div>
        </div>
       
           <button className='ml-11 mt-14 text-white px-8 py-3  text-lg font-bold bg-black w-40 h-12 rounded-lg mx-50 sm:ml-16 md:ml-20 lg:ml-28 xl:ml-32'>View all</button>
  
           <div className='mt-14 ml-11 flex justify-center relative '>
             <Image src={pic16} alt='' ></Image>
        
             <div className="bg-white w-2/3 h-1/2 ml-8 mt-36 absolute right-20 bottom-0 border-4 sm:h-1/4  lg:h-1/4 lg:bottom-20 lg:right-7">
               <h1 className='text-black text-xl  text-center font-bold md:text-lg lg:text-xl xl:text-4xl'>Our Showroom</h1>
               <p className="text-black text-xs text-left md:text-base lg:text-lg xl:text-xl   ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, at nostrum. Voluptatem aut, odit voluptatum praesentium debitis aliquam mollitia</p>
               <button className='text-white px-8 pb-3  text-sm font-bold bg-black w-30 h-6 rounded-lg mx-50 my-4 hover:bg-slate-500 '>Learn more</button>
  
             </div>
           </div>
      </div>
   </div>
  )
}

export default Project