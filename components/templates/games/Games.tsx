import Link from 'next/link'
import { GameCard } from '../gamecard';
import Image from 'next/image'

const Games = () => {
 
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
            SKY GODZ: Stargazer Games
            </h2>
            <hr className="w-full  border-yellow-200" />
            <p className="text-base text-white lg:text-xl md:text-lg sm:px-4 py-5 font-Proza">
            Use your Stargazer Founder NFTs in this exciting 3rd person, single player RPG directly in your browser and collect tokens while powering up your Stargate in the DeFi Game.
            </p>
           
          </div>

<div className='flex items-center justify-center'>

<Image
              className="flex items-center justify-center"
              src="/assets/game_cover01.png"
              alt="Stargate Game"
              width={1260}
              height={750}
            />
            </div>
<div className='flex items-center justify-center'>
<h1 className='text-yellow-100 text-2xl font-semibold mt-10'>
The SKY GODZ STARGAZER Games come in two variations:
</h1>
</div>
<GameCard/>
<div className="flex justify-center sm:pb-4">
<p className='text-white text-lg text-center sm:pb-4 '>Technical details, white paper and tokenomics are coming soon and will be published on our website.</p>
</div>
 </div>

      );
    };

  
  
  export default Games;