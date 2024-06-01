import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";



const MainSideBar = styled.div`
    width: 15%;
    height: 80%;
    margin-left: 1%;
    text-align: center;
    box-shadow: 1px 0px 1px #bbbbbb;
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
        margin-top: 100%;
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
    
    cursor: pointer;
    & > svg{
        color: #777;
    }
    &:hover{
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
    return (
        <div>
            <MainSideBar>
                <SideBarHeader>
                    <span>Menu</span>
                </SideBarHeader>
                <hr />
                <Link to='/mainpage'>
                    <SideBarButton>
                        <IoHomeOutline size='20'/>
                        <span>메인 페이지</span>
                    </SideBarButton>
                </Link>
                <Link to='/survey'>
                    <SideBarButton>
                        <IoMdCheckboxOutline size='20'/>
                        <span>설문조사</span>
                    </SideBarButton>
                </Link>
                <Link to='/reportpage'>
                    <SideBarButton>
                        <TbReportAnalytics size='20'/>
                        <span>분석 및 보고</span>
                    </SideBarButton>
                </Link>
                <Link to='/myprofile'>
                    <SideBarButton>
                        <FaRegUserCircle size='20'/>
                        <span>내 정보 페이지</span>
                    </SideBarButton>
                </Link>
                <hr className='bottonHr' />
                <Link to='/login'>
                    <SideBarButton>
                        <MdLogout size='20'/>
                        <span>학교 홈페이지</span>
                    </SideBarButton>
                </Link>
                <Link to='/login'>
                    <SideBarButton>
                        <MdLogout size='20'/>
                        <span>로그아웃</span>
                    </SideBarButton>
                </Link>
            </MainSideBar>
        </div>
    )
}

export default SideBar;
