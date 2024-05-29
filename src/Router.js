import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import SignUp from './pages/SignUpPage';
import UserProfilePage from './pages/UserProfilePage';
import MainPageList from './pages/main/MainPageList';
import ProfileEditPage from './pages/ProfileEditPage';
import Survey from './component/Survey';

const AppRouter = () => {
	return(
	  <Router>                                    
      <Routes>                                             
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/mypage' element={<UserProfilePage/>} />
        <Route path='/' element={<MainPageList />} />
        <Route path='/profileedit' element={<ProfileEditPage />} />
        <Route path='/survey' element={<Survey />}/>
      </Routes>
    </Router>
	);
};

export default AppRouter;