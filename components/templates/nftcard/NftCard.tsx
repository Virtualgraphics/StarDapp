import Image from 'next/image'
import Link from 'next/link'

const NftCard = () => {

    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl sm:py-5 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-3">

          <div className="transition duration-300 transform bg-blue-900/10 rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
            <Image
              className="object-cover w-full sm:h-32 md:h-64 rounded-t lg:h-80 xl:h-96"
              src="/assets/nft_advent02.jpg"
              alt="Advent Calendar"
              width={1260}
              height={750}
            />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-0" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 className="text-yellow-100 text-center mb-2 text-xl font-semibold leading-none sm:text-xl">
              STARGAZER ADVENT CALENDAR
              </h5>
              <p className="mb-5 text-gray-300 text-center">
             Mint a daily alien NFT from December 1-23, 2023 to be leveled-up and used in the Hyperverse DeFi game.
              </p>
              <div className="justify-center pb-2">
              <Link href="/calendar"><button className="bg-blue-500 hover:bg-blue-700 text-white w-56 h-10 font-semibold  py-2 rounded  justify-center m-auto flex ">
            Mint now</button></Link>
          </div>
            </div>
          </div>


          <div className="transition duration-300 transform bg-blue-900/10 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
            <Image
              className="object-cover w-full sm:h-32 md:h-64 rounded-t lg:h-80 xl:h-96"
              src="/assets/nft_founder.jpg"
              alt="Founder Edition"
              width={1260}
              height={750}
            />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-0" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b-lg sm:px-8">
              <h5 className="text-yellow-100 text-center mb-2 text-xl font-semibold leading-none sm:text-xl">
              STARGAZER FOUNDER EDITION
              </h5>
              <p className="mb-5 text-gray-300 text-center">
              The Stargazer Founder NFTs are your entry point into the SKY GODZ universe in the Stardapp. Get your NFT, log in and enjoy the content.

              </p>
             
              <div className="justify-center pb-2">
<button className="bg-blue-500 hover:bg-blue-700 text-white w-36 h-10 font-semibold  py-2 rounded  justify-center m-auto flex ">
            Coming soon</button>
          </div>
            
            </div>
          </div>



          <div className="transition duration-300 transform bg-blue-900/10 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
            <Image
              className="object-cover w-full md:h-64 rounded-t sm:h-32 lg:h-80 xl:h-96"
              src="/assets/app_frontGAME.jpg"
              alt="Stargate Game"
              width={1260}
              height={750}
            />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-0" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b-lg sm:px-8">
              <h5 className="text-yellow-100 text-center mb-2 text-xl font-semibold leading-none sm:text-xl">
              STARGATE & COSMIC ENERGY
              </h5>
              <p className="mb-5 text-gray-300 text-center">
              Claim your Stargate and Cosmic Energy sources, level up your portal to teleport to strange and exotic planets and earn Stardust Tokens.

              </p>
             
              <div className="justify-center pb-2">
<button className="bg-blue-500 hover:bg-blue-700 text-white w-36 h-10 font-semibold  py-2 rounded  justify-center m-auto flex ">
            Coming soon</button>
          </div>
            </div>
          </div>




        </div>
      </div>
    );
  };

export default NftCard;