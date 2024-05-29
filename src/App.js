import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Router';
import MainHeader from './component/MainHeader';

import SideBar from './component/SideBar';

const App = () => {
  return (
    <div>

        <MainPageHeader />
        <SideBar />
        <AppRouter />
    </div>
  );
};

export default App;