import Link from 'next/link'

import Image from 'next/image'

const Anime = () => {
 
    return (
      <div className="justify-center px-4 py-16 mx-auto  sm:px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
     
  

          <div className="w-full justify-center m-auto flex mb-4 ">
          <div className="m-auto ">
              <Image
              className="m-auto rounded-3xl"
              src="/assets/akasha_anime.gif"
              alt="Akasha GIF"
              width={900}
              height={506}
            />
              </div>


</div>

<div className="w-10/12  justify-center flex m-auto mb-4 ">

<div className="w-10/12">
<h1 className='text-yellow-100 text-3xl text-center mt-4 font-Proza font-semibold tracking-wide'>Mint Episodes of the SKY GODZ: Stargazer Anime</h1>
<p className='text-white text-xl text-center my-4'>An alien race came from the skies to earth amid an imminent cosmic war to become 
the gods of ancient times. SKY GODZ, the animated series, is their story. Use Stardust Tokens to mint mini-episodes and trade them in the marketplace.</p>
</div>

</div>


<div className="w-full justify-center m-auto flex  sm:max-w-xl md:max-w-full lg:max-w-screen-lg">


            <Image
              className="m-auto rounded-3xl"
              src="/assets/anime_cover.jpg"
              alt="Stargazer Poster"
              width={1920}
              height={1080}
            />


</div>



<div className="w-10/12 justify-center m-auto flex">
<h1 className='text-yellow-100 text-2xl text-center my-8'>SKY GODZ: Stargazer Season 1 contains 4 episodes. Here is an overview of what is coming up...</h1></div>


<div className="justify-center m-auto flex w-10/12">

<div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">

  <div>
  <Image
          className="m-auto rounded-xl "
          src="/assets/stargazer_ep01.jpg"
          alt="Episode 1"
          width={640}
          height={480}
        />
        <h1 className='text-yellow-100 text-lg text-center mt-4'>EP 1: Arrival</h1>
        <p className='text-white text-md text-center px-4' >The Anunnaki siblings, Enki, Enlil and Nin arrive at the Maputo base on earth to investigate the mysterious deaths of the alien-human hybrids.</p>
 </div>

  <div>
  <Image
          className="m-auto rounded-xl "
          src="/assets/stargazer_ep02.jpg"
          alt="Episode 2"
          width={640}
          height={480}
        />
         <h1 className='text-yellow-100 text-lg text-center mt-4'>EP 2: The Lizard King</h1>
         <p className='text-white text-md text-center px-4' >Sargon’s insidious plan begins to bear fruit and Enlil meets Samana, the Lizard King. At the Andean base the preparations to receive the Mantis ambassadors are underway. </p>
 </div>


<div>

<Image
          className="m-auto rounded-xl "
          src="/assets/stargazer_ep03.jpg"
          alt="Episode 3"
          width={640}
          height={480}
        />
         <h1 className='text-yellow-100 text-lg text-center mt-4'>EP 3: Snakes in Eden</h1>
         <p className='text-white text-md text-center px-4' >The Mantis ambassadors are being ambushed by the the Dracos. Enki is taking over the hybrid program and puts Sargon under surveillance.</p>
</div>
</div>
</div>

        



<div className="flex justify-center sm:pb-4 mt-12">
<p className='text-white text-lg text-center sm:pb-4 '>Check out our website for more story details, character and concept art.</p>
</div>
 </div>

      );
    };

  
  
  export default Anime;