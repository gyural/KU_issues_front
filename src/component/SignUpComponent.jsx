import React, { useState } from 'react';
import styled from 'styled-components';

const Selector = styled.div`
  position: relative;
  margin-top: 0;
  text-align: left;
  & > select {
    width: 20%;
    height: 35px;
    padding: 5px;
    font-size: 15px;
    
    border: 1px solid #ccc;
    border-radius: 10px;
    cursor: pointer;
    background-color: #bbbbbb;

    &:hover {
      background-color: #e9e9e9;
    }

    &:focus {
      outline: none;
      border-color: #777777;
    }
  }
`
const IdLabel = styled.div`
  margin: 0;
  padding: 0;

  font-size: 15px;
  text-align: left;
  position: relative;
`
const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div{
    width: 80%;
    height: 10%;
    margin-bottom: 3%;
    & > div{
      & >div{
        font-size: 10px;
        font-weight: 800;
        color: #999999;
      }
    }
  }
  & > button{
    width: 80%;
    height: 45px;
    border: none;
    background-color: #0D6EFD;
    color: #fff;
    border-radius: 1rem;
    margin-top: 30px;
    margin-bottom: 10%;
    &:hover{
      cursor: pointer;
      border: none;
    }
  }
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
  width: 100%;
  height: 45px;
 
  font-size: 15px;
  color: #000000;
  background-color: #bbbbbb;
  
  border: none;
  border-radius: 1rem;
  text-align: center;
  /* opacity: 0.7; */
  overflow: hidden;
  & > input{
    background-color: inherit;
    /* opacity: inherit; */
  }
`


function SignUpComponent({ setActivePage }) {
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

        console.log('UserId:', id);
        console.log('Password:', password);
        console.log('PasswordCheck:', passwordCheck);
        console.log('Username:', name);
        console.log('Nickname:', nickname);
        console.log('Grade:', grade);

        const userData = {
            id,
            name,
            nickname,
            grade,
            password,
            passwordCheck
        };

        try {
            const response = await fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    withCredentials: true,
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                alert('회원가입에 실패했습니다.')
                throw new Error('회원가입에 실패했습니다.');
            }
            const result = await response.json();
            console.log('회원가입 성공:', result);
            alert('회원가입에 성공했습니다.')
            console.log("there");
            setActivePage('signIn');
            console.log("here");
        } catch (error) {
            console.error('에러 발생:', error);
            alert("회원가입에 실패했습니다.")
        }
    };

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} action='' method='POST'>
                <div id='logincomp'>
                    <IdLabel>
                        <div className='id'>USERID</div>
                    </IdLabel>
                    <InputDiv className='loginId'>
                        <Input
                            type="text"
                            maxLength="10"
                            id="userid"
                            value={id}
                            autoComplete="new-password"
                            onChange={(event) => setId(event.target.value)}
                        />
                    </InputDiv>
                </div>
                <div id='passwordcomp'>
                    <IdLabel>
                        <div className='id'>PASSWORD</div>
                    </IdLabel>
                    <InputDiv className='loginPassword'>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            autoComplete="new-password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </InputDiv>
                </div>
                <div id='logincomp'>
                    <IdLabel>
                        <div className='id'>PASSWORDCHECK</div>
                    </IdLabel>
                    <InputDiv className='loginId'>
                        <Input
                            type="password"
                            maxLength="10"
                            id="passwordCheck"
                            value={passwordCheck}
                            autoComplete="new-password"
                            onChange={(event) => setPasswordCheck(event.target.value)}
                        />
                    </InputDiv>
                </div>
                <div id='logincomp'>
                    <IdLabel>
                        <div className='id'>NAME</div>
                    </IdLabel>
                    <InputDiv className='loginId'>
                        <Input
                            type="text"
                            maxLength="10"
                            id="username"
                            value={name}
                            autoComplete="new-password"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </InputDiv>
                </div>
                <div id='logincomp'>
                    <IdLabel>
                        <div className='id'>NICKNAME</div>
                    </IdLabel>
                    <InputDiv className='loginId'>
                        <Input
                            type="text"
                            maxLength="10"
                            id="username"
                            value={nickname}
                            autoComplete="new-password"
                            onChange={(event) => setNickname(event.target.value)}
                        />
                    </InputDiv>
                </div>
                <div id='logincomp'>
                    <IdLabel>
                        <div className='id'>GRADE</div>
                    </IdLabel>
                    <Selector>
                        <select value={grade} onChange={onSelect}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select>
                    </Selector>
                </div>
                <button type="submit" className='submit'>SIGN UP</button>
            </LoginForm>
        </div>
    );
}

export default SignUpComponent;