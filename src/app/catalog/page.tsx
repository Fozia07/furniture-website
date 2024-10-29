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
import pic17 from '..//public/Group 5194 (1).png'

function Page() {
  return (
    <div>
        <div className='mt-12 '>
            <Image src={pic17}alt='' className='w-full'></Image>
            <div className='mt-11 h-24'>

            <h1 className='text-gray-800 font-bold text-center text-4xl'>CATALOG</h1>
            </div>
        </div>
        <h1 className='font-bold text-center text-4xl mt-11 underline decoration-solid'>THE COLLECTIONS</h1>
          <p className='my-4 text-center text-base '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque repudiandae</p>

        <div className='grid grid-cols-4 gap-2 mt-14 w-full ml-10 '>
           
            <Image src={pic8} alt=''></Image>
            <Image src={pic9} alt=''></Image>
            <Image src={pic10} alt=''></Image>
            <Image src={pic11} alt=''></Image>
            <h1 className='text-xl font-medium'>Zurich Vision 60x60 </h1>
            <h1 className='text-xl font-medium'>Zurich peral 60x60</h1>
            <h1 className='text-xl font-medium'>Zurich Grey 60x60</h1>
            <h1 className='text-xl font-medium'>Zurich Dark grey</h1>
            <p>257 SAR</p>
            <p>312SAR</p>
            <p>312 SAR</p>
            <p>312 SAR</p>
            <Image src={pic12} alt=''></Image>
            <Image src={pic13} alt=''></Image>
            <Image src={pic14} alt=''></Image>
            <Image src={pic15} alt=''></Image>
            <h1 className='text-xl font-medium'>windsor White oak</h1>
            <h1 className='text-xl font-medium'>Sicity Grey dacor</h1>
            <h1 className='text-xl font-medium'>Saridinia White</h1>
            <h1 className='text-xl font-medium'>Sicity Grey</h1>
            <p>512 Sar</p>
            <p>312 SAR</p>
            <p>312 SAr</p>
            <p>312 SAR</p>
        </div>
  
           <button className='text-white px-8 py-3  text-lg font-bold bg-black w-40 h-12 rounded-lg mx-50'>View all</button>       
           
    </div>
  )
}

export default Page