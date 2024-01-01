import Image from 'next/image'
import Link from 'next/link'

const NftCard = () => {

    return (
      <div className="px-4 py-4 mx-auto sm:max-w-xl sm:py-5 md:max-w-full lg:mx-w-4xl md:px-24 lg:px-8 lg:py-4">
        <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-3">

          <div className="transition duration-300 transform bg-blue-900/10 rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
            <Image
              className="object-cover w-full sm:h-32 md:h-64 rounded-t lg:h-80 xl:h-96"
              src="/assets/founder_starwanderer.jpg"
              alt="Starwanderer"
              width={1260}
              height={750}
            />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-0" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 className="text-yellow-100 text-center mb-2 text-xl font-semibold leading-none sm:text-xl">
              STAR WANDERER
              </h5>
              <p className="mb-5 text-gray-300 text-center">
              You are a traveler among the stars without a destination. You are not ready yet to make a commitment and you can always upgrade to become a full founder.
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
              STARGAZER FOUNDER 
              </h5>
              <p className="mb-5 text-gray-300 text-center">
              You are a member of the star family and can use your avatar to access all activities in the Stargazer Stardapp and receive exclusive airdrops.

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
              src="/assets/founder_alchemist.jpg"
              alt="Alchemist"
              width={1260}
              height={750}
            />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-0" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b-lg sm:px-8">
              <h5 className="text-yellow-100 text-center mb-2 text-xl font-semibold leading-none sm:text-xl">
              ALCHEMIST
              </h5>
              <p className="mb-5 text-gray-300 text-center">
              The Alchemist transforms his body into a light body. Unlimited access to all content in current and upcoming games, as well as exclusive airdrops.

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