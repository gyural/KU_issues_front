import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import MainPage from './pages/MainPage';

const AppRouter = () => {
	return(
	  <Router>                                    
      <Routes>                                             
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={
        <UserProfile 
        id={2019380415}
        name={'김선엽'}
        nickname={'shipleaf'}
        year={4}
        password={1234}
        />
        } />
        <Route path='/mainpage' element={<MainPage />} />
      </Routes>
    </Router>
	);
};

export default AppRouter;