import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Router';
import PageHeader from './component/LoginPageHeader'

const App = () => {
  return (
    <div>
        <PageHeader />
        <AppRouter />
    </div>
  );
};

export default App;