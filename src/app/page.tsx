import React from 'react'
import Hero from './component/hero'
import Product from './component/product'
import Vision from './component/vision'
import Project from './component/project'
import Creative from './component/creative'

function Home() {
  return (
    <div>
      <div>
      <Hero/>
      </div>
     
      <hr/>

      <div>
      <Product/>
      </div>
      <hr/>
      <div>
        <Creative/>
      </div>
      <div>
        <Vision/>
      </div>
      <hr/>
      <div>
        <Project/>
      </div>
   </div>   
  )
}

export default Home
