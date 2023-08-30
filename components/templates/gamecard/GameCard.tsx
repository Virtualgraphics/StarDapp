import Image from 'next/image'
import Link from 'next/link'

const GameCard = () => {

    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl sm:py-5 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
          <div className="transition duration-300 transform bg-blue-900/10 rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
            <Image
              className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
              src="/assets/app_frontGAME.jpg"
              alt="Stargate Game"
              width={1260}
              height={750}
            />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 className="text-yellow-100 mb-2 text-xl font-bold leading-none sm:text-2xl">
              STARGAZER DEFI GAME
              </h5>
              <p className="mb-5 text-gray-300">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                perspiciatis unde.
              </p>

             
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Coming soon</button>
            

            </div>
          </div>
          <div className="transition duration-300 transform bg-blue-900/10 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
            <Image
              className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
              src="/assets/app_frontIMAGE_game.jpg"
              alt="Stargazer Game"
              width={1260}
              height={750}
            />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b-lg sm:px-8">
              <h5 className="text-yellow-100 mb-2 text-xl font-bold leading-none sm:text-2xl">
              STARGAZER RPG
              </h5>
              <p className="mb-5 text-gray-300">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                perspiciatis unde.
              </p>
             
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Coming soon</button>
            
            </div>
          </div>
        </div>
      </div>
    );
  };

export default GameCard;