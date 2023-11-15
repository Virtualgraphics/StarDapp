import Link from 'next/link'
import Image from 'next/image'
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";


const Hero = () => {
    return (

      <>
      <div className="bg-indigo-500/20 px-4 py-10 mx-auto sm:px-8 sm:max-w-xl md:max-w-full mt-none lg:w-3/4 md:px-24 lg:px-10 lg:py-10 rounded-3xl mt-10" >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            
            <h1 className="tracking-wider mb-4 text-3xl font-semibold text-yellow-100 font-Cinzel" >
              SKY GODZ STARDAPP
              <br className="hidden md:block" /> </h1>

              <h5 className="mb-4 text-lg font-medium  text-blue-100 font-Proza " >
              Create the future of decentralized, interactive entertainment in the Stardapp
              
            </h5>
            <p className="mb-6 text-white font-medium">
            SKY GODZ is an epic science-fiction/fantasy anime, game and graphic novel that combines elements of extraterrestrial mythologies, ancient astronaut theory and alien conspiracy ideas. Earth is at the center of a massive galactic conflict as it plays a key role in an expansive, interconnected cosmic legacy to unite the universe.
            </p>
            <p className="mb-2 text-white font-medium">

            WEB3 is the most active way to participate in the SKY GODZ Universe. Own all your assets, vote on the future of your planets community and trade and share with other founders.

            </p>
           
<div className='grid gap-4 grid-cols-2 align-middle self-auto mt-10'>
         

<Link href="/nftmint">
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Get Started</button>
            </Link>


           </div>

           </div>


          <div className='shadow-2xl'>
            <Image
              className="object-cover w-full h-full rounded-3xl shadow-3xl shadow-lg"
              src="/assets/feature_gn.jpg"
              alt="Main Image"
              width={861}
              height={820}
            />


          </div>
        </div>
      </div>

      </>
    );
  };

  export default Hero;