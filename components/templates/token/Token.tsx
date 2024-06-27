import {MediaRenderer, useContract, useContractMetadata, Web3Button} from "@thirdweb-dev/react";
import { EditionDrop, Erc1155 } from '@thirdweb-dev/sdk';
import { BigNumber } from "ethers";
import { useState } from "react";
import { FC, useEffect } from 'react';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from 'next/image'
import React from 'react';


const Token = () => {
  const { contract: tokenDropContract} = useContract("0xd23342d614a1ff1d7bc84b9041C8615532D55C6D");
  const [amountToClaim, setAmountToClaim] = useState("");

  
      return (


        <div className="justify-center px-4 py-16 mx-auto  sm:px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
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
            SKY GODZ  -TOKENS
            </h2>
            <hr className="w-full  border-yellow-200" />
</div>

<div className="max-w-5xl justify-center m-auto flex mt-8">

<Image
              className=" rounded-3xl  "
              src="/assets/stardust_banner.jpg"
              alt="Stardust"
              width={1990}
              height={900}
            />
</div>
  
<div className="max-w-4xl justify-center m-auto flex mt-8">

<p className='text-white text-lg text-center font-Proza'>The STARDUST Token is the in-game and reward token for all activities in the Stardapp as well as the entire SKY GODZ universe. Earn STAR by playing games, watching anime, reading webtoons and trading NFTs..</p>
</div>


<div className="max-w-5xl justify-center m-auto flex mt-8">
<div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12"></div>

<div className=" py-2 px-8">
<button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl mt-5">
  Read Litepaper
</button></div>

<div className=" py-2 px-8">
<button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl mt-5">
  Fairlaunch on Pinksale
</button></div>

</div>

<div className="max-w-3xl justify-center m-auto flex mt-8">

<p className='text-blue-200 text-md font-Proza'>Deployed to the Polygon Network</p></div>

<div className="max-w-3xl justify-center m-auto flex mt-4">

<p className='text-blue-200 text-md font-Proza'>Contract Address: 0x132f4dB1Ee1CDD163DccA35706aE1ce0EC2dbA74 </p>
</div>



<div className="pb-12  justify-items-center overflow-hidden">

<div className=" pt-14 m-auto  justify-center">
<h1 className=" text-white text-lg text-center font-semibold">
              Use your SKY GODZ tokens for the following cool activities:
            </h1></div>

      <div className="w-4/5 m-auto grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 mt-10 sm:grid-cols-2">
        <div className="duration-300 transform bg-blue-900 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-blue-300">Earn rewards in the Games</h6>
            <p className="text-sm text-white">
              Get rewards for missions and quests successfully accomplished in the Sky Godz games and trade tokens for in-game NFTs.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-blue-900 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-blue-300">Play the Defi Games</h6>
            <p className="text-sm text-white">
              Use the Stardust tokens to claim cosmic energy sources and crystals to power up your Founders NFTs and get more STAR as a reward.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-blue-900 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-blue-300">Mint the Webtoons and Anime
              
            </h6>
            <p className="text-sm text-white">
              Use the STAR tokens to participate in the anime and webtoons and collect, own or trade the episodes.
            </p>
          </div>
        </div>
        

        </div>


      </div>
 </div>
 

      );
    };

 
  export default Token;