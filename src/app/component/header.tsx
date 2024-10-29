
import Link from 'next/link'
import { HouseIcon, SearchIcon, Sheet, ShoppingCartIcon,UserRound} from 'lucide-react'
function Header() {
  return( 
      
      <div className='max-w-screen-2xl mx-auto'>
        
          <div className='  text-center  '>
             <h1 className='font-semibold text-5xl sm:text-6xl sm:font-bold lg:text-8xl'>Logo</h1>
          </div>
       
          <div className='lg:flex justify-around items-center px-4 '>
             <div  className=''>
                <SearchIcon />
             <div/>   

             <div className='lg:hidden flex space-x-2 px-20'>
                 <HouseIcon />
                 <ShoppingCartIcon/> 
                  <UserRound /> 
             </div>      
         </div>
            
         <div className=''>
            
            <ul className='flex space-x-2 sm:space-x-3 font-medium text-sm mt-5 '>
                <li >
                    <Link href="/"  >HOME</Link>
                </li>
                <li>
                    <Link href="" >SPACES</Link>
                </li>
                <li>
                    <Link href="/product-detail" >PRODUCTS & SERVICES</Link>
                </li>
                <li>
                    <Link href="/catalog" >SHOWROOMS</Link>
                </li>
                <li>
                    <Link href="" >COMPANY</Link>
                </li>
                <li>
                    <Link href="" >MEDIA</Link>
                </li>
                <li>
                    <Link href="/contact" >CONTACT</Link>
                </li>
            </ul>
         </div>
           <div className='hidden lg:block md:space-y-3'>
             <div className='flex space-x-2 px-20'>
                 <HouseIcon />
                 <ShoppingCartIcon/> 
                  <UserRound /> 
             </div>         
           </div>
    
          
      </div>
       
    
    </div>
  )
}

export default Header