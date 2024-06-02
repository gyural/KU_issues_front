import React, { useState, useEffect } from 'react'
import PageHeader from '../../component/PageHeader';
import Reportdetail from './reportdetail';
import { getAllSurvey } from '../../APIs/surveyAPI';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import SideBar from '../../component/SideBar';
import { TbReportAnalytics } from "react-icons/tb";


const SideBarContainer = styled.div`
    width: 15%;
    position: fixed;
    top: 80px;
    left: 0;
    height: calc(100% - 80px);
    z-index: 1000;  
    transition: top 0.3s ease;
`;

const Container = styled.div`
    width: 100%;
    padding: 44px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

const PostContainer = styled.div`
  z-index: 100001;
  position: relative;
  width: 740px;
  height: auto;
  margin: 0 auto;
  border: 1px solid #ccc;
  outline: none;
  box-shadow: 0px 0px 1px #777777, -1px 1px 3px #777777;
  border-radius: 20px;
  margin-bottom: 32px;
  background: linear-gradient(
        to right,
        #fff 0%,
        #fff 31%,
        #3DAB5D 55%,
        #fff 84%
        #fff 100%
    );
`;

const PostWrapper = styled.div`
    margin: 0 auto;
    padding: 24px 12px;
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
`

const NxtBtn = styled.button`
  width: 120px;
  padding: 12px;
  border: none;
  font-weight: 700;
  border-radius: 12px;
  color: #fff;
  background: linear-gradient(
        to right,
        #27AE60 0%,
        #56A82B 46%,
        #009045 100%
    );
  cursor: pointer;
  background-size: 200% 100%;
  animation: gradientMove 3s linear infinite;

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

function Reportpage() {
  const [sidebarTop, setSidebarTop] = useState(80);
  const maxSidebarTop = 100;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const targetTop = Math.min(Math.max(80, scrollTop), maxSidebarTop); // Ensure the sidebar stays within bounds
      setSidebarTop(targetTop);

    };
    const fetchData = async () => {
      const surveyList = await getAllSurvey();
      if (surveyList) {
        setSurveyList(surveyList);
      }
    };

    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handelDetail = (id) => {
    setSurveyID(id)
    setMode('detail')
  }
  const [mode, setMode] = useState('list')
  const [surveyID, setSurveyID] = useState(null)
  const [surveyList, setSurveyList] = useState([])
  return (
    <>
      <PageHeader />
      <SideBarContainer style={{ top: `${sidebarTop}px` }}>
        <SideBar />
      </SideBarContainer>
        <div style={{
          fontSize: '50px', fontWeight: '700'
          , width: '30%', margin: '34px auto 10px', textAlign: 'center',
          display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
          marginBottom: '3%'
        }}><TbReportAnalytics size='80' />분석및 보고</div>
      <>
        {mode === 'list' && (
          <>

            {surveyList.map((survey) => {
              return (
                <PostContainer>
                  <PostWrapper>
                    <span style={{ fontSize: '34px', marginBottom: '32px', fontWeight: 700 }}>{survey.title}</span>
                    <span style={{ marginBottom: '22px', color: '#181818' }}>{survey.description}</span>
                    <div style={{ width: '90%', height: '1px', backgroundColor: '#ccc', marginBottom: '10px' }}></div>
                    <NxtBtn onClick={() => { handelDetail(Number(survey.id)) }}>결과 보기</NxtBtn>
                  </PostWrapper>
                </PostContainer>)
            })}

          </>
        )}

        {mode === 'detail' && (<Reportdetail surveyID={surveyID} setMode={setMode}></Reportdetail>)}
      </>

    </>
  )
}

export default Reportpage