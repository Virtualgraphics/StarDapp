import { ConnectWallet, MediaRenderer, useAddress, useContract, useContractRead, useOwnedNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { STAKING_ADDRESS, ENERGY_ADDRESS, REWARDS_ADDRESS, AKASHA_ADDRESS} from "../../../constants/addresses";

import { BigNumber, ethers } from "ethers";
import Link from 'next/link'
import Image from 'next/image'
import Spinner from "../../layouts/Spinner";
import { HyperBoosted } from "./HyperBoosted";
import { HyperInventory } from "./HyperInventory";

const HyperverseGame = () => {

    const address = useAddress();
    const { contract: akashacontract } = useContract(AKASHA_ADDRESS);
    const { contract: energyContract } = useContract(ENERGY_ADDRESS);
    const { contract: stakingContract } = useContract(STAKING_ADDRESS);
    const { contract: rewardContract } = useContract(REWARDS_ADDRESS);
  
    const { data: ownedAkasha, isLoading: loadingOwnedAkasha } = useOwnedNFTs(akashacontract, address);
    const { data: ownedEnergy, isLoading: loadingOwnedEnergy } = useOwnedNFTs(energyContract, address);
  
    const { data: boostedEnergy } = useContractRead(
      stakingContract, 
      "getStakeInfo",
      [address]
    );
  
    const { data: rewardBalance } = useContractRead(rewardContract, "balanceOf", [address]);
    
    if (!address) {

      return (
        <div className="container-lg py-24 px-8">
          <div className="flex-col h-full mx-auto my-auto justify-center">
            <h1 className='text-3xl text-yellow-100 pt-16 text-center font-semibold font-Proza'>WELCOME TO THE HYPERVERSE</h1>
            <p className='text-xl text-white pt-4 text-center font-Jost'>To participate in the HYPERVERSE game, connect your wallet and claim an Akaha NFT.</p>
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
  <h1 className="text-yellow-100 text-2xl font-Jost font-semibold text-center">To play the HYPERVERSE game you need to own an Akasha Alien!</h1>
  <p className="text-white text-md font-Jost text-center py-4 ">You currently do not own an Akasha Alien. Head to the Advent Calendar page, claim an alien and receive an Akasha alien airdrop to play the game.</p>
<div className=" items-center justify-center m-auto py-4">

<div className="justify-center m-auto w-96 py-16 h-full">
              <Image
              className="rounded-full"
              src="/assets/boosted_alien.jpg"
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
  //Main Container with Akasha on the laft and HYPER rewards on the right
    return (
      
      <div className="justify-center px-4 py-4 mx-auto  sm:w-full md:max-w-full lg:max-w-screen-xl sm:px-8 md:px-12 lg:px-8 lg:py-8">
    <div className="max-w-screen-sm sm:text-center sm:mx-auto">
            
    
              <div className="m-auto lg:w-96 sm:py-4 md:py-4 lg:py-4">
              <Image
              className="m-auto w-96 "
              src="/assets/star_divider.svg"
              alt="BAt Divider"
              width={1260}
              height={750}
            />
              </div>
        
            <h2 className="m-auto mb-4 text-3xl text-center font-bold tracking-wide text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Cinzel py-3">
          Sky Godz - Hyperverse Game
            </h2>
            <hr className="w-full  border-yellow-200" />
            <p className="text-base text-white text-center pb-12 lg:text-xl md:text-lg sm:px-4 py-5 font-Jost">
            Enter the Hyperverse with your Akasha alien and travel the dimensions and collect HYPER token rewards.
            </p>
           
          </div>




          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14 mb-12">
<div className="p-10 bg-gradient-to-t from-blue-800/40 to-blue-900/20  rounded-3xl shadow-3xl">
              <h1 className="text-2xl text-yellow-100 font-Porza">Your Akasha Aliens</h1>
              <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='content-box'>
                  {ownedAkasha?.map((nft) => (
                    <div className="py-8 " key={nft.metadata.id}>
                      <MediaRenderer 
                       className=" rounded-3xl shadow-md"
                        src={nft.metadata.image} 
                        height="80%"
                        width="80%"/>
                    </div>
                  ))}
                </div>
                <div className='content-box pl-4'>
                  <p className="text-lg text-bold text-yellow-100  pt-8 font-Jost">Your current HYPER Balance:</p>
                    {rewardBalance && (
                        <p className="text-white text-md">{ethers.utils.formatUnits(rewardBalance, 18)}</p>
                      )}
                  </div>
              </div>
            </div>




            <div className="p-10 bg-gradient-to-t from-blue-800/40 to-blue-900/20 rounded-3xl">
              <h1 className="text-2xl text-yellow-100 font-Proza">Cosmic Energy Inventory</h1>
                <HyperInventory
                  nft={ownedEnergy}
                /> </div>
          </div>


         



          <div className='p-10 bg-gradient-to-t from-blue-800/40 to-blue-900/20 rounded-3xl my-4 shadow-3xl'>
            <h1 className="mb-8 text-yellow-100 text-2xl font-Proza">Boosted Cosmic Energy</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {boostedEnergy &&
                  boostedEnergy[0].map((nft: BigNumber) => (
                    <HyperBoosted
                      key={nft.toNumber()}
                      tokenId={nft.toNumber()}
                    />
                  ))}
            </div>

            <p className="text-yellow-200 font-Jost pt-8 ">NOTE: Claim your $HYPER before unboosting any cosmic energy!</p>
          </div>

          

        </div>
      );
    };





    export default HyperverseGame;