import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserProfilePage from './pages/UserProfilePage';
import CreatePost from './pages/post/Post';
import MainPageList from './pages/main/MainPageList';
import ProfileEditPage from './pages/ProfileEditPage';
import Survey from './component/Survey';
import Test from './pages/Test';


const AppRouter = () => {
	return(
	  <Router>                                    
      <Routes>                                             
        <Route path='/login' element={<LoginPage />} />
        <Route path='/mypage' element={<UserProfilePage/>} />
        <Route path='/' element={<MainPageList />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/profileedit' element={<ProfileEditPage />} />
        <Route path='/survey' element={<Survey />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
