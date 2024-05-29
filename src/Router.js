import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MainPageList from './pages/main/MainPageList';
import CommentList from './pages/comment/CommentList';
import CreatePost from './pages/post/Post';



const AppRouter = () => {
	return(
	  <Router>                                    
      <Routes>       
        <Route path='/' element={<MainPageList/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />        
        <Route path='/comment' element={<CommentList/>} />
        <Route path='/createPost' element={<CreatePost/>} />

      </Routes>
    </Router>
	);
};

export default AppRouter;