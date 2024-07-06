
import { Default } from '../components/layouts/Default';
import type { NextPage } from 'next';
import { Anime } from '../components/templates/anime';


const ANIME: NextPage = () => {
  return (

    <Default pageName="ANIME">
    <Anime/>
  </Default>
  
  );
};

export default ANIME;