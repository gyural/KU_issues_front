import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserProfilePage from './pages/UserProfilePage';
import MainPage from './pages/MainPage';

const AppRouter = () => {
	return(
	  <Router>                                    
      <Routes>                                             
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<UserProfilePage/>} />
        <Route path='/mainpage' element={<MainPage />} />
      </Routes>
    </Router>
	);
};

export default AppRouter;