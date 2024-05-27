import React from "react";
import crimson from '../assets/crimson2positive.gif';
import styled from "styled-components";

const MainPageHeader = styled.header`
    margin: 0;
    padding: 0;

    height: 96px;
    box-shadow: 0 0 10px 0 #777777;

    position: relative;
`;
const Signature = styled.div`
    width: 20%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 20%;
`

const Logo = styled.span`
    margin-left: 7%; 

    font-size: 20px;
    display: inline-block;
`;
const HR = styled.hr`
  width: 1.5px;
  height: 50px;
  background-color: black; 
  border: none;
  margin: 0;
  margin-left: 7%;
`

const HeaderLoginButton = styled.button`
    width: 90px;
    height: 47px;

    background-color: black;
    color: white;

    border: none;
    border-radius: 1.5rem;
    
    position: absolute;
    right: 25%;
    margin-top: 22px;
    cursor: pointer;

    &:hover{
        border: 5px solid black;
    }
`
function MainHeader() {
    return(
        <MainPageHeader>
            <Signature>
                <img src={crimson} alt="" style={{width: '65px', height: '82.21px'}}></img>
                <HR />
                <Logo>고려대 신문고</Logo>
            </Signature>
            <HeaderLoginButton>
                로그인
            </HeaderLoginButton>
        </MainPageHeader>
    )
};

export default MainHeader;