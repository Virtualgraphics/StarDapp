import Link from 'next/link'

import Image from 'next/image'

const Hyperverse = () => {
 
    return (
      <div className="justify-center px-4 py-16 mx-auto  sm:px-4 sm:max-w-xl md:max-w-full lg:max-w-6xl md:px-24 lg:px-8 lg:py-8">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto ">
        

      <div className="m-auto w-96">
      <Image
      className="m-auto py-2"
      src="/assets/star_divider.svg"
      alt="Star Divider"
      width={1260}
      height={750}
    />
              </div>
        
            <h2 className="m-auto mb-4 text-2xl text-center font-bold text-yellow-100 sm:text-3xl sm:leading-none sm:m-auto font-Cinzel py-3 tracking-widest">
            SKY GODZ: Hyperverse
            </h2>
            <hr className="w-full  border-yellow-200" />
            <p className="text-base text-center text-white lg:text-xl md:text-lg sm:px-4 py-5 font-Proza">
            Blast off into the Hyperverse with the SKY GODZ: Gamefi Advent Calendar and propel your alien through the hyperverse and collect HYPER token rewards as you cross the dimensions.
            </p>
           
          </div>

<div className='flex items-center justify-center mt-8 m-auto px-12 pt-6 py-6 bg-gradient-to-t from-blue-800/40 to-blue-900/20 rounded-3xl'>

<div>
<h1 className='text-center text-yellow-100 text-xl font-Proza font-semibold pb-4'>HYPERVERSE GAME QUICK START GUIDE:</h1>
<p className='text-white text-sm font-Proza py-2'> 1. Mint one or several aliens from the Advent Calendar and receive an Akasha alien airdrop for each alien minted. Max. supply 200, airdropped at a first come, first serve basis.</p>
<p className='text-white text-sm font-Proza py-2'> 2. Log in to the Hyperverse Shop and claim your first free Cosmic Energy NFT. You need an Akahsa alien to access the shop.</p>
<p className='text-white text-sm font-Proza py-2'> 3. Log in to the Hyperverse Game and boost your alien with the cosmic energy to get HYPER token rewards. You need an Akahsa alien to access the game.</p>
<p className='text-white text-sm font-Proza py-2'> 4. After the first day you should have accumulated enough token rewards to purchase more cosmic energy and get additional rewards.</p>
</div>

 </div>



<div className='flex items-center justify-center m-auto max-w-4xl'>
<h1 className='text-yellow-100 text-2xl font-semibold mt-10 text-center'>
Blast off into the Hyperverse with the SKY GODZ: Hyperverse Gamefi Experience:
</h1>
</div>

<div className="flex justify-center sm:pb-4">



<div className='flex items-center justify-center m-auto py-12 max-w-6xl'>
    

<div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">

<div className="transition duration-300 transform bg-blue-900/10 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
            <Image
              className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
              src="/assets/hyper_calendar.jpg"
              alt="Calendar"
              width={1260}
              height={750}
            />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-0" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b-lg sm:px-8">
              <h5 className="text-yellow-100 mb-2 text-xl font-bold leading-none sm:text-2xl">
              HYPERVERSE ADVENT CALENDAR
              </h5>
              <p className="mb-5 text-gray-300 text-md font-Proza">
              The Advent Calendar features 25 amazing different alien races which can be minted daily from December 1 to December 25, 2023. Get an Akasha alien airdrop for each Calendar alien to access the game.

              </p>
          <Link href="/calendar">   
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Mint now</button></Link>  
            
            </div>
          </div>







          <div className="transition duration-300 transform bg-blue-900/10 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
            <Image
              className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
              src="/assets/hyper_game.jpg"
              alt="Stargazer Game"
              width={1260}
              height={750}
            />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-0" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b-lg sm:px-8">
              <h5 className="text-yellow-100 mb-2 text-xl font-bold leading-none sm:text-2xl">
             HYPERVERSE GAME
              </h5>
              <p className="mb-5 text-gray-300 text-md font-Proza">
              Enter the Hyperverse with your Akasha alien and travel the dimensions and collect HYPER token rewards. Login with your Akasha alien and power-up your Akasha alien and get HYPER token rewards. 

              </p>
              <Link href="/hyperversegame">   
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Play now</button></Link>
            
            
            </div>
          </div>

















          <div className="transition duration-300 transform bg-blue-900/10 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
            <Image
              className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
              src="/assets/hyper_shop.jpg"
              alt="Shop"
              width={1260}
              height={750}
            />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-0" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b-lg sm:px-8">
              <h5 className="text-yellow-100 mb-2 text-xl font-bold leading-none sm:text-2xl">
              SHOP
              </h5>
              <p className="mb-5 text-gray-300 text-md font-Proza">
              Get cosmic energy sources and galactic staffs in the shop. The first energy source is free but all the others need to be bought with HYPER Tokens which you can only obtain by playing the HYPERVERSE game. 

              </p>
              <Link href="/hypershop">        
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Shop now</button></Link>
            
            </div>
          </div>


          <div className="transition duration-300 transform bg-blue-900/10 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
            <Image
              className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
              src="/assets/hyper_sleep_front.jpg"
              alt="Stargazer Game"
              width={1260}
              height={750}
            />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-0" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b-lg sm:px-8">
              <h5 className="text-yellow-100 mb-2 text-xl font-bold leading-none sm:text-2xl">
             HYPERSLEEP GAME
              </h5>
              <p className="mb-5 text-gray-300 text-md font-Proza">
              Send your Akasha Alien on extended journey to the core of the Hyperverse and get additional HYPER Token rewards. Starting on December 30, 2023 only here. You need to be a holder of at least 1 Akasha alien. Stay tuned...

              </p>
             
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Coming soon...</button>
            
            </div>
          </div>



          </div>



</div>


</div>



<div className='flex items-center justify-center mt-8 m-auto py-12 bg-gradient-to-t from-blue-800/40 to-blue-900/20 rounded-3xl'>

<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12'>




<div className='px-8'>

             <h1 className='text-yellow-100 text-lg font-Proza py-4'>Hyperverse Contract Addresses:</h1>
<p className='text-white text-sm font-Proza py-2'> Calendar: 0xE43E3d5Cbc74e6595a98db1eecfc64B90b2f2Ced</p>
<p className='text-white text-sm font-Proza py-2'> Akasha Aliens: 0x015e2f19e492051cD66Be5EdFADF05f8813B8B1A</p>
<p className='text-white text-sm font-Proza py-2'> Cosmic Energy: 0x1d012331e07179c1E49CcD877c5bE3ca23F1654e</p>
<p className='text-white text-sm font-Proza py-2'> HYPER Token: 0x43f9A9BE99fC67592069Bc33Bd9597dbc2E7443</p>


</div>


<div className='flex items-center justify-center m-auto'>
<Image
              className=" h-48 w-48 rounded-full border-4 border-blue-100 "
              src="/assets/hyper_token.gif"
              alt="Alien Calendar"
              width={750}
              height={750}
            />
             

</div>
</div>
 </div>












<div className="flex justify-center m-auto mt-8">

<h1 className='text-center text-yellow-100 font-Pro text-2xl pb-8'>Game and Mint tutorials coming soon...</h1>
</div>

 </div>

      );
    };

  
  
  export default Hyperverse;