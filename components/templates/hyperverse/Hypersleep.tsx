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
import Link from 'next/link'

import Spinner from "../../layouts/Spinner";

import NFThypersleep from "./NFThypersleep";
import styles from '/styles/Home.module.css';


const Hypersleep: NextPage = () => {

  const nftDropContractAddress = "0x015e2f19e492051cD66Be5EdFADF05f8813B8B1A";
  const stakingContractAddress = "0x26553Beb158e862042c176fb42697D769AA19654";
  const tokenContractAddress = "0x43f9A9BE99fC67592069Bc33Bd9597dbc2E74436";
 


  const address = useAddress();
  const { contract: nftDropContract } = useContract(
    nftDropContractAddress,
    "nft-drop"
  );

  

  const { contract: tokenContract } = useContract(
    tokenContractAddress,
    "token"
  );
  const { contract, isLoading } = useContract(stakingContractAddress);
  const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);
 
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
  const { data: stakedTokens } = useContractRead(contract, "getStakeInfo", [
    address,
  ]);

  useEffect(() => {
    if (!contract || !address) return;

    async function loadClaimableRewards() {
      const stakeInfo = await contract?.call("getStakeInfo", [address]);
      setClaimableRewards(stakeInfo[1]);
    }

    loadClaimableRewards();
  }, [address, contract]);

  async function stakeNft(id: string) {
    if (!address) return;

    const isApproved = await nftDropContract?.isApproved(
      address,
      stakingContractAddress
    );
    if (!isApproved) {
      await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
    }
    await contract?.call("stake", [[id]]);
  }

  if (isLoading) {
    return <div className="h-screen mt-96 justify-center m-auto flex"><Spinner/></div>;
  }




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



      {!address ? (
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
<Link href="/nftmint">  
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
 Claim Akasha NFT
</button></Link> 
</div>
</div>   

        </div>

      ) : (
        <>

<div className="grid grid-row-3 gap-8">
         <div>
          <h2 className="text-white text-lg font-medium font-Proza  text-center">My Tokens</h2>
         </div>

         

            <div className="sm:w-full md:w-full lg:w-1/2 h-full p-4 border border-yellow-100 rounded-xl flex flex-col justify-items-center m-auto">
              <h3 className="my-0 font-Jost  text-yellow-100">Claimable Rewards</h3>
              <p className="text-base my-2 text-white font-Jost">
                <b>
                  {!claimableRewards
                    ? "Loading..."
                    : ethers.utils.formatUnits(claimableRewards, 18)}
                </b>{" "}
                {tokenBalance?.symbol}
              </p>
            </div>
            

            <div className="sm:w-full md:w-full lg:w-1/2 h-full p-4 border border-yellow-100 rounded-xl flex flex-col justify-items-center m-auto">
              <h3 className="my-0 font-Jost  text-yellow-100">Current Balance</h3>
              <p className="text-medium my-2 text-white font-Jost tracking-wide">
                <b>{tokenBalance?.displayValue}
                </b> {" "}
                
                {tokenBalance?.symbol}
              </p>
            </div>
          </div>


          <div className="py-8 text-center">
          <Web3Button
           className={styles.claimButton}
            action={(contract) => contract.call("claimRewards")}
            contractAddress={stakingContractAddress}
          >
            Claim Rewards
          </Web3Button>
          </div>

          <p className="text-blue-100 text-center text-sm">Refresh the page after staking/unstaking to see current rewards.</p>

          <hr className="max-w-screen justify-center  m-auto border-yellow-200 my-8" />

          <h2 className="text-white text-lg font-medium font-Proza pb-8 text-center">My Akasha NFTs</h2>

          <div className="w-full">
            {stakedTokens &&
              stakedTokens[0]?.map((stakedToken: BigNumber) => (
                <NFThypersleep
                  tokenId={stakedToken.toNumber()}
                  key={stakedToken.toString()}
                />
              ))}
          </div>
      
        
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {ownedNfts?.map((nft) => (
              <div className="justify-center" key={nft.metadata.id.toString()}>
                <ThirdwebNftMedia
                  metadata={nft.metadata}
                  className=" border-cyan-200/40 border px-4 bg-gradient-to-b from-blue-900 to-blue-950/50  rounded-2xl shadow-2xl"
                />

                <div className="w-full text-white justify-center mx-auto text-center">
                <h3 className="rounded-2xl pt-4">{nft.metadata.name}</h3>

                <div className="py-6">
                <Web3Button
                 className={styles.boostButton}
                  contractAddress={stakingContractAddress}
                  action={() => stakeNft(nft.metadata.id)}
                >
                  Stake Akasha
                </Web3Button></div> </div>
              </div>
            ))}
          </div>


          

          


        </>
      )}
      </div>
      </div>
      </div>


    </div>

   
  );
};

export default Hypersleep;