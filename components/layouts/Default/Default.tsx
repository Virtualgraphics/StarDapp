import { FC, ReactNode } from 'react';

import { NavBar } from '../../modules/navbar';
import { Footer } from '../../modules/footer';

import Head from 'next/head';



const Default: FC<{ children: ReactNode; pageName: string }> = ({ children, pageName }) => (
  <>
    <Head>
      <title>{`${pageName} `}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

<NavBar />
   


    <div className="w-full h-full p-0 m-0 bg-gradient-to-r from-black to-indigo-800">
      {children}
    </div>

    <Footer/>
   
  </>
);

export default Default;