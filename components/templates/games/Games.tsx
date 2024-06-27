import Link from 'next/link'
import { GameCard } from '../gamecard';
import Image from 'next/image'

const Games = () => {
 
    return (
      <div className="justify-center px-4 py-16 mx-auto  sm:px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
     
  

          <div className="w-10/12 justify-center m-auto flex mb-4 ">
   <div className="m-auto py-2 ">
              <Image
              className="m-auto  rounded-3xl"
              src="/assets/game_coverNEW01.jpg"
              alt="Game Screen"
              width={1260}
              height={750}
            />
              </div>


</div>

<div className="w-10/12  justify-center flex m-auto mb-4 ">

<div className="w-10/12">
<h1 className='text-yellow-100 text-3xl text-center mt-4 font-Proza font-semibold tracking-wide'>The Lion Warriors of Aveyon - Adventure Game</h1>
<p className='text-white text-lg text-center my-4'>The young Lion Warrior Yoris has been chosen to defend the powerful desert crystals from the attacking Dracos. He has to collect the crystals while fighting off deadly scorpions and face the ultimate boss battle before entering the Stargate to safety.</p>
</div>

</div>


<div className="w-full justify-center m-auto flex ">
             <Link href="https://flourishing-pothos-93567e.netlify.app">
            <button className="bg-blue-800 hover:bg-black text-yellow-100  w-40 h-12 px-4 rounded  text-xl text-Jost">
            Play now
</button></Link></div>

<div className="w-10/12 justify-center m-auto flex">
<h1 className='text-yellow-100 text-2xl text-center my-8'>More cosmic Adventure Games coming bi-monthly!</h1></div>


<div className="justify-center m-auto flex w-10/12">

<div className="grid grid-cols-3 gap-4">

  <div>
  <Image
          className="m-auto rounded-xl "
          src="/assets/games_comingOrion.jpg"
          alt="Episode 2"
          width={640}
          height={480}
        />
        <h1 className='text-yellow-100 text-lg text-center mt-4'>ORION WARS GAME</h1>
        <p className='text-white text-md text-center' >Coming August 2024</p>
 </div>

  <div>
  <Image
          className="m-auto rounded-xl "
          src="/assets/games_comingArcturus.jpg"
          alt="Episode 2"
          width={640}
          height={480}
        />
         <h1 className='text-yellow-100 text-lg text-center mt-4'>ARCTURUS ECLIPSE GAME</h1>
         <p className='text-white text-md text-center' >Coming October 2024</p>
 </div>


<div>

<Image
          className="m-auto rounded-xl "
          src="/assets/games_comingFederation.jpg"
          alt="Episode 2"
          width={640}
          height={480}
        />
         <h1 className='text-yellow-100 text-lg text-center mt-4'>GALAGTIC FEDERATION GAME</h1>
         <p className='text-white text-md text-center' >Coming December 2024</p>
</div>
</div>
</div>

         


            
<div className="w-full justify-center m-auto flex my-4 bg-blue-950/20 max-w-2xl py-8 rounded-2xl">

           <div className="grid grid-cols-3 gap-4">

<div><p className="text-white text-lg align-middle text-left">Controllers</p></div>

<div>
<Image
          className="m-auto w-20"
          src="/assets/keyboard.png"
          alt="Keyboard"
          width={288}
          height={146}
        />

</div>

<div>
<Image
          className="m-auto w-20"
          src="/assets/xbox.png"
          alt="Xbox"
          width={288}
          height={146}
        />

</div>
</div>      
</div>

<div className="w-full justify-center m-auto flex my-4 bg-blue-950/20 max-w-2xl p-8 rounded-2xl">

           <div className="grid grid-cols-4 gap-2 w-full">



<div><Image
          className="m-auto w-20"
          src="/assets/logo_webgl.png"
          alt="Xbox"
          width={500}
          height={500}
        /></div>

<div>
  <div><Image
          className="m-auto w-20"
          src="/assets/logo_android.png"
          alt="Xbox"
          width={500}
          height={500}
        /></div>
        </div>

<div>
<div><Image
          className="m-auto w-20"
          src="/assets/logo_ios.png"
          alt="Xbox"
          width={500}
          height={500}
        /></div>

</div>
<div>
<div><Image
          className="m-auto w-20"
          src="/assets/polygon_logo.png"
          alt="Xbox"
          width={500}
          height={500}
        /></div>


</div>
           </div>
          
</div>



<div className="my-8"><p className="text-white text-lg align-middle text-center">Stay tuned for the Web 2.0 versions on many popular websites and mobile apps.</p></div>




            




<div className='flex items-center justify-center'>
<h1 className='text-yellow-100 text-2xl font-semibold mt-10'>
Earn more rewards by playing the The SKY GODZ DEFI Games:
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