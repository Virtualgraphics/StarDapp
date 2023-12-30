import {
    ThirdwebNftMedia,
    useContract,
    useNFT,
    Web3Button,
  } from "@thirdweb-dev/react";
  import type { FC } from "react";
  import styles from '/styles/Home.module.css'
 
  


  interface NFThypersleepProps {
    tokenId: number;
  }
  
  const NFThypersleep: FC<NFThypersleepProps> = ({ tokenId }) => {

    const nftDropContractAddress = "0x015e2f19e492051cD66Be5EdFADF05f8813B8B1A";
    const stakingContractAddress = "0x26553Beb158e862042c176fb42697D769AA19654";



    const { contract: contract } = useContract(nftDropContractAddress, "nft-drop");
    const { data: nft } = useNFT(contract, tokenId);
  
    return (
      <>
        {nft && (
          <div className=" text-white font-semibold justify-center m-auto py-4 text-center">
            {nft.metadata && (
              <ThirdwebNftMedia
                metadata={nft.metadata}
                className="w-full h-32 justify-center m-auto rounded-2xl shadow-2xl"
              />
            )}
            <h3 className="py-6">{nft.metadata.name}</h3>
            <div className="pb-6">
            <Web3Button
              action={(contract) => contract?.call("withdraw", [[nft.metadata.id]])}
              contractAddress={stakingContractAddress}
            >
              Unstake
            </Web3Button></div>
          </div>
        )}
      </>
    );
  };
  export default NFThypersleep;