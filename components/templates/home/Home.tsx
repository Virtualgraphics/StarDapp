
import * as React from 'react'
import FrontSlider from '../frontslider/frontlsider';
import { Hero } from '../hero';
import { Intro } from '../intro';
import Image from 'next/image'
import Link from 'next/link'
import { Credits } from '../credits';
import ReactPlayer from 'react-player'
import styles from '/styles/Home.module.css'

  
  const Home = () => {
    return ( 

   

   <div>  

 
<FrontSlider/>
   

<div className="  w-3/4 justify-center m-auto pt-12 sm:px-4 md: px-12 lg:px-20">
<h1 className="text-center text-blue-100 sm:text-lg md:text-lg lg:text-2xl font-Proza">
Mint a beautiful, one of a kind Akasha Alien NFT and blast off into the Hyperverse with the SKY GODZ: HYPERVERSE game.
</h1>

</div>




   <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 w-3/4 justify-center m-auto shadow-2xl pt-8">

<div>

<Image
              className="flex items-center justify-center mx-auto mt-8 rounded-3xl"
              src="/assets/akasha_promo03.png"
              alt="Akasha Promo 03r"
              width={1000}
              height={1000}
            />

</div>

<div>

<Image
              className="flex items-center justify-center mx-auto mt-8 rounded-3xl"
              src="/assets/akasha_promo04.png"
              alt="Akasha Promo 04"
              width={1000}
              height={1000}
            />

</div>


<div>

<Image
              className="flex items-center justify-center mx-auto mt-8 rounded-3xl"
              src="/assets/akasha_promo01.png"
              alt="Akasha Promo 01"
              width={1000}
              height={1000}
            />

</div>


<div>

<Image
              className="flex items-center justify-center mx-auto mt-8 rounded-3xl"
              src="/assets/akasha_promo02.png"
              alt="Advent Banner"
              width={1000}
              height={1000}
            />

</div></div>

<div className="  w-3/4 justify-center m-auto pt-4 sm:px-4 md: px-12 lg:px-20">

<div className=" flex items-center justify-center py-8">
            <Link href="/hyperverse">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl mt-5">
  PLAY NOW
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
