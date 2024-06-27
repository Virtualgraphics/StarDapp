import Link from 'next/link'
import Image from 'next/image'

const Intro = () => {
    return (
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          <div >
          <Image
              className="object-cover w-full h-56 mb-6 rounded-2xl shadow-3xl sm:h-96 shadow-lg"
              src="/assets/app_frontIMAGE_game03.jpg"
              alt="Main Image"
              width={1260}
              height={750}
            />
            <p className=" flex items-center justify-center m-auto text-yellow-100 mb-2 text-xl font-semibold leading-none sm:text-2xl">
              SKY GODZ TALES GAMES
            </p>
            <p className="text-white text-center justify-center font-semibold">
            Immerse yourself in the SKY GODZ TALES RPG and Defi games on your web browser and mobile device.
            </p>

            <div className=" flex items-center justify-center">
            <Link href="/games">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
  Play now
</button></Link></div>



          </div>
          <div>
          <Image
              className="object-cover w-full h-56 mb-6 rounded-2xl shadow-3xl sm:h-96 shadow-lg"
              src="/assets/app_frontIMAGE_anime01.jpg"
              alt="Main Image"
              width={1260}
              height={750}
            />
            <h5 className="flex items-center justify-center m-auto text-yellow-100 mb-2 text-xl font-semibold leading-none sm:text-2xl">
             STARGAZER GAIA ANIME
            </h5>
            <p className="text-white text-center font-semibold">
            An alien race came from the skies to earth amid an imminent cosmic war to become the gods of ancient times.
            </p>
            <div className=" flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
 Coming soon
</button> </div>
          </div>
          <div>
          <Image
              className="object-cover w-full h-56 mb-6 rounded-2xl shadow-3xl sm:h-96 shadow-lg"
              src="/assets/app_frontIMAGE_webtoon02.jpg"
              alt="Main Image"
              width={1260}
              height={750}
            />
            <h5 className="flex items-center justify-center m-auto text-yellow-100 mb-2 text-xl font-semibold leading-none sm:text-2xl">
              SKAY GODZ TALES WEBTOONS
            </h5>
            <p className="text-white text-center font-semibold">
            After the Lyran fragmentation, the races in the Lyra system struggle for survival against the invading Ciakar Draco forces.
            </p>
            <div className=" flex items-center justify-center">
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
  Read now
</button> </div>
          </div>
        </div>
      </div>
    );
  };

  export default Intro;