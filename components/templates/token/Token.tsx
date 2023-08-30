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


        <div className="justify-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:pt-20">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          
  
            <div className="m-auto w-96 py-2">
            <Image
            className="m-auto w-96 py-2"
            src="/assets/star_divider.svg"
            alt="Star Divider"
            width={1260}
            height={750}
          />
            </div>

            <h2 className="m-auto mb-4 text-3xl font-bold tracking-tight text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Cinzel py-5">
            SKY GODZ  -TOKENS
            </h2>
            <hr className="w-full  border-yellow-200" />
            <p className="text-base text-white lg:text-lg  md:text-lg sm:px-4 py-8 font-Proza">
           Claim your SKY GODZ LOTUS and STARDUST tokens below and play the Stargazer Games. 
            </p>

<div className="grid grid-cols-2 gap-20 place-content-stretch w-full h-96">

<div className="bg-indigo-900/20  rounded-2xl w-72 drop-shadow-lg justify-center" >

<Image
              className="p-10 rounded-full shadow-3xl"
              src="/assets/token_lotus750.jpg"
              alt="Lotus"
              width={1260}
              height={750}
            />

          <h1 className="text-yellow-100 font-bold text-2xl ">LOTUS Token</h1>
          <h2 className="text-white text-md py-2">Claim LOTUS Tokens</h2>

<div className="mt-5 mb-5 max-w-sm justify-center">
          <input 
    id="1"
    type="text"  
    placeholder="Enter amount to claim" 
className="flex-grow  h-10 px-2 mb-3 text-black text-base transitiom duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
            
   
    onChange={(e) => setAmountToClaim(e.target.value)}
    
    />
    </div>
<div className="justify-center pb-8">
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1 m-auto">
            Coming soon</button>
          </div>
              </div>


<div className="bg-indigo-900/20 rounded-2xl w-72 drop-shadow-lg ">


<Image
              className="p-10 rounded-full"
              src="/assets/token_stardust750.jpg"
              alt="Stardust"
              width={1260}
              height={750}
            />

<h1 className="text-yellow-100 font-bold text-2xl">STARDUST Token</h1>
<h2 className="text-white text-md py-2">Claim STARDUST Tokens</h2>

  
<div className="mt-5 mb-5 max-w-sm justify-items-center">

          <input 
    id="1"
    type="text"  
    placeholder="Enter amount to claim" 
className="flex-grow  h-10 px-2 mb-3 text-black text-base transitiom duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
            
   
    onChange={(e) => setAmountToClaim(e.target.value)}
    
    />
    </div>
   
   
    <div className='w-60 flex items-center justify-center m-auto'>
    <Web3Button 
        
         
          contractAddress="0x94B0E73c4328A53ccc2CdeDbEeB2aF625984Af90"
          action={(contract) => contract.erc20.claim(amountToClaim)}
          onSuccess={() => alert("Claimed!")}
          onError={(err) => alert(err)}
        >
          Claim STARDUST
        
          </Web3Button></div>
         </div>
              </div>
</div>




<div className="py-32  justify-items-center">

<div className=" pt-14 m-auto  justify-center">
<h1 className=" text-white text-lg text-center font-semibold">
              Use your SKY GODZ tokens for the following cool things:
            </h1></div>

      <div className="w-4/5 m-auto grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 mt-10 sm:grid-cols-2">
        <div className="duration-300 transform bg-blue-900 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-blue-300">Earn rewards in the RPG</h6>
            <p className="text-sm text-white">
              Get rewards for missions and quests successfully accomplished in the Stargazer RPG and trade tokens for in-game NFTs.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-blue-900 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-blue-300">Power up your Stargate</h6>
            <p className="text-sm text-white">
              Use the Stardust tokens to claim cosmic energy sources for your Stargate and get more STAR as a reward.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-blue-900 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-blue-300">Vote for your stories
              
            </h6>
            <p className="text-sm text-white">
              Use the tokens to participate in the anime and webtoons and get rewarded for a story path well-chosen.
            </p>
          </div>
        </div>
        </div>

      </div>
 </div>
 

      );
    };

 
  export default Token;