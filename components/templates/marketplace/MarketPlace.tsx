import Link from 'next/link'

import Image from 'next/image'

const MarketPlace = () => {
 
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
       Sky Godz Marketplace
            </h2>
            <hr className="w-full  border-yellow-200" />
            <p className="text-base text-white lg:text-xl md:text-lg sm:px-4 py-5 font-Proza">
            List, sell and buy SKY GODZ NFTs and collectibles in the Stargazer Marketplace
            </p>
           </div>

           <div className="container my-12 mx-auto md:px-6">
  
  <section className="mb-14 w-4/5 justify-center mx-auto flex">

    <div
      className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] rounded-3xl shadow-xl">

<Image
          className="m-auto"
          src="/assets/founder_top.jpg"
          alt="Cemetary"
          width={1000}
          height={800}
        />


      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full  overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-yellow-100 md:px-12">
            <h2 className="mb-12 text-3xl  leading-tight tracking-wide font-Proza Libre">
            Are you ready <br /><span>for an adventure?</span>
            </h2>
            <Link href="/buy">
               <button type="button"
              className="font-Proza Libre rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
              data-te-ripple-init data-te-ripple-color="light">
             Trading starts on December 1, 2023
            </button></Link>  
          </div>
        </div>
      </div>

      
      </div>

      </section>
      </div>

      </div>
  );
};

export default MarketPlace;