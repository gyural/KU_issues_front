import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Router';
import Header from './component/Header'

const App = () => {
  return (
    <div>
        <Header />
        <AppRouter />
    </div>
  );
};

export default App;