
import { FC, useEffect } from 'react';
import { useState } from "react";
import Image from 'next/image';
import EnergyItems from './CrystalItems';
import { CRYSTAL_ADDRESS, FOUNDER_ADDRESS} from "../../../constants/addresses";
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


const CrystalShop = () => {


const address = useAddress();
const { contract: akashacontract } = useContract(FOUNDER_ADDRESS);
const [quantity, setQuantity] = useState(1);

const { data: ownedAkasha, isLoading: loadingOwnedAkasha } = useOwnedNFTs(akashacontract, address);

const { contract } = useContract( CRYSTAL_ADDRESS);
    const { data: nfts } = useNFTs(contract);
    console.log(nfts);


    if (!address) {

        return (
          <div className="container-lg py-24 px-8">
            <div className="flex-col h-full mx-auto my-auto justify-center">
              <h1 className='text-3xl text-yellow-100 pt-16 text-center font-semibold font-Proza'>WELCOME TO THE DESERT CRYSTAL SHOP</h1>
              <p className='text-lg text-white pt-4 text-center font-Jost'>To access the Desert Crystal Shop, connect your wallet and login with your Founders NFT.</p>
              <div className="m-auto w-96 py-12">
                <Image
                className="m-auto rounded-full"
                src="/assets/crystal_collection_image.jpg"
                alt="Crystal Collection"
                width={800}
                height={800}
              />
                </div>
          
              <div className='w-60 flex items-center justify-center m-auto pb-12'>
              
              <ConnectWallet 
       btnTitle='Login'
       className={styles.connectButton}
       />

  
              
              
              </div>
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
  <div className="w-full justify-center mx-auto pt-24 px-8 ">
    <h1 className="text-yellow-100 text-xl font-Jost text-center">To access the Desert Crystal Shop, you will need to own a SKY GODZ Founders NFT!</h1>
    <p className="text-white text-lg font-Jost text-center py-4 ">Head over to the NFT mint page, claim a Founders NFT to shop for Crystals.</p>
  <div className=" items-center justify-center m-auto py-4">
  
  <div className="justify-center m-auto w-96 py-16 h-full">
                <Image
                className="rounded-full"
                src="/assets/crystal_collection_image.jpg"
                alt="Crystal Collection"
                width={800}
                height={800}
              />
                
  
                <div className="flex items-center justify-center p-8">
              <Link href="/nftmint">
             <button className="bg-blue-800 hover:bg-blue-700 text-white  py-4 px-6 rounded-2xl">
    Get a Founders NFT to play
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
            SKY GODZ TALES: Desert Crystal Shop
            </h2>
            <hr className="w-full justify-center  border-yellow-200" />




        <p className="text-base text-white text-center lg:text-lg md:text-lg sm:px-4 pt-6 font-Jost">
       Purchase Desert Crystal NFTs with STAR tokens to boost your Founders NFT power and gain more STAR. 
        </p>
        </div>
        </div>

            {!nfts ? (
                <div className="flex justify-center mx-auto p-24 ">
                    
                </div>
            ) : (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                    {nfts?.map((nftItem) => (
                        <EnergyItems 
                            key={nftItem.metadata.id}
                            nft={nftItem}
                        />
                    ))}
                </div>
            )}

</div>













</div>






       


  );
};


export default CrystalShop;