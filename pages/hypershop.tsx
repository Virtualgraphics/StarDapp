import { Default } from '../components/layouts/Default';

import type { NextPage } from 'next';
import { HyperShop } from '../components/templates/hyperverse';

const HYPERSHOP: NextPage = () => {
  return (

    <Default pageName="HYPERSHOP">
    <HyperShop />
  </Default>
  
  );
};

export default HYPERSHOP;