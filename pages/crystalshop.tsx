import { Default } from '../components/layouts/Default';

import type { NextPage } from 'next';
import { HyperShop } from '../components/templates/hyperverse';
import { CrystalShop } from '../components/templates/desertcrystal';

const CRYSTALSHOP: NextPage = () => {
  return (

    <Default pageName="CRYSTAL SHOP">
    <CrystalShop/>
  </Default>
  
  );
};

export default CRYSTALSHOP;