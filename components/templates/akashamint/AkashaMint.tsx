import type { NextPage } from "next";

import { 
  MediaRenderer, 
  Web3Button, 
  useActiveClaimConditionForWallet, 
  useAddress, 
  useClaimIneligibilityReasons, 
  useContract, 
  useContractMetadata, 
  useTotalCirculatingSupply, 
  useTotalCount 
} from "@thirdweb-dev/react";
import { AKASHA_ADDRESS } from "../../../constants/addresses";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from '/styles/Home.module.css'

const Home: NextPage = () => {
  const address = useAddress();
  const router = useRouter();
  const maxClaimQuantity = 2;

  const {
    contract
  } = useContract(AKASHA_ADDRESS);

  const {
    data: contractMetadata,
    isLoading: isContractMetadataLoading,
  } = useContractMetadata(contract);

  const {
    data: activeClaimPhase,
    isLoading: isActiveClaimPhaseLoading,
  } = useActiveClaimConditionForWallet(contract, address);

  const {
    data: claimIneligibilityReasons,
    isLoading: isClaimIneligibilityReasonsLoading,
  } = useClaimIneligibilityReasons(
    contract,
    {
      walletAddress: address || "",
      quantity: 1,
    }
  );

  const {
    data: totalSupply,
    isLoading: isTotalSupplyLoading,
  } = useTotalCount(contract);
  const {
    data: totalClaimSupply,
    isLoading: isTotalClaimSupplyLoading,
  } = useTotalCirculatingSupply(contract);

  

  const [claimQuantity, setClaimQuantity] = useState(1);
  const increment = () => {
    if (claimQuantity < maxClaimQuantity) {
      setClaimQuantity(claimQuantity + 1);
    }
  };
  const decrement = () => {
    if (claimQuantity > 1) {
      setClaimQuantity(claimQuantity - 1);
    }
  };

  return (


    <div className="max-w-4xl justify-center flex p-8 m-auto my-12 bg-blue bg-gradient-to-t from-blue-800/40 to-blue-900/20 rounded-3xl">
      
    
        {!isContractMetadataLoading && (
          <div className="grid sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-2 gap-2">



            <div className="w-full">
              <MediaRenderer
              className="rounded-2xl shadow-2xl"
                src={contractMetadata?.image}
              />
            </div>



            <div className="w-full">
              <h1 className="text-yellow-200 font-medium font-Cincel text-lg pb-2">{contractMetadata?.name}</h1>
              <p className="text-white font-thin font-Proza text-sm py-2">{contractMetadata?.description}</p>
              {!isActiveClaimPhaseLoading ? (
                <div>
                 
                  <p className="text-yellow-200 font-medium font-Proza text-sm py-2">Price: {ethers.utils.formatUnits(activeClaimPhase?.price!)}</p>
                </div>
              ) : (
                <p className="text-white text-center text-lg">Loading...</p>
              )}
              {!isTotalSupplyLoading && !isTotalClaimSupplyLoading ? (
                <p className="text-white font-medium font-Proza text-sm py-2">Claimed: {totalClaimSupply?.toNumber()} / {totalSupply?.toNumber()}</p>
              ) : (
                <p className="text-white text-center text-lg">Loading...</p>
              )}
              {address ? (
                !isClaimIneligibilityReasonsLoading ? (
                  claimIneligibilityReasons?.length! > 0 ? (
                    claimIneligibilityReasons?.map((reason, index) => (
                      <p key={index}>{reason}</p>
                    ))
                  ) : (
                    <div>
                      <p className="text-white font-Proza text-sm mb-4">You are eligible to claim</p>
                      <div className="justify-center flex-row w-64 ">
                        <div className={styles.claimValue}>
                          <button
                            className={styles.claimBtn}
                            onClick={decrement}
                          >-</button>
                          <input
                            className={styles.claimInput}
                            type="number"
                            value={claimQuantity}
                          />
                          <button
                            className={styles.claimBtn}
                            onClick={increment}
                          
                          >+</button>
                        </div>
                        <Web3Button
                        className={styles.claimButton}
                        
                          contractAddress={AKASHA_ADDRESS}
                          action={(contract) =>  contract.erc721.claim(claimQuantity)}
                          onSuccess={() => router.push(`/profile/${address}`)}
                        >Claim NFT</Web3Button>
                      </div>
                    </div>
                  )
                ) : (
                  <p>Checking Eligibility...</p>
                )
              ) : (
                <p className="text-blue-200 text-md font-Proza pt-8">Connect your wallet to claim</p>
              )}
              <div>
              </div>
            </div>
          </div>
        )}
     
    </div>
  );
};

export default Home;