
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
import styles from '/styles/Home.module.css'


const HyperShop = () => {




        return (
          <div className="container-lg py-24 px-8">
            <div className="flex-col h-full mx-auto my-auto justify-center">
              <h1 className='text-3xl text-yellow-100 pt-16 text-center font-semibold font-Proza'>WELCOME TO THE HYPERVERSE SHOP</h1>
              <p className='text-lg text-white pt-4 text-center font-Jost'>To access the HYPERVERSE Shop, connect your wallet and login with your Akasha NFT.</p>
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
              
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
        Maintenance
      </button>
  
              
              
              </div>
            </div>
          </div>
        );
      }
    
     
      













       




export default HyperShop;