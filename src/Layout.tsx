import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import SingleJourney from './components/inputs/single/SingleJourney';

const Layout = () => (
  <div className='p-pl-2 p-pr-2'>
    <h1 className='p-shadow-3 p-text-center'>
      Hi Tripster
    </h1>
    <SingleJourney />
  </div>
)

export default Layout;