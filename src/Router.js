import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserProfilePage from './pages/UserProfilePage';
import MainPageList from './pages/main/MainPageList';
import ProfileEditPage from './pages/ProfileEditPage';
import Survey from './pages/survey/SurveyPage';
import SurveyResPage from './pages/survey/surveyResPage';
import Test from './pages/Test';
import AnswerResult from './pages/survey/answerResult';



const AppRouter = ({ setIsLoggedIn }) => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/' element={<UserProfilePage />} />
        <Route path='/mainpage' element={<MainPageList />} />
        <Route path='/profileedit' element={<ProfileEditPage />} />
        <Route path='/survey' element={<Survey />} />
        <Route path='/surveyRes' element={<SurveyResPage />}/>
        <Route path='/test' element={<Test />} />
        <Route path='/answerResult' element={<AnswerResult />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
