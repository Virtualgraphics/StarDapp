
import { FC, useEffect } from 'react';
import { useState } from "react";
import Image from 'next/image';
import EnergyItems from './EnergyItems';
import { ENERGY_ADDRESS, AKASHA_ADDRESS} from "../../../constants/addresses";
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
  useNFTs,
  ConnectWallet,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import Link from 'next/link';
import Spinner from "../../layouts/Spinner";


const HyperShop = () => {


const address = useAddress();
const { contract: akashacontract } = useContract(AKASHA_ADDRESS);
const [quantity, setQuantity] = useState(1);

const { data: ownedAkasha, isLoading: loadingOwnedAkasha } = useOwnedNFTs(akashacontract, address);

const { contract } = useContract(ENERGY_ADDRESS);
    const { data: nfts } = useNFTs(contract);
    console.log(nfts);


    if (!address) {

        return (
          <div className="container-lg py-24 px-8">
            <div className="flex-col h-full mx-auto my-auto justify-center">
              <h1 className='text-3xl text-yellow-100 pt-16 text-center font-semibold font-Proza'>WELCOME TO THE HYPERVERSE SHOP</h1>
              <p className='text-xl text-white pt-4 text-center font-Jost'>To access the HYPERVERSE Shop, connect your wallet and login with your Akaha NFT.</p>
              <div className="m-auto w-96 py-12">
                <Image
                className="m-auto rounded-full"
                src="/assets/energy_collection.jpg"
                alt="Akasha Collection"
                width={800}
                height={800}
              />
                </div>
          
              <div className='w-60 flex items-center justify-center m-auto pb-12'>
              <ConnectWallet /></div>
            </div>
          </div>
        );
      }
    
      if (loadingOwnedAkasha) {
        return(
          <div className="container-lg">
            <div className="h-screen mt-96 justify-center m-auto flex"><Spinner/></div>;
    
          </div>
        );
      }
    
      if (ownedAkasha?.length === 0) {
  
  
        
        return (
  <div className="w-full justify-center mx-auto pt-24 px-8">
    <h1 className="text-yellow-100 text-2xl font-semibold font-Jost text-center">To access the HYPERVERSE Shop you need to own an Akasha Alien!</h1>
    <p className="text-white text-md font-Jost text-center py-4 ">You currently do not own an Akasha Alien. Head to the Advent Calendar page, claim an alien and receive an Akasha alien airdrop to access the shop.</p>
  <div className=" items-center justify-center m-auto py-4">
  
  <div className="justify-center m-auto w-96 py-16 h-full">
                <Image
                className="rounded-full"
                src="/assets/energy_collection.jpg"
                alt="Akasha Collection"
                width={800}
                height={800}
              />
                
  
                <div className="flex items-center justify-center p-8">
              <Link href="/hyperverse">
             <button className="bg-blue-800 hover:bg-blue-700 text-yellow-200  py-4 px-6 rounded-2xl">
    Get an Akasha NFT to log in
  </button>
  </Link>
  </div>
  </div>
  </div>
            
  </div>
        );
      }
 
  return (
    <div className="justify-center px-4 py-12 mx-auto  sm:px-4 sm:max-w-xl md:max-w-full lg:max-w-6xl md:px-24 lg:px-8 lg:py-2">

<div>

<div className="justify-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:pt-10">
    <div className=" grid max-w-screen-lg row-gap-5 sm:text-center sm:mx-auto">
      

        <div className="m-auto w-96 py-2">
        <Image
      className="m-auto py-2"
      src="/assets/star_divider.svg"
      alt="Star Divider"
      width={1260}
      height={750}
    />
        </div>

        <h2 className="m-auto mb-4 text-2xl text-center font-bold text-yellow-100 sm:text-3xl sm:leading-none sm:m-auto font-Cinzel py-8 tracking-wider">
            SKY GODZ: Hyperverse Shop
            </h2>
            <hr className="w-full justify-center  border-yellow-200" />









       

        <p className="text-base text-white text-center lg:text-lg md:text-lg sm:px-4 pt-6 font-Jost">
       Purchase COSMIC ENERGY NFTs with HYPER tokens to boost your Akasha Alien power and gain more HYPER. 
        </p>
        </div>
        </div>

            {!nfts ? (
                <div className="flex justify-center mx-auto p-24">
                    
                </div>
            ) : (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {nfts?.map((nftItem) => (
                        <EnergyItems 
                            key={nftItem.metadata.id}
                            nft={nftItem}
                        />
                    ))}
                </div>
            )}

</div>



<div className="bg-gradient-to-t from-blue-800/40 to-blue-900/20 rounded-3xl w-3/4 flex justify-center m-auto shadow-lg p-8 mb-12">
<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6'>

<div className="">
<h1 className='text-left text-yellow-100 font-Proza text-xl'>The Cosmic Staff of the Akasha</h1>
<p className='text-white text-base font-Proza py-4'>Use the powerful staff of the Akasha to bend time and space and travel the dimensions of the Hyperverse and collect HYPER tokens in the process.</p>
<p className='text-blue-200 text-md font-Proza py-4'>Coming soon...</p>
</div>



<div className="w-80 h-80 justify-end flex m-auto">

<Image
      className=" rounded-3xl shadow-md"
      src="/assets/akasha_staff.gif"
      alt="Akasha Staff"
      width={500}
      height={500}
    />

</div>
</div>


</div>







</div>






       


  );
};


export default HyperShop;