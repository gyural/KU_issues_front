import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Router';
import PageHeader from './component/LoginPageHeader'
import MainPageHeader from './component/MainPageHeader'
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