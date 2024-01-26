
import { FC, useEffect } from 'react';
import { useState } from "react";
import Image from 'next/image'
import {
  MediaRenderer,
  useActiveClaimConditionForWallet,
  useAddress,
  useClaimConditions,
  useClaimedNFTSupply,
  useClaimerProofs,
  useClaimIneligibilityReasons,
  useContract,
  useContractMetadata,
  useUnclaimedNFTSupply,
  Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, utils } from "ethers";
import { NftCard } from '../nftcard';
import { AkashaMint } from '../akashamint';
import styles from '../styles/Home.module.css'




const NFTMint = () => {


    

  return (
    <div className="justify-center px-4 py-14 mx-auto  sm:px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
    <div className="max-w-screen-sm sm:text-center sm:mx-auto">
      

        <div className="m-auto w-96">
        <Image
        className="m-auto py-2"
        src="/assets/star_divider.svg"
        alt="Star Divider"
        width={1260}
        height={750}
      />
        </div>
        <h2 className="m-auto mb-4 text-2xl text-center font-semibold tracking-wider text-yellow-100 sm:text-3xl sm:leading-none sm:m-auto font-Cinzel py-3">
        SKY GODZ: NFT Collections
        </h2>
        <hr className="w-full  border-yellow-200" />
        <p className="text-base text-white lg:text-md md:text-md mb-6 sm:px-4 py-5 font-Proza">
        SKY GODZ Stargazer Founder NFTs are unique digital avatars that give you access to all game, anime and webtoon content on the Stardapp, as well as special airdrops and access to the DeFi games.
        </p>
      </div>

<div className=' items-center justify-center w-full '>
  


<div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 w-8/12 justify-center m-auto">

<div>

<Image
              className="flex items-center justify-center mx-auto mt-8 rounded-3xl"
              src="/assets/akasha_promo03.png"
              alt="Advent Banner"
              width={1000}
              height={1000}
            />

</div>

<div>

<Image
              className="flex items-center justify-center mx-auto mt-8 rounded-3xl"
              src="/assets/akasha_promo04.png"
              alt="Advent Banner"
              width={1000}
              height={1000}
            />

</div>


<div>

<Image
              className="flex items-center justify-center mx-auto mt-8 rounded-3xl"
              src="/assets/akasha_promo01.png"
              alt="Advent Banner"
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

</div>

</div>



<div className='m-auto justify-center flex rounded-3xl bg-gradient-to-t from-blue-800/40 to-blue-900/20 my-12 sm:max-w-xl sm:p-8 md:p-8 lg:p-12 md:max-w-full lg:max-w-screen-sm'>

<div>
<h1 className='text-yellow-100 text-center font-Proza text-lg'>Cool utilities for your Akasha alien:</h1>
<p className='text-white text-center font-Proza text-md py-2'>1. First ever SKY GODZ NFT collection. Not to be missed...</p>
<p className='text-white text-center font-Proza text-md py-2'>2. Play Hyperverse Game and get HYPER token rewards.</p>
<p className='text-white text-center font-Proza text-md py-2'>3. Play Hypersleep Game and get HYPER token rewards.</p>
<p className='text-white text-center font-Proza text-md py-2'>4. Get STARDUST airdrops for your HYPER token balance.</p>
<p className='text-white text-center font-Proza text-md py-2'>5. Use your Akasha alien in the upcoming Stargazer RPG to get assets.</p>

</div>

</div>

<hr className="w-1/2  border-yellow-200 justify-center m-auto flex" />

<div className="text-yellow-100 text-xl tracking-widest font-Proza text-center font-semibold my-8">SKY GODZ Founder Edition coming soon...</div>

<NftCard/>

  

<div className=" pt-14 m-auto  justify-center">
<h1 className=" text-white text-lg text-center font-semibold">
              Use your SKY GODZ Collection NFTs for the following cool things:
            </h1></div>

<div className="py-4 flex items-center justify-center">
      <div className="w-4/5 m-auto grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 mt-10 sm:grid-cols-2">
        <div className="duration-300 transform bg-blue-900 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-blue-300">Play the RPG with your NFT</h6>
            <p className="text-sm text-white">
              Get access to the Stargazer: RPG and get Stardust token rewards which you can use to power-up your Stargate.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-blue-900 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-blue-300">Play the HYPERVERSE Game</h6>
            <p className="text-sm text-white">
            Login with your Akasha alien and mint cosmic energy sources NFTs to power-up your Akasha alien and get HYPER token rewards.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-blue-900 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-blue-300">
              Get future airdrops and level up
            </h6>
            <p className="text-sm text-white">
              The founders NFT entitles you to receive further airdrops of NFTs you can use in the games to level up your character.
            </p>
          </div>
        </div>
        </div></div>

        </div>

</div>



       


  );
};


export default NFTMint;