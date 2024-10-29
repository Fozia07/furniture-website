import React from 'react'

function Footer() {
    return (
<div className='bg-black  mt-11'>
<footer className="text-white body-font ">  
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
     <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">LOGO</span>
      </a>
     </div>
    </div> 
     
     <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
         <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Products</h2>
         <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Sand Stone</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Stone</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Cement</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Soft Stone</a>
          </li>
         </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Services</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Measurement Services</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Product Advice</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Interior Design</a>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CONTACT INFORMATION</h2>
        <p className='text-gray-500 text-sm text-center sm:text-left'>3181 Al imam Saudi Ibn Abdul Aziz Branch RdAn Nuzhah Riyadh 12474 Saudi Arabia</p>
      </div>
       
     
     
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
       <p className="text-gray-500 text-sm text-center sm:text-left">© copywrite@2022|all Right reserve —</p>
      
      </div>
     
    </div>
    </footer>
  </div> 
 )
  }

  export default Footer