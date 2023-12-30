import { Default } from '../components/layouts/Default';

import type { NextPage } from 'next';
import { Hypersleep } from '../components/templates/hyperverse';


const HYPERSLEEP: NextPage = () => {
  return (

    <Default pageName="HYPERSLEEP">
    <Hypersleep/>
  </Default>
  
  );
};

export default HYPERSLEEP;