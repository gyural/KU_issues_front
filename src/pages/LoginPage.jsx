import React, { useState } from 'react';
import styled from 'styled-components';
import SignUpComponent from '../component/SignUpComponent';
import SignInComponent from '../component/SignInComponent';

const Background = styled.div`
  background-image: url(${require('../assets/117966919_3233663960021962_562818201846139897_n.jpg')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Frame = styled.div`
  width: 30%;
  margin: 5% auto;
  background-color: #3f4b6d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  opacity: 0.85;
`;

const LoginHeader = styled.div`
  width: 100%;
  margin-top: 15%;
  margin-bottom: 3%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 85%;
    display: flex;
  }
`;

const ButtonContainer = styled.div`
  & > hr {
    margin: 0;
    padding: 0;
    margin-left: 10%;
    width: 80%;
    background: #324f9f;
    height: 2px;
    border: 0;
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
`;

const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) => (props.active ? '#ffffff' : '#dddddd')};

  &:hover {
    color: #ffffff;
  }
`;

function LoginPage({ setIsLoggedIn }) {
  const [activePage, setActivePage] = useState('signIn');

  return (
    <Background>
      <Frame>
        <LoginHeader>
          <div>
            <ButtonContainer active={activePage === 'signIn'}>
              <Button
                active={activePage === 'signIn'}
                onClick={() => setActivePage('signIn')}
              >
                SIGN IN
              </Button>
              <hr />
            </ButtonContainer>
            <ButtonContainer active={activePage === 'signUp'}>
              <Button
                active={activePage === 'signUp'}
                onClick={() => setActivePage('signUp')}
              >
                SIGN UP
              </Button>
              <hr />
            </ButtonContainer>
          </div>
        </LoginHeader>
        {activePage === 'signIn' ? (
          <SignInComponent setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <SignUpComponent setIsLoggedIn={setActivePage}/>
        )}
      </Frame>
    </Background>
  );
}

export default LoginPage;
