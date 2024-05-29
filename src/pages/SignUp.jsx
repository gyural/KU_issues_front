import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Frame = styled.div`
  width: 50%;
  height: 60%;

  margin: 5% auto;

  border: none;
  box-shadow: 0px 0px 1px #777777, -1px 1px 3px #777777;
  border-radius: 10px;
  
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const IdLabel = styled.div`
  margin: 0;
  padding: 0;
  height: 15px;

  font-size: 15px;
  text-align: left;
  position: relative;

  > span.id{
    position: relative;
    top: 25px;
    left: 3px;
  }

  > span.required{
    position: relative;
    top: 13px;
    color: red;
  }

`


const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  text-align: center;
`
const Input = styled.input`
  width: 95%;
  height: 87%;
  margin-top: 2px;

  text-align: left;
  border: none;

  &:focus {
    outline: none;
  };
`
const InputDiv = styled.div`
  width: 700px;
  height: 45px;
 
  font-size: 15px;
  color: #000000;
  background-color: #ffffff;
  
  border: none;
  border-radius: 10px;
  text-align: center;
  box-shadow: -2px 5px 2px #bbbbbb, 1px -1px 1px #dddddd;
`

const LoginButton = styled.button`
  width: 700px;
  height: 55px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #000000;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

const SignUpButton = styled.button`
  width: 700px;
  height: 55px;
  margin-top: 20px;
  margin-bottom: 12%;
  background-color: #ffffff;
  color: #000000;
  border: 3px solid #defdef;
  font-size: 20px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`



function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nickname, setNickname] = useState('');
  


  // 폼 제출 핸들러
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('PasswordCheck:', passwordCheck);
    console.log('Nickname:', nickname);
  };

  return (
    <Frame>
      <div className='loginForm'>
        <div className='loginDiv'>회원가입</div>
          <LoginForm onSubmit={handleSubmit} action='' method='POST'>
            <IdLabel>
              <span className='id'>학번</span><span className='required'>*</span>
            </IdLabel>
            <InputDiv className='loginId'>
              <Input
                  type="text"
                  maxLength="10"
                  id="username"
                  placeholder='학번을 입력하세요.'
                  value={username}    
                  onChange={(event) => setUsername(event.target.value)}
              />
              </InputDiv>
            <IdLabel>
              <span className='id'>비밀번호</span><span className='required'>*</span>
            </IdLabel>
              <InputDiv className='loginPassword'>
              <Input
                  type="password"
                  id="password"
                  placeholder='비밀번호를 입력하세요.'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
              />
              </InputDiv>
              <IdLabel>
              <span className='id'>비밀번호 확인</span><span className='required'>*</span>
            </IdLabel>
            <InputDiv className='loginId'>
              <Input
                  type="password"
                  id="passwordcheck"
                  placeholder='비밀번호 확인을 입력하세요.'
                  value={passwordCheck}    
                  onChange={(event) => setPasswordCheck(event.target.value)}
              />
              </InputDiv>
              <IdLabel>
              <span className='id'>닉네임</span><span className='required'>*</span>
            </IdLabel>
            <InputDiv className='loginId'>
              <Input
                  type="text"
                  id="nickname"
                  placeholder='닉네임을 입력하세요.'
                  value={nickname}    
                  onChange={(event) => setNickname(event.target.value)}
              />
              </InputDiv>
              <LoginButton type="submit" className='submit'>회원가입</LoginButton>
          </LoginForm>
          <div className='horiz'>
            <hr className='leftHr'/><span>or</span><hr className='rightHr'/>
          </div>
          <Link to='/'><SignUpButton>로그인</SignUpButton></Link>
      </div>
    </Frame>
  );
}

 

export default SignUp;


