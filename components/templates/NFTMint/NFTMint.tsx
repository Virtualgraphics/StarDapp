
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

const myNftDropContractAddress = "0x399C182D429c527e6621F72902698882a41125CE";


const NFTMint = () => {

  const { contract: nftDrop } = useContract(myNftDropContractAddress);
  const address = useAddress();
const [quantity, setQuantity] = useState(1);
const { data: contractMetadata } = useContractMetadata(nftDrop);
const claimConditions = useClaimConditions(nftDrop);
    

  return (
    <div className="justify-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-screen-sm sm:text-center sm:mx-auto">
      

        <div className="m-auto w-96 py-0">
        <Image
        className="m-auto w-96 py-2"
        src="/assets/star_divider.svg"
        alt="Star Divider"
        width={1260}
        height={750}
      />
        </div>
        <h2 className="m-auto mb-4 text-3xl font-bold tracking-tight text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Cinzel py-5">
        SKY GODZ: Stargazer Games
        </h2>
        <hr className="w-full  border-yellow-200" />
        <p className="text-base text-white lg:text-xl md:text-lg mb-6 sm:px-4 py-5 font-Proza">
        Use your NFT Alien Character in a single player, third person RPG directly in your browser and collect tokens while powering up your Stargate in the DeFi Game.
        </p>
      </div>

<div className='grid grid-rows-2 grid-flow-col gap-16  items-center justify-center '>

  <div className='bg-indigo-900/20 drop-shadow-lg w-96 rounded-2xl border-blue-100 p-8'>


  <Image
              className=" rounded-2xl shadow-3xl border-white mb-6"
              src="/assets/vega.jpg"
              alt="Lotus"
              width={750}
              height={750}
            />
          <h1 className="text-yellow-100 font-bold text-xl flex items-center justify-center">Lightbeings from Vega</h1>
          <h2 className="text-white text-md pt-2 pb-4 flex items-center justify-center">Mint your NFT</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold px-4 rounded m-auto flex items-center justify-center">
            Coming soon</button>
  
  </div>

  <div className='bg-indigo-900/20 drop-shadow-lg w-96 rounded-2xl border-blue-100 p-8'>

  <Image
              className=" rounded-2xl shadow-3xl border-white mb-6"
              src="/assets/teka.jpg"
              alt="Teka"
              width={750}
              height={750}
            />

          <h1 className="text-yellow-100 font-bold text-xl flex items-center justify-center">Ethereals from Teka</h1>
          <h2 className="text-white text-md pt-2 pb-4 flex items-center justify-center">Mint your NFT</h2>
          
          <button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold px-4 rounded m-auto flex items-center justify-center">
            Coming soon</button>

  </div>


  <div className='bg-indigo-900/20 drop-shadow-lg w-96 rounded-2xl border-blue-100 p-8'>

  <Image
              className=" rounded-2xl shadow-3xl border-white mb-6"
              src="/assets/1.png"
              alt="Feline"
              width={750}
              height={750}
            />

          <h1 className="text-yellow-100 font-bold text-xl flex items-center justify-center">Lion People from Avyon</h1>
          <h2 className="text-white text-md pt-2 pb-4 flex items-center justify-center">Mint your NFT</h2>

          <div className='w-60 flex items-center justify-center m-auto'>
          <Web3Button 
          contractAddress={nftDrop?.getAddress() || ""}
          action={(cntr) => cntr.erc721.claim(quantity)}
       
          onError={(err) => {
            console.error(err);
            alert("Error claiming NFTs");
          }}
          onSuccess={() => {
            setQuantity(1);
            alert("Successfully claimed NFTs");
          }}
        >
        
          Claim NFT
        </Web3Button></div>

  </div>

<div className='bg-indigo-900/20 drop-shadow-lg w-96 rounded-2xl border-blue-100 p-8'>

  <Image
              className=" rounded-2xl shadow-3xl border-white mb-6"
              src="/assets/mu.jpg"
              alt="Mu"
              width={750}
              height={750}
            />

          <h1 className="text-yellow-100 font-bold text-xl flex items-center justify-center">Subterreans from MU</h1>
          <h2 className="text-white text-md pt-2 pb-4 flex items-center justify-center">Mint your NFT</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold px-4 rounded m-auto flex items-center justify-center">
            Coming soon</button>
  </div>
</div>

<div className=" pt-14 m-auto  justify-center">
<h1 className=" text-white text-lg text-center font-semibold">
              Use your Stargazer Lyra Founder Collection NFTs for the following cool things:
            </h1></div>

<div className="py-4 flex items-center justify-center">
      <div className="w-4/5 m-auto grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 mt-10 sm:grid-cols-2">
        <div className="duration-300 transform bg-blue-900 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-blue-300">Play the RPG with your NFT</h6>
            <p className="text-sm text-white">
              Get access to the Stargazer: Lyra RPG and get Stardust token rewards which you can use to power-up your Stargate.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-blue-900 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-blue-300">Power up your Stargate</h6>
            <p className="text-sm text-white">
              Use the NFT to claim your Stargate NFT which you can power up with energy sources to get you to your homeworld.
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



       


  );
};


export default NFTMint;