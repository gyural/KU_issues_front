import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";

const Logo = styled.div`
    width: 15%;
    height: 40px;
    font-size: 20px;
    margin-left: -5%;
    background-color: #0d6efd;
    color: #fff;
    font-weight: 600;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5%;
`

const MainSideBar = styled.div`
    width: 100%;
    height: 80%;
    text-align: center;
    box-shadow: 1px 1px 1px #bbbbbb, -1px -1px 1px #bbbbbb;
    position: absolute;
    border-radius: 10px;
    
    & > hr{
        margin-top: 0;
        padding: 0;
        width: 85%;   
        border-width: 1px 0 0 0;
        border-color: #eeeeee;
    }
    & > hr.bottonHr{
        margin-top: 80%;
    }
    & > a{
        text-decoration: none;
        color: inherit;
    }
`
const SideBarHeader = styled.header`
    margin: 5px;
    padding: 20px;
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
    width: 90%;
    background-color: #fff;
    color: #777;
    border: none;
    border-radius: 10px;
    display: flex;
    margin-bottom: 3%;
    
    cursor: pointer;
    & > svg{
        color: #777;
    }
    &:hover, &.active {
        background-color: #0d6efd;
        color: #fff;
        & > svg{
            color: #fff;
        }
    }
    & > span{
        margin-left: 15px;
        display: inline-block;

        font-size: 15px;
        font-weight: 550;
    }
`

function SideBar() {
    const location = useLocation();

    return (
        <MainSideBar>
            <SideBarHeader>
                <Logo>KU</Logo>
                <span>Menu</span>
            </SideBarHeader>
            <hr />
            <Link to='/mainpage'>
                <SideBarButton className={location.pathname === '/mainpage' ? 'active' : ''}>
                    <IoHomeOutline size='20' />
                    <span>메인 페이지</span>
                </SideBarButton>
            </Link>
            <Link to='/surveyRes'>
                <SideBarButton className={location.pathname === '/surveyRes' ? 'active' : ''}>
                    <IoMdCheckboxOutline size='20' />
                    <span>설문조사</span>
                </SideBarButton>
            </Link>
            <Link to='/reportdetail'>
                <SideBarButton className={location.pathname === '/reportdetail' ? 'active' : ''}>
                    <TbReportAnalytics size='20' />
                    <span>분석 및 보고</span>
                </SideBarButton>
            </Link>
            <Link to='/myprofile'>
                <SideBarButton className={(location.pathname === '/myprofile' || location.pathname === '/profileedit') ? 'active' : ''}>
                    <FaRegUserCircle size='20' />
                    <span>내 정보 페이지</span>
                </SideBarButton>
            </Link>
            <Link to='https://portal.korea.ac.kr/front/Intro.kpd'>
                <SideBarButton>
                    <IoSchoolSharp size='20' />
                    <span>학교 홈페이지</span>
                </SideBarButton>
            </Link>
            <hr className='bottonHr' />
            <Link to='/'>
                <SideBarButton className={location.pathname === '/' ? 'active' : ''}>
                    <MdLogout size='20' />
                    <span>로그아웃</span>
                </SideBarButton>
            </Link>
        </MainSideBar>
    )
}

export default SideBar;
