
import * as React from 'react'

import { Hero } from '../hero';
import { Intro } from '../intro';
import Image from 'next/image'
import Link from 'next/link'
import { Credits } from '../credits';
import ReactPlayer from 'react-player'
import styles from '/styles/Home.module.css'
import FrontSlider from '../frontslider/frontlsider';
import { Container } from 'postcss';

  
  const Home = () => {
    return ( 

   

   <div className=''>  

<FrontSlider/>






    <div className=''>
<h1 className='text-center text-4xl text-semibold font-Cinzel text-yellow-100 mt-8 tracking-wider font-semibold'>Play Games, earn, collect and trade Tokens and NFTs!</h1>
</div>






  <div className="flex justify-center m-auto">
   <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-12 justify-center m-12 max-w-screen-xl">


<div>
<div className="filter hover:grayscale hover:contrast-100">
<Image
              className="flex items-center justify-center mx-auto mt-4 rounded-3xl"
              src="/assets/game_image_square02.jpg"
              alt="Games"
              width={1000}
              height={1000}
            /></div>

            <div className='text-yellow-100 font-Cinzel text-xl text-center mt-4 tracking-wider font-semibold'>SKY GODZ TALES VIDEO GAMES</div>
            <div className='text-white font-Proza text-md text-center mt-2 w-3/4 flex justfy-center m-auto'>The young Lion Warrior Yoris has been chosen to defend the powerful desert crystals from the attacking Dracos.</div>
            <div className=" flex items-center justify-center">
            <Link href="/games">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
  Play now
</button></Link></div>
</div>




<div>
<div className="filter hover:grayscale hover:contrast-100">
<Image
              className="flex items-center justify-center mx-auto mt-4 rounded-3xl"
              src="/assets/crystal_collection_image.jpg"
              alt="Defi Games"
              width={1000}
              height={1000}
            /></div>

<div className='text-yellow-100 font-Cinzel text-xl text-center mt-4 tracking-wider font-semibold'>SKY GODZ TALES DEFI GAMES</div>
            <div className='text-white font-Proza text-md text-center mt-2 w-3/4 flex justfy-center m-auto'>The young Lion Warrior Yoris has been chosen to defend the powerful desert crystals from the attacking Dracos.</div>
            <div className=" flex items-center justify-center">
            <Link href="/desertcrystal">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
  Play now
</button></Link></div>
</div>



<div>
<div className="filter hover:grayscale hover:contrast-100">
<Image
              className="flex items-center justify-center mx-auto mt-4 rounded-3xl"
              src="/assets/founder_whitelionNEW.jpg"
              alt="NFT"
              width={1000}
              height={1000}
            /></div>

<div className='text-yellow-100 font-Cinzel text-xl text-center mt-4 tracking-wider font-semibold'>FOUNDERS EDITION</div>
            <div className='text-white font-Proza text-md text-center mt-2 w-3/4 flex justfy-center m-auto'>The young Lion Warrior Yoris has been chosen to defend the powerful desert crystals from the attacking Dracos.</div>
            <div className=" flex items-center justify-center">
            <Link href="/nftmint">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
  Mint now
</button></Link></div>
</div>




<div>
<div className="filter hover:grayscale hover:contrast-100">
<Image
              className="flex items-center justify-center mx-auto mt-4 rounded-3xl"
              src="/assets/webtoon_image_square.jpg"
              alt="Webtoon"
              width={1000}
              height={1000}
            /></div>

<div className='text-yellow-100 font-Cinzel text-xl text-center mt-4 tracking-wider font-semibold'>SKY GODZ TALES WEBTOONS</div>
            <div className='text-white font-Proza text-md text-center mt-2 w-3/4 flex justfy-center m-auto'>The young Lion Warrior Yoris has been chosen to defend the powerful desert crystals from the attacking Dracos.</div>
            <div className=" flex items-center justify-center">
            <Link href="/webtoon">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
  Read now
</button></Link></div></div>

</div>



</div>






<div className="  max-w-screen-lg justify-center flex m-auto p-12 bg-gradient-to-t from-blue-800/40 to-blue-900/20  rounded-3xl border-1 shadow-2xl">

<div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4">


<div className="justify-center m-auto flex">
<Image
              className=" rounded-3xl w-96 "
              src="/assets/stardust.gif"
              alt="Stardust"
              width={500}
              height={500}
            /></div>

<div className='self-start'>
<h1 className='text-yellow-100 text-2xl font-Cinzel mb-4 tracking-wider font-semibold sm:text-center'>STARDUST TOKEN</h1>

<p className='text-white text-lg font-Proza text-center'>The STARDUST Token is the in-game and reward token for all activities in the Stardapp as well as the entire SKY GODZ universe. Earn STAR by playing games, watching anime, reading webtoons and trading NFTs..</p>

<div className=" py-8 justify-center m-auto flex">
<button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl mt-5">
  Fairlaunch on Pinksale
</button></div>
</div>





</div>

</div>


   <Credits/>

   </div>

)

};

export default Home;
