import { MediaRenderer, useAddress, useContract, useContractMetadata, useNFTs, ConnectWallet } from "@thirdweb-dev/react";
import Gift from "../gift/Gift";
import Image from 'next/image'
import Stepper from "../stepper/stepper";




const CALENDAR = () => {

    const address = useAddress();

    const { contract } = useContract("0xE43E3d5Cbc74e6595a98db1eecfc64B90b2f2Ced");
    const { data: contractMetadata } = useContractMetadata(contract);
    const { data: nfts, isLoading: isLoadingNfts } = useNFTs(contract);
  


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
        
            <h2 className="m-auto mb-4 text-2xl text-center font-bold text-yellow-100 sm:text-3xl sm:leading-none sm:m-auto font-Cinzel py-3 tracking-wider">
            SKY GODZ: Hyperverse Advent Calendar
            </h2>
            <hr className="w-full  border-yellow-200" />
            <p className="text-base text-white lg:text-xl md:text-lg sm:px-4 py-5 font-Proza">
            Blast off into the Hyperverse with the SKY GODZ: Gamefi Advent Calendar and propel your alien through the hyperverse and collect Stardust token rewards as you cross the dimensions.
            </p>
           
            <div className="bg-blue-900/50 rounded-3xl w-3/4 justify-center m-auto flex ">
            <p className=" text-blue-200 lg:text-lg md:text-base sm:text-sm sm:p-8 md:p-8 lg:px-12 font-Proza text-left">

            <ul className="list-disc">
  <li>Mint a new Alien every day. Collect them all!</li>
  </ul>

  <ul className="list-disc">
  <li>99 aliens max. supply for each day.</li>
  </ul>

  <ul className="list-disc">
  <li>Cost: 9 Matic.</li>
  </ul>

  <ul className="list-disc">
  <li>Max. limit of 3 aliens per wallet.</li>
  </ul>

  <ul className="list-disc">
  <li>Level-up wil start on December 8, 2023.</li>
  </ul>

  <ul className="list-disc">
  <li>HYPERVERSE game wil start on December 21, 2023.</li>
  </ul>

            </p></div>
           
          </div>


      {address ? (
        isLoadingNfts ? (
          <p className="text-white text-2xl text-center">Loading...</p>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
            {nfts && nfts.length > 0 ? (
              nfts.map((nft) => (
                <Gift
                  nft={nft}
                  key={nft.metadata.id}
                />
              ))
            ) : (
              <p>No NFTs found.</p>
            )}
          </div>
        )
      ) : (

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "40px auto",
          maxWidth: "1440px",
        }}>
          <MediaRenderer
            src={contractMetadata?.image}
            style={{
              borderRadius: "10px",
            }}
          />
          <h1 className="text-white text-center text-xl py-8">Connect wallet to claim Alien NFT.</h1>
          <ConnectWallet/>
        </div>
      )}
      
  

      <Stepper/>

      <div>
        <h3 className="text-white font-Proza text-sm text-center sm:py-8 md:py-8 ">Polygon Aliens NFT ERC-1155 contract address: 0xE43E3d5Cbc74e6595a98db1eecfc64B90b2f2Ced</h3>
      </div>
      
    </div>
 
  
  );
};

export default CALENDAR;