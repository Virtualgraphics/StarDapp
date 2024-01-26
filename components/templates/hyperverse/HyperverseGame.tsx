import { ConnectWallet, MediaRenderer, useAddress, useContract, useContractRead, useOwnedNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { STAKING_ADDRESS, ENERGY_ADDRESS, REWARDS_ADDRESS, AKASHA_ADDRESS} from "../../../constants/addresses";

import { BigNumber, ethers } from "ethers";
import Link from 'next/link'
import Image from 'next/image'
import Spinner from "../../layouts/Spinner";
import { HyperBoosted } from "./HyperBoosted";
import { HyperInventory } from "./HyperInventory";
import styles from '/styles/Home.module.css'

const HyperverseGame = () => {

 

      return (
        <div className="container-lg py-24 px-8">
          <div className="flex-col h-full mx-auto my-auto justify-center">
            <h1 className='text-3xl text-yellow-100 pt-16 text-center font-semibold font-Proza'>WELCOME TO THE HYPERVERSE</h1>
            <p className='text-lg text-white pt-4 text-center font-Jost'>To participate in the HYPERVERSE game, connect your wallet and claim an Akasha NFT.</p>
            <div className="m-auto w-96 py-12">
              <Image
              className="m-auto rounded-full"
              src="/assets/boosted_alien.jpg"
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
    };




    export default HyperverseGame;