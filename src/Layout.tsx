import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import SingleJourney from './components/inputs/single/SingleJourney';

const Layout = () => (
  <div className="p-grid p-justify-center">
    <div className="p-col-12 p-md-6">
      <div className='p-pl-2 p-pr-2'>
        <h1 className='p-shadow-3 p-text-center'>
          Hi Tripster
        </h1>
        <SingleJourney />
      </div>
    </div>
  </div>
)

export default Layout;