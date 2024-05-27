import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Router';

const App = () => {
  return (
      <div>
        <AppRouter />
      </div>
  );
}

export default App;