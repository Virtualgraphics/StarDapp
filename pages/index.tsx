import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import type { NextPage } from 'next';
import { Default } from '../components/layouts/Default';
import { Home } from '../components/templates/home';


const HomePage: NextPage = () => {
  return (
  
    
    <Default pageName="SKY GODZ-We Were Never Alone">

    <Home />
  

    </Default>
  



  );
};


export default HomePage;
