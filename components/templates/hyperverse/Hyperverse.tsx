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

<div className='flex items-center justify-center mt-8 m-auto py-12 bg-gradient-to-t from-blue-800/40 to-blue-900/20 rounded-3xl'>

<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>

    <div>
<Image
              className="flex items-center justify-center h-64 w-64 rounded-full border-4 border-blue-100"
              src="/assets/hyperverse_aliens_promo.gif"
              alt="Alien Calendar"
              width={750}
              height={750}
            />
            <h1 className='text-yellow-100 text-center text-lg font-Proza pt-4'>Claim daily Alien NFTs</h1>

</div>


<div>
<Image
              className="flex items-center justify-center h-64 w-64 rounded-full border-4 border-blue-100"
              src="/assets/akasha_aliens_animation.gif"
              alt="Alien Calendar"
              width={750}
              height={750}
            />
             <h1 className='text-yellow-100 text-center text-lg font-Proza pt-4'>Level-up Alien NFTs</h1>

</div>


<div>
<Image
              className="flex items-center justify-center  h-64 w-64 rounded-full border-4 border-blue-100"
              src="/assets/hyper_token.gif"
              alt="Alien Calendar"
              width={750}
              height={750}
            />
             <h1 className='text-yellow-100 text-center text-lg font-Proza pt-4'>Get HYPER token rewards</h1>

</div>
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
              The Advent Calendar features 25 amazing different alien races which can be minted daily from December 1 to December 25, 2023. Only 99 aliens can be claimed on a daily basis and up to 1 aliens can be claimed per wallet. 

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
              src="/assets/hyper_akasha.jpg"
              alt="Akasha"
              width={1260}
              height={750}
            />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-0" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b-lg sm:px-8">
              <h5 className="text-yellow-100 mb-2 text-xl font-bold leading-none sm:text-2xl">
              LEVEL UP TO AN AKASHA ALIEN
              </h5>
              <p className="mb-5 text-gray-300 text-md font-Proza">
              Level-up your aliens to a beautiful one-of-a-kind Akasha alien ERC-721 (by burning the ERC-1155 to obtain the new NFT) by burning your calendar alien. Only 200 Akasha aliens can be minted starting on December 21, 2023. 

              </p>
             
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Level-up now</button>
            
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
              Get cosmic energy sources and galactic staffs in the shop. The first energy source is free but all the others need to be bought with HYPER Tokens which you can only obtain by playing the HYPERVERSE game. Check stats for accumulated rewards.

              </p>
             
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Shop now</button>
            
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
              Enter the Hyperverse with your Akasha alien and travel the dimensions and collect HYPER token rewards. Login with your Akasha alien and power-up your Akasha alien and get HYPER token rewards depending on the power of your energy source. 

              </p>
             
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Play now</button>
            
            </div>
          </div>



          </div>



</div>


</div>

<div className="flex justify-center m-auto">

<h1 className='text-center text-yellow-100 font-Pro text-3xl pb-8'>Game and Mint tutorial coming soon...</h1>
</div>

 </div>

      );
    };

  
  
  export default Hyperverse;