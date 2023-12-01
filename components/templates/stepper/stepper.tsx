import Link from 'next/link'
import Image from 'next/image'

const Stepper = () => {
    return (
      <div className="justify-items-center mx-auto  rounded-3xl bg-blue-800 sm:px-4 sm:mt-8 sm:py-8 sm:max-w-xl md:mt-8 md:max-w-full lg:w-7/12 md:px-8 lg:px-8 lg:py-10 lg:my-20">



<ol className="lg:flex mx-auto justify-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
    <li className="flex items-center text-yellow-100 dark:text-yellow-a00 space-x-2.5">

        <span className="flex items-center justify-center w-12 h-12 border border-yellow-100 rounded-full shrink-0 dark:border-yellow-100">
            1
        </span>
        <span>
            <h3 className="font-2xl leading-tight font-Jost"></h3>
            <p className="text-lg font-Jost font-semibold font-Jost ">Claim daily Alien NFTs</p>
        </span>
    </li>
    <li className="flex items-center text-yellow-100 dark:text-gray-400 space-x-2.5">
        <span className="flex items-center justify-center w-12 h-12 border border-yellow-100 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        <span>
            <h3 className="font-2xl leading-tight font-Jost"></h3>
            <p className="text-lg font-Jost font-semibold font-Jost ">Level-up Alien NFTs</p>
        </span>
    </li>
    <li className="flex items-center text-yellow-100 dark:text-gray-400 space-x-2.5">
        <span className="flex items-center justify-center w-12 h-12 border border-yellow-100 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h3 className="font-2xl leading-tight font-Jost"></h3>
            <p className="text-lg font-Jost font-semibold font-Jost ">Send Alien into Hyperverse</p>
        </span>
    </li>
</ol>






      </div>
      );
    };
  
    export default Stepper;    