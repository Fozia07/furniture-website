import Image from 'next/image'
import React from 'react'
import image from "../public/unsplash_hE0nmTffKtM.png"

function Hero() {
  return(
    
    <div > 
     {/* /* * Hero Section Container  
     * <!-- Content and Image -->  */}
     
     <div className="relative max-w-screen-2xl flex  h-auto  mx-auto lg:px-6 mt-8 pl-4 ">
        <Image src={image} alt="Hero Image" className=" object-cover min-w-full  "/>
     
     <div className="absolute top-0 right-10 w-1/4 sm:top-0 sm:right-28 sm:w-1/3 h-full mr-10 md:w-1/2 md:h-2/3 md:top-12 md:right-20 lg:right-18 lg:h-2/3 xl:w-1/2 xl:h-1/2 xl:right-32 xl:top-32 flex item-center justify-center">
      <div className=" bg-black bg-opacity-10 pl-2  rounded-lg">
        <h1 className= 'text-center text-sm mb-1 sm:mb-3 text-white font-bold md:text-xl md:mt-2 lg:text-2xl xl:text-4xl '>New Gernation Ceramic Tiles</h1>
        <p className=" hidden text-gray-200 text-xs sm:block md:text-sm lg:text-lg xl:text-xl xl:mt-5 xl:px-8 font-bold ">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores sunt repellendus modi beatae illo reprehenderit harum distinctio consequatur? Lorem ipsum dolor, sit 
       </p>
       

     </div>
     
     </div>
     
    
     </div> 
   </div>
   )
   }
     export default Hero

         {/* <section  >
        
        
         
          </section>  
 <div className= ' max-w-full max-h-full mx-auto my-11'>
               <Image src={image} alt="/" className=' object-cover w-full sm:w-2/3 md:w-3/4  '></Image>     
           </div>
            <div className='relative bg-slate-400'>
              <div className='absolute -inset-72 left-1/2 bottom-11'>
                <h1 className='  md-text-4xl lg:text-6xl font-bold mt-4 pl-5'>New Gernation Ceramic Tiles</h1>
                <p className='  md:text-xl lg:text-2xl text-left pt-16 pl-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa saepe totam praesentium? Beatae quas sit alias assumenda deleniti voluptatem reiciendis consectetur iste esse minima,Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa praesentium ut amet quasi quia modi repellat  </p>
                <button className='text-slate-900 top-2/3 ml-11  mt-4 text-2xl font-bold bg-slate-600 w-48 h-20  rounded-lg mx-50  hover:bg-slate-500 '>Learn more</button>
              </div>
           </div> */}
