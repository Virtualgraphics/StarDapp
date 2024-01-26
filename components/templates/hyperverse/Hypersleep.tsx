import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from 'next/image'

import Spinner from "../../layouts/Spinner";

import NFThypersleep from "./NFThypersleep";
import styles from '/styles/Home.module.css';


const Hypersleep: NextPage = () => {

  
  return (

    <div className="justify-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
<div className="max-w-screen-xl sm:text-center sm:mx-auto">
            
    
       <div className="m-auto w-96 py-2">
       <Image
       className="m-auto w-96 py-2"
       src="/assets/star_divider.svg"
       alt="Star Divider"
       width={1260}
       height={750}
     />
       </div>
 
     <h2 className="max-w-screen- justify-center  m-auto mb-4 text-3xl font-bold text-center text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Cinzel py-4 tracking-wider">
   Sky Godz: Hypersleep
     </h2>
     <hr className="max-w-screen-sm justify-center  m-auto border-yellow-200 py-1" />
     <p className="max-w-screen-sm  justify-center  m-auto text-base text-center text-white lg:text-xl md:text-lg sm:px-4 py-8 font-Jost pb-8">
     Send your Akasha Alien on extended journey to the core of the Hyperverse and get additional HYPER Token rewards.</p>
   

    


     <div className="pt-8 justify-center m-auto flex">



<div className=" rounded-3xl h-full bg-gradient-to-t from-blue-800/40 to-blue-900/20  shadow-2xl p-8 mb-8">



   
        <div className=" grid gid-rows-2 gap-4 ">


          <div className="justify-center m-auto flex">
          <Image
            className="m-auto w-96 rounded-3xl"
            src="/assets/hypersleep.jpg"
            alt="Star Divider"
            width={800}
            height={800}
          />
          </div>

       <div className="justify-center m-auto flex-row">
<h1 className="text-white font-Jost pb-8 text-center w-96 ">Please connect a wallet and make sure you own an Akasha Alien NFT.</h1>
<div>
<button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
  Maintenance
</button>
</div>
</div>   

        </div>

    
      </div>
      </div>
      </div>


    </div>

   
      

  );
};

export default Hypersleep;