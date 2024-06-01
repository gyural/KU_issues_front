import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserProfilePage from './pages/UserProfilePage';
import CreatePost from './pages/post/Post';
import MainPageList from './pages/main/MainPageList';
import ProfileEditPage from './pages/ProfileEditPage';
import Survey from './pages/survey/SurveyPage';
import SurveyResPage from './pages/survey/surveyResPage';
import Test from './pages/Test';




const AppRouter = ({ setIsLoggedIn }) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/myprofile' element={<UserProfilePage />} />
        <Route path='/mainpage' element={<MainPageList />} />
        <Route path='/profileedit' element={<ProfileEditPage />} />
        <Route path='/survey' element={<Survey />} />
        <Route path='/surveyRes' element={<SurveyResPage />}/>
        <Route path='/test' element={<Test />} />
        <Route path='/survey' element={<Survey />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

