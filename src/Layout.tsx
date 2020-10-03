import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import ICalender from './lib/shared/inputs/calender/ICalender';
import IAutoComplete from './lib/shared/inputs/autocomplete/IAutoComplete';

const Layout = () => (
  <h1>
    Hi world
    <ICalender />
    <IAutoComplete />
  </h1>
)

export default Layout;