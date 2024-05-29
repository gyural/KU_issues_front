import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../component/LoginHeader';

const Background = styled.div`
  margin: 0;
  padding: 0;
  background-color: #fafafa;
  height: 100%;
  min-height: 100vh;
  & > div{
    background-color: #fff;
  }
`
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
  margin: 0;
  padding: 0;
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
const Selector = styled.div`
  position: relative;
  margin-top: 20px;
  text-align: left;
  & > select {
    width: 20%;
    height: 35px;
    padding: 5px;
    font-size: 16px;

    
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background-color: #f9f9f9;

    box-shadow: -2px 5px 2px #bbbbbb, 1px -1px 1px #dddddd;

    &:hover {
      background-color: #e9e9e9;
    }

    &:focus {
      outline: none;
      border-color: #777777;
    }
  }
`



function SignUp() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [grade, setGrade] = useState('1');

  
  const onSelect = (event) => {
    setGrade(event.target.value);
  } 
  

  // 폼 제출 핸들러
  const handleSubmit = async (event) => {
    event.preventDefault(); // 값이 제대로 제출되는지 확인
    if (password !== passwordCheck){
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    console.log('UserId:', id);
    console.log('Password:', password);
    console.log('PasswordCheck:', passwordCheck);
    console.log('Username:', name);
    console.log('Nickname:', nickname);
    console.log('Grade:', grade); 

  const userData = {
    id,
    password,
    name,
    nickname,
    grade
  };

  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
  if (!response.ok) {
    throw new Error('회원가입에 실패했습니다.');
  }
  const result = await response.json();
    console.log('회원가입 성공:', result);
  } catch (error) {
    console.error('에러 발생:', error);
  }
};

  return (
    <Background>
      <Header bgColor="#fff"/>
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
                    id="userid"
                    placeholder='학번을 입력하세요.'
                    required='required'
                    value={id}    
                    onChange={(event) => setId(event.target.value)}
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
                    required='required'
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
                    required='required'
                    value={passwordCheck}    
                    onChange={(event) => setPasswordCheck(event.target.value)}
                />
                </InputDiv>
                <IdLabel>
                <span className='id'>이름</span><span className='required'>*</span>
                </IdLabel>
                <InputDiv className='loginId'>
                  <Input
                      type="text"
                      id="username"
                      placeholder='이름을 입력하세요.'
                      required='required'
                      value={name}    
                      onChange={(event) => setName(event.target.value)}
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
                      required='required'
                      value={nickname}    
                      onChange={(event) => setNickname(event.target.value)}
                  />
                </InputDiv>
                <IdLabel>
                <span className='id'>학년</span><span className='required'>*</span>
                </IdLabel>
                <Selector>
                  <select value={grade} onChange={onSelect}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </select>
                </Selector>
                <LoginButton type="submit" className='submit'>회원가입</LoginButton>
            </LoginForm>
            <div className='horiz'>
              <hr className='leftHr'/><span>or</span><hr className='rightHr'/>
            </div>
            <Link to='/login'><SignUpButton>로그인</SignUpButton></Link>
        </div>
      </Frame>
    </Background>
  );
}

export default SignUp;