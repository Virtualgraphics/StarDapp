import { Marketplace } from '../components/templates/marketplace';
import { Default } from '../components/layouts/Default';

import type { NextPage } from 'next';


const MARKETPLACE: NextPage = () => {
  return (
    <Default pageName="MARKETPLACE">

      <Marketplace/>

    </Default>
  );
};

export default MARKETPLACE