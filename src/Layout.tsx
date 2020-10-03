import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Calender from './components/shared/Input/Calendar';
import AutoComplete from './components/shared/Input/AutoComplete';

const Layout = () => (
  <h1>
    Hi world
    <Calender />
    <AutoComplete />
  </h1>
)

export default Layout;