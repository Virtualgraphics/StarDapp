import Link from 'next/link'
import Image from 'next/image'

const Intro = () => {
    return (
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
          <p className="text-yellow-100 mb-1 text-3xl font-semibold tracking-wide uppercase md:mb-2 font-Cinzel">
          Stargazer NFT Game and Collection
          </p>
          <p className="text-base font-semibold text-white md:text-lg">
       Collect NFTs and tokens to use in our games, animes and webtoons. Create a community ecosystem that entertains and rewards.
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          <div >
          <Image
              className="object-cover w-full h-56 mb-6 rounded-2xl shadow-3xl sm:h-96 shadow-lg"
              src="/assets/app_frontIMAGE_game.jpg"
              alt="Main Image"
              width={1260}
              height={750}
            />
            <p className=" flex items-center justify-center m-auto text-yellow-100 mb-2 text-xl font-bold leading-none sm:text-2xl">
              STARGAZER GAME
            </p>
            <p className="text-white text-center justify-center font-semibold">
            Play the fun and immersive SKY GODZ - Stargazer RPG and Defi game on your PC, the web or on your mobile device.
            </p>

            <div className=" flex items-center justify-center">
            <Link href="/games">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
  Find out more
</button></Link></div>



          </div>
          <div>
          <Image
              className="object-cover w-full h-56 mb-6 rounded-2xl shadow-3xl sm:h-96 shadow-lg"
              src="/assets/app_frontIMAGE_anime.jpg"
              alt="Main Image"
              width={1260}
              height={750}
            />
            <h5 className="flex items-center justify-center m-auto text-yellow-100 mb-2 text-xl font-bold leading-none sm:text-2xl">
             STAR VISITORS ANIME
            </h5>
            <p className="text-white text-center font-semibold">
            Experience and participate in the anime series about the Ancient Astronauts who came to earth to become the gods of our forefathers. 
            </p>
            <div className=" flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
 Coming soon
</button> </div>
          </div>
          <div>
          <Image
              className="object-cover w-full h-56 mb-6 rounded-2xl shadow-3xl sm:h-96 shadow-lg"
              src="/assets/app_frontIMAGE_webtoon.jpg"
              alt="Main Image"
              width={1260}
              height={750}
            />
            <h5 className="flex items-center justify-center m-auto text-yellow-100 mb-2 text-xl font-bold leading-none sm:text-2xl">
              STARSEED WEBTOON
            </h5>
            <p className="text-white text-center font-semibold">
            Read about the exciting history of the Great Lyran and Orion Wars and the creation of the Galactic Federation.
            </p>
            <div className=" flex items-center justify-center">
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
  Coming soon
</button> </div>
          </div>
        </div>
      </div>
    );
  };

  export default Intro;