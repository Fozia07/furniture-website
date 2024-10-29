import React from 'react'
import Image from 'next/image'
import pic18 from '../public/Mask group (9).png'

function Page() {
  return (
    <div>
        <div className='w-full  mt-20 pl-40 '>
            <h1 className='text-3xl font-semibold'>Shopping cart</h1>
            <p  className='text-xl'>continue shopping</p>
        </div>
        <div className='mt-14'>
        
           <table className='flex justify-center table-auto'>
            <thead className=''>

                <tr className='flex space-x-28'>
                    <th></th>
                    <th>unit price</th>
                    <th>Qty</th>
                    <th>total sar</th>
                    <th></th>
                </tr>
            </thead>
             <tbody>
                <tr className='flex space-x-24 mt-30 pt-32 mr-32'>
                    <td><Image src={pic18} alt='' width={81} height={101}></Image></td>
                    <td><h1>product Name</h1>
                    <p>lorem lepsum</p></td>
                    
                    <td>199.00</td>
                    <td>+ 1 -</td>
                    <td>199.9</td>
                    <td></td>

                </tr>
             </tbody>
            </table>
        </div>
    </div>
  )
}

export default Page