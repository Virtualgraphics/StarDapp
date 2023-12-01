
import * as React from 'react'
import FrontSlider from '../frontslider/frontlsider';
import { Hero } from '../hero';
import { Intro } from '../intro';
import Image from 'next/image'
import Link from 'next/link'
import { Credits } from '../credits';


  
  const Home = () => {
    return ( 

   

   <div>  

   <FrontSlider/>

   <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 w-3/4 justify-center m-auto">

<div>

<Image
              className="flex items-center justify-center mx-auto mt-8 rounded-3xl"
              src="/assets/hyperverse_sirians.jpg"
              alt="Advent Banner"
              width={1000}
              height={1000}
            />

</div>

<div>

<Image
              className="flex items-center justify-center mx-auto mt-8 rounded-3xl"
              src="/assets/hyperverse_reptilians.jpg"
              alt="Advent Banner"
              width={1000}
              height={1000}
            />

</div>


<div>

<Image
              className="flex items-center justify-center mx-auto mt-8 rounded-3xl"
              src="/assets/hyperverse_candor.jpg"
              alt="Advent Banner"
              width={1000}
              height={1000}
            />

</div>


<div>

<Image
              className="flex items-center justify-center mx-auto mt-8 rounded-3xl"
              src="/assets/hyperverse_mantid.jpg"
              alt="Advent Banner"
              width={1000}
              height={1000}
            />

</div></div>

<div className="  w-1/2 justify-center m-auto pt-12">
<h1 className="text-center text-blue-100 text-2xl font-Proza">
Blast off into the Hyperverse with the SKY GODZ: Gamefi Advent Calendar and propel your alien through the hyperverse and collect Stardust token rewards as you cross the dimensions.
</h1>



<div className=" flex items-center justify-center py-8">
            <Link href="/calendar">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl mt-5">
  Mint now
</button></Link></div>

</div>




   <Hero />



   <Intro />

   <hr className="w-2/4  border-yellow-200 justify-center m-auto flex " />

   <Credits/>

   </div>

)

};

export default Home;
