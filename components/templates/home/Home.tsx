
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

<div className="px-6">

<div className="border-2 border-blue-100/50 bg-gradient-to-r from-black to-indigo-800 py-8 px-4 mt-8 w-1/2 justify-center m-auto grid grid-rows-2 gap-4 rounded-3xl">

<div>
<h1 className="text-blue-100 text-lg font-Proza text-center font-semibold">YOUR STARDAPP Dashboard</h1>
</div>
<div>
<h1 className="text-white text-lg font-Proza text-center">Connect a wallet to see your assets</h1>
</div>

</div>


   <Hero />

<div className="grid grid-rows gap-4 ">

<div>

<Image
              className="flex items-center justify-center mx-auto pt-8"
              src="/assets/advent_banner.png"
              alt="Advent Banner"
              width={1200}
              height={400}
            />

</div>

<div className="  w-3/4 justify-center m-auto ">
<h1 className="text-center text-blue-100 text-xl font-Proza">
The Stargazer Advent Calendar will reveal one exclusive alien NFT, every day from December 1 to December 25, 2023 to be used as assets in the DeFi and RPG Game.</h1>



<div className=" flex items-center justify-center py-8">
            <Link href="/nftmint">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
  Mint now
</button></Link></div>

</div>

</div>

<hr className="w-2/4  border-yellow-200 justify-center m-auto flex " />

   <Intro />

   <hr className="w-2/4  border-yellow-200 justify-center m-auto flex " />

   <Credits/>

   </div>

</div>
)

};

export default Home;
