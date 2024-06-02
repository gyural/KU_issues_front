import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const IdLabel = styled.div`
  margin: 0;
  padding: 0;
  font-size: 15px;
  text-align: left;
  position: relative;
  > span.id {
    position: relative;
    top: 25px;
    left: 3px;
  }
  > span.required {
    position: relative;
    top: 13px;
    color: red;
  }
`;

const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    width: 80%;
    height: 10%;
    margin-bottom: 3%;
    & > div {
      & > div {
        font-size: 10px;
        font-weight: 800;
        color: #999999;
      }
    }
  }
  & > button {
    width: 80%;
    height: 45px;
    border: none;
    background-color: #0d6efd;
    color: #fff;
    border-radius: 1rem;
    margin-top: 30px;
    margin-bottom: 10%;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Input = styled.input`
  width: 95%;
  height: 87%;
  margin-top: 2px;
  text-align: left;
  border: none;
  &:focus {
    outline: none;
  }
`;

const InputDiv = styled.div`
  width: 100%;
  height: 45px;
  font-size: 15px;
  color: #000000;
  background-color: #bbbbbb;
  border: none;
  border-radius: 1rem;
  text-align: center;
  overflow: hidden;
  & > input {
    background-color: inherit;
  }
`;

function SignInComponent({ setIsLoggedIn }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // 더미 데이터
    /*
    const dummyId = '123';
    const dummyPassword = '123';

    console.log('입력된 ID:', id);
    console.log('입력된 Password:', password);

    if (id === dummyId && password === dummyPassword) {
      console.log('로그인 성공');
      setIsLoggedIn(true);
      console.log('setIsLoggedIn 호출됨');
      navigate('/mainpage');
    } else {
      alert('로그인에 실패했습니다!');
    }
  };
    */
    const credentials = {
      id,
      password
    };

    try {
      const response = await fetch('https://udr2.wild2.duckdns.org/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        credentials: 'include' // 쿠키를 포함하도록 설정
      });

      if (!response.ok) {
        throw new Error('로그인에 실패했습니다!');
      }

      const result = await response.json();
      console.log('로그인 성공:', result);
      setIsLoggedIn(true);
      navigate('/mainpage');
    } catch (error) {
      alert(error.message);
    }
  };


  // 폼 제출 핸들러
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Username:', username);
  //   console.log('Password:', password);
  // };

  return (
    <div>
      <LoginForm onSubmit={handleLogin}>
        <div id="logincomp">
          <IdLabel>
            <div className="id">USERID</div>
          </IdLabel>
          <InputDiv className="loginId">
            <Input
              type="text"
              maxLength="10"
              id="username"
              value={id}
              autoComplete="new-password"
              onChange={(event) => setId(event.target.value)}
            />
          </InputDiv>
        </div>
        <div id="passwordcomp">
          <IdLabel>
            <div className="id">PASSWORD</div>
          </IdLabel>
          <InputDiv className="loginPassword">
            <Input
              type="password"
              id="password"
              value={password}
              autoComplete="new-password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </InputDiv>
        </div>
        <button type="submit">SIGN IN</button>
      </LoginForm>
    </div>
  );
}

export default SignInComponent;
