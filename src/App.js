import React from 'react';
import { AppRoutes } from './AppRoutes.js'
import { NavBar } from './components/NavBar.js';

const App = () => {
  return (
    <>
      <NavBar />
      <AppRoutes />
    </>
  );
}

export default App;
