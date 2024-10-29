import Image from 'next/image'
import React from 'react'
import pic8 from '../public/10 1.png'
import pic9 from '../public/12 1.png'
import pic10 from '../public/13 1.png'
import pic11 from '../public/14 1 (1).png'
import pic12 from '../public/14 1.png'
import pic13 from '../public/8 1 (1).png'
import pic14 from '../public/8 1.png'
import pic15 from '../public/9 61.png'
import pic18 from '../public/Mask group (9).png'

function Page() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
        <div className='w-full h-20 bg-slate-600 text-white text-2xl text-center font-bold pl-12 py-4 mt-4'>
           <a href='' className='hover:text-yellow-100'>Product Name</a>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 '>
            <div className='mt-12 ml-24 lg:ml-4 xl:2 '>
                <Image src={pic18} alt=''></Image>
            </div>
            <div className='mt-12 ml-32 sm:ml-52 lg:ml-2 xl:ml-2'>
                <h1 className=' text-xl font-bold lg:text-2xl'>Product Name</h1>
                <p className=' text-xl mt-3'>1950 SAR</p>
                <p className='text-sm mt-6 text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ex obcaecati voluptate totam quod molestias illo. Exercitationem dicta repellat porro at veniam. Ad odio cumque consequuntur laboriosam ab? Suscipit, tempore.</p>
                <button className='text-black px-8 pb-3  text-lg font-bold bg-white w-30 h-10  mx-50 my-10 border-solid outline outline-offset-1 outline-black mr-4 '> + 1 -</button>
                <button className='text-white px-8 pb-3  text-lg font-bold bg-black w-30 h-10 mx-50 my-10 hover:bg-gray-700'>Add to cart</button>
                <li>Lorem ipsum dolor sit amet cons </li>
                <li>Lorem ipsum dolor sit amet cons</li>
                <li>Lorem ipsum dolor sit amet cons</li>
            </div>         
        </div>
        <div className='grid grid-cols-2 gap-2 mt-14 w-full mx-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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
  
           
        </div>
    
  )
}

export default Page