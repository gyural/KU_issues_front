import React from 'react'
import styled from 'styled-components';
import MainLoginHeader from '../component/UserHeader';
import MainHeader from '../component/GuestHeader';

const Div = styled.div`
  text-align: center;
`

function MainPage({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <MainLoginHeader /> : <MainHeader />}
      <Div>
        안녕
      </Div>
    </div>
  )
};

export default MainPage;
