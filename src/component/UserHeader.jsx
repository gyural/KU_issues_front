import React, { useState } from "react";
import crimson from '../assets/crimson2positive.gif';
import styled from "styled-components";
import { SlUser } from "react-icons/sl";
import { VscTriangleDown } from "react-icons/vsc";
import { Link } from "react-router-dom";

const MainPageLoginHeader = styled.header`
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

const UserMenu = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 25%;

    & > button.NewPostButton{
        width: 109px;
        height: 47px;

        font-size: 13px;
        font-weight: 550;
        background-color: #ffffff;
        border: 1px solid #000000;
        border-radius: 1.5rem;

        cursor: pointer;

        &:hover{
            color: white;
            background-color: black;
        }
    }

    
`
const UserButton = styled.button`
    margin-left: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    cursor: pointer;
    background-color: #ffffff;

    &:hover{
        & > svg{
            color: black;
        }
    }

    & > div{
        width: 47px;
        height: 47px;
        margin-left: 15px;

        background-color: #dddddd;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    & > svg{
        margin-left: 5px;
        color: grey;
    }
`
const DropdownMenu = styled.div`
    width: 150px;
    position: absolute;
    top: 110%;
    right: 0;
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 8px;
    z-index: 1000;
    
    & > a{
        text-decoration: none;
        color: inherit;

        font-size: 18px;
    }

    & > a > div{
        margin: 0;
        padding: 7px;
    }

`;

function MainLoginHeader() {
    const [showMenu, setShowMenu] = useState(false);

    const handleButtonClick = () => {
        setShowMenu(!showMenu);
    };

    return(
        <MainPageLoginHeader>
            <Signature>
                <img src={crimson} alt="" style={{width: '65px', height: '82.21px'}}></img>
                <HR />
                <Logo>고려대 신문고</Logo>
            </Signature>
            <UserMenu>
                <button className="NewPostButton">게시글 작성</button>
                <UserButton onClick={handleButtonClick}>
                    <div>
                        <SlUser size="20" style={{width: '100%'}}/>
                    </div>
                    <VscTriangleDown />
                </UserButton>
                {showMenu && (
                    <DropdownMenu>
                        <Link to='/'><div>내 정보</div></Link>
                        <Link><div>로그아웃</div></Link>
                    </DropdownMenu>
                )}
            </UserMenu>
        </MainPageLoginHeader>
    )
};

export default MainLoginHeader;