import React, { useState } from "react";
import crimson from '../assets/crimson2positive.gif';
import styled from "styled-components";
import { SlUser } from "react-icons/sl";
import { VscTriangleDown } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdLogout } from "react-icons/md";


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
const SidebarToggleButton = styled.button`
    position: absolute;
    left: 20px;
    bottom: 30%;
    border: none;
    background-color: inherit;
    cursor: pointer;

    &:hover svg{
        transform: scale(1.2);
        transition: transform 0.2s ease-in-out;
    }
`
const SideBarHeader = styled.header`
    margin: 5px;
    width: 100%;

    display: flex;
    align-items: center;

    & > span, img{
        display: inline-block;
    }
    & > img{
        margin: 14px;
        margin-left: 20px;
    }
    & > span{
        font-size: 20px;
        font-weight: 550;
    }
    
`
const SideBarButton = styled.button`
    margin: 0 auto;
    padding: 10px;
    width: 80%;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    display: flex;
    
    cursor: pointer;
    &:hover{
        background-color: #000;
        color: #fff;
    }
    & > span{
        margin-left: 15px;
        display: inline-block;

        font-size: 15px;
        font-weight: 550;
    }
`

const MainSideBar = styled.div`
    width: 15%;
    height: 100%;
    
    text-align: center;
    box-shadow: 1px 0px 1px #bbbbbb;
    position: absolute;
    
    & > hr{
        margin-top: 0;
        padding: 0;
        width: 85%;   
        border-width: 1px 0 0 0;
        border-color: #eeeeee;
    }
    & > hr.bottonHr{
        margin-top: 175%;
    }
    & > a{
        text-decoration: none;
        color: inherit;
    }
`

function MainLoginHeader() {
    const [showMenu, setShowMenu] = useState(false);

    const handleButtonClick = () => {
        setShowMenu(!showMenu);
    };
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return(
        <div>
            <MainPageLoginHeader>
                <SidebarToggleButton onClick={toggleSidebar}>
                        <FiMenu size='30'/>
                </SidebarToggleButton>
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
                            <Link><div>내 정보</div></Link>
                            <Link><div>로그아웃</div></Link>
                        </DropdownMenu>
                    )}
                    </UserMenu>
            </MainPageLoginHeader>
            {sidebarOpen && (
                <MainSideBar>
                    <SideBarHeader>
                        <img src={crimson} alt='' style={{width: '30.05px', height: '38px'}}></img>
                        <span>Menu</span>
                    </SideBarHeader>
                    <hr />
                    <Link to='/mainpage'>
                        <SideBarButton>
                            <IoHomeOutline size="18"/>
                            <span>메인 페이지</span>
                        </SideBarButton>
                    </Link>
                    <Link to='/surveypage'>
                        <SideBarButton>
                            <IoMdCheckboxOutline size="18"/>
                            <span>설문조사</span>
                        </SideBarButton>
                    </Link>
                    <Link to='/reportpage'>
                        <SideBarButton>
                            <TbReportAnalytics size="18"/>
                            <span>분석 및 보고</span>
                        </SideBarButton>
                    </Link>
                    <Link to='/'>
                        <SideBarButton>
                            <FaRegUserCircle size="18"/>
                            <span>내 정보 페이지</span>
                        </SideBarButton>
                    </Link>
                    <hr className='bottonHr'/>
                    <SideBarButton>
                        <MdLogout size='18'/>
                        <span>로그아웃</span>
                    </SideBarButton>
                </MainSideBar>
            )}
        </div>
    )
};

export default MainLoginHeader;