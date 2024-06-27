import { Default } from '../components/layouts/Default';

import type { NextPage } from 'next';

import DesertCrystalGame from '../components/templates/desertcrystal/DesertCrystsalGame';

const DESERTCRYSTALGAME: NextPage = () => {
  return (


    <Default pageName="Desert Crystal Game">

    <DesertCrystalGame/>

  </Default>


    
  );
};

export default DESERTCRYSTALGAME;