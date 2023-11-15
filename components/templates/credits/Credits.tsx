import Link from 'next/link'
import { GameCard } from '../gamecard';
import Image from 'next/image'

const Credits = () => {
 
    return (
      <div className="justify-center px-4  mx-auto  sm:px-4 sm:max-w-xl md:max-w-full lg:w-1/2 md:px-24 lg:px-8 pb-12 pt-8">
      <div>
<h1 className="text-white text-center font-Proza  pb-6">The STARDAPP is proudly powered by:</h1>

      </div>
      
      
      <div className="grid grid-cols-3 gap-2">
        

      <div className="m-auto w-14">
      <Image
      className="m-auto "
      src="/assets/vg_logo.svg"
      alt="Virtual Graphics Logo"
      width={300}
      height={300}
    />
              </div>

              <div className="m-auto w-14">
      <Image
      className="m-auto"
      src="/assets/polygon_logo.png"
      alt="Polygon Logo"
      width={300}
      height={300}
    />
              </div>


              <div className="m-auto w-14">
      <Image
      className="m-auto py-2"
      src="/assets/thirdweb.png"
      alt="Virtual Graphics Logo"
      width={566}
      height={382}
    />
              </div>

        
</div>
 </div>

      );
    };

  
  
  export default Credits;