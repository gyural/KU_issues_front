import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Frame = styled.div`
  width: 50%;
  height: 60%;

  margin: 9% auto;

  border: none;
  box-shadow: 0px 0px 1px #777777, -1px 1px 3px #777777;
  border-radius: 10px;
`

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 폼 제출 핸들러
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Frame>
      <span>로그인</span>
      <div className='loginForm'>
          <form onSubmit={handleSubmit} action='' method='POST'>
              <div className='loginId'>
              <input
                  type="text"
                  maxLength="10"
                  id="username"
                  placeholder='학번'
                  value={username}    
                  onChange={(event) => setUsername(event.target.value)}
              />
              </div>
              <div className='loginPassword'>
              <input
                  type="password"
                  id="password"
                  placeholder='비밀번호'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
              />
              </div>
              <button type="submit" className='submit'>로그인</button>
          </form>
              <div className='signup'>
                  <Link to='/signup'><button>회원가입</button></Link>
              </div>
      </div>
    </Frame>
  );
}

export default Login;