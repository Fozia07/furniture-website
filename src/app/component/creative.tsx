import React from 'react'
import image1 from '../public/Rectangle 1121.png'
import image2 from '../public/Rectangle 1122.png'
import image3 from '../public/Rectangle 1123 (1).png'
import Image from 'next/image'

function Creative() {
  return (
    <div>
        <div className='max-w-screen-2xl mx-auto'>
          <div className='py-10'>
           <h1 className='text-3xl font-bold text-left mx-20'>Creative Solutions by Professional Designers</h1>
           <p className='text-lg text-left mx-20 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo necessitatibus inventore ullam cum mollitia, eligendi voluptates est. Voluptatibus mollitia, vitae sequi provident repudiandae asperiores libero, exercitationem in obcaecati deserunt explicabo.</p>
          </div>   
          <div className='grid grid-cols-1 mx-20 gap-5 md:grid-cols-2 lg:grid-cols-3 '>
            <Image src={image1} alt=""></Image>
            <Image src={image2} alt=""></Image>
            <Image src={image3} alt=""></Image>
          </div>
       
       </div>
   
   
   
   
    </div>
  )
}

export default Creative
