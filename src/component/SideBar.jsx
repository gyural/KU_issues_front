import React from 'react';
import crimson from '../assets/crimson2positive.gif';
import styled from 'styled-components';
import { IoHomeOutline } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

function SideBar() {
    const GoMainPage = () => {
        window.location.href = '/';
      };
      const GoUserProfile = () => {
        window.location.href = '/userprofile';
      };
    return (
        <MainSideBar>
            <SideBarHeader>
                <img src={crimson} alt='' style={{width: '30.05px', height: '38px'}} />
                <span>Menu</span>
            </SideBarHeader>
            <hr />
            <SideBarButton type="button" onClick={GoMainPage}>
                <IoHomeOutline size="18" />
                <span>메인 페이지</span>
            </SideBarButton>
            <SideBarButton>
                <IoMdCheckboxOutline size="18" />
                <span>설문조사</span>
            </SideBarButton>
            <SideBarButton>
                <TbReportAnalytics size="18" />
                <span>분석 및 보고</span>
            </SideBarButton>
            <SideBarButton type="button" onClick={GoUserProfile}>
                <FaRegUserCircle size="18" />
                <span>내 정보 페이지</span>
            </SideBarButton>
            <hr className='bottomHr' />
            <SideBarButton>
                <MdLogout size="18" />
                <span>로그아웃</span>
            </SideBarButton>
        </MainSideBar>
    );
}

export default SideBar;

const MainSideBar = styled.div`
    width: 15%;
    height: 100%; 
    text-align: center;
    box-shadow: 1px 0px 1px #bbbbbb;
    position: fixed; 
    
    & > hr {
        margin-top: 0;
        padding: 0;
        width: 85%;
        border-width: 1px 0 0 0;
        border-color: #eeeeee;
    }
    & > hr.bottomHr {
        margin-top: 175%;
    }
`;

const SideBarHeader = styled.header`
    margin: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    & > span, img {
        display: inline-block;
    }
    & > img {
        margin: 14px;
        margin-left: 20px;
    }
    & > span {
        font-size: 20px;
        font-weight: 550;
    }
`;

const SideBarButton = styled.button`
    margin: 0 auto;
    padding: 10px;
    width: 80%;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    display: flex;
    cursor: pointer;
    &:hover {
        background-color: #000;
        color: #fff;
    }
    & > span {
        margin-left: 15px;
        display: inline-block;
        font-size: 15px;
        font-weight: 550;
    }
`;