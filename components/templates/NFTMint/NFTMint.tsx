
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

const myNftDropContractAddress = "0x399C182D429c527e6621F72902698882a41125CE";


const NFTMint = () => {

  const { contract: nftDrop } = useContract(myNftDropContractAddress);
  const address = useAddress();
const [quantity, setQuantity] = useState(1);
const { data: contractMetadata } = useContractMetadata(nftDrop);
const claimConditions = useClaimConditions(nftDrop);
    

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
        SKY GODZ: Stargazer NFT Collections
        </h2>
        <hr className="w-full  border-yellow-200" />
        <p className="text-base text-white lg:text-lg md:text-md mb-6 sm:px-4 py-5 font-Proza">
        SKY GODZ Stargazer Lyra Founder NFTs are unique digital avatars, ERC-721, ERC-1155 and ERC-6551, that give you access to all game, anime and webtoon content on the Stardapp, as well as special airdrops and access to the DeFi games.
        </p>
      </div>

<div className=' items-center justify-center '>

<NftCard/>

  

<div className=" pt-14 m-auto  justify-center">
<h1 className=" text-white text-lg text-center font-semibold">
              Use your Stargazer Lyra Founder Collection NFTs for the following cool activities:
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

</div>



       


  );
};


export default NFTMint;