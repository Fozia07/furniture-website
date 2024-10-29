import Image from 'next/image'
import React from 'react'
import image1 from  '../public/Mask group (10).png'
import image2 from '../public/Mask group.png'
import image3 from '../public/Mask group (2).png'
import image4 from "../public/Mask group (1).png"

import Link from 'next/link'

function Product() {
  return (
    <div>
       <div max-w-screen-2xl mx-auto >
            <div className=''>
             <h1 className='text-4xl font-bold text-center text-gray-950 mx-20 my-10 sm:text-6xl lg:text-8xl '>Products</h1> 
             <p className='text-slate-600 mx-20 mb-10 px-12 sm:text-2xl sm:px-16 lg:text-4xl text-center '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem vel vero, culpa eveniet soluta ad unde laudantium ducimus dolore quisquam ullam earum nam voluptate. Est placeat quaerat voluptatem unde!
             Totam est porro ex impedit possimus dolorem ratione nostrum hic optio quia ipsa dolorum, quod corrupti numquam enim dolor maxime voluptate! Sapiente unde quasi eius. Officia quas dolore accusamus consequuntur!</p>
           </div> 

           

         <div className='columns-1 md:columns-2 lg:columns-3 px-10 mx-20  lg:ml-30'> 
              <div className=' '>
                <Image src={image1} alt='marbles' className='w-full h-full'></Image>
                <div className='bg-gray-950 '>
                  <h1 className='text-white text-center  text-lg font-medium'>Bathroom Tiles</h1>
                 <Link href=''>
                 <p className='text-white text-center px-9 text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta commodi in magni dignissimos autem pariatur,</p>
                 </Link>
               </div>

              </div>
             <div className=''>
                <Image src={image2} alt='marbles'  className=''></Image>
                <div className='bg-gray-950 mb-8'>
                 <h1 className='text-white text-center  text-lg font-medium'>Bedroom Tiles</h1>
                 <Link href=''>
                 <p className='text-white text-center px-9 text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta commodi in magni dignissimos autem pariatur,</p>
                 </Link>
               </div>
             </div>
             
             <div className=''>  
                 <Image src={image3} alt='marbles'className=''></Image>
                 <div className='bg-gray-950 '>
                 <h1 className='text-white text-center  text-lg font-medium'>Outdoor Tiles</h1>
                 <Link href=''>
                 <p className='text-white text-center px-9 text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta commodi in magni dignissimos autem pariatur,</p>
                 
                 </Link>
               </div>
             </div>
            <div className=''>    
                 <Image src={image4} alt='marbles' className=''></Image>
                 <div className='bg-gray-950 '>
                 <h1 className='text-white text-center  text-lg font-medium '>Kitchen Tiles</h1>
                <Link href=''>
                 <p className='text-white text-center px-9 text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta commodi in magni dignissimos autem pariatur,</p>
                 </Link>
               </div>
              </div> 
          </div>
         </div>
       
    
            
    </div>  
    
  )
}

export default Product