import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Router';
import MainSideBar from './component/SideBar';
import MainPageLoginHeader from './component/UserHeader'

const App = () => {
  return (
    <div>
        <MainPageLoginHeader />
        <MainSideBar />
        <AppRouter />
    </div>
  );
};

export default App;