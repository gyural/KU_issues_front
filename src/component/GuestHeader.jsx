import React, {useState} from "react";
import crimson from '../assets/crimson2positive.gif';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { FiMenu } from "react-icons/fi";


const MainPageHeader = styled.header`
    margin: 0;
    padding: 0;

    height: 96px;
    box-shadow: 0 0 10px 0 #777777;

    position: relative;
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
function MainHeader() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return(
        <div>
            <MainPageHeader>
                <SidebarToggleButton onClick={toggleSidebar}>
                    <FiMenu size='30'/>
                </SidebarToggleButton>
                <Signature>
                    <img src={crimson} alt="" style={{width: '65px', height: '82.21px'}}></img>
                    <HR />
                    <Logo>고려대 신문고</Logo>
                </Signature>
                <Link to='/login'>
                    <HeaderLoginButton>
                        로그인
                    </HeaderLoginButton>
                </Link>
            </MainPageHeader>
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
                    <Link to='/login'>
                        <SideBarButton>
                            <MdLogin size='18'/>
                            <span>로그인</span>
                        </SideBarButton>
                    </Link>
                </MainSideBar>
            )}
        </div>
    )
};

export default MainHeader;