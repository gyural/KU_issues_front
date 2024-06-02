import React, { useState, useEffect } from 'react'
import MainPageHeader from '../../component/MainPageHeader';
import SmallHeader from '../../component/SmallHeader';
import SurveyList from '../survey/SurveyList';
import SurveyRes from './surveyRes';
import SideBar from '../../component/SideBar';
import styled from 'styled-components';

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
  height: 100%;
`;

function SurveyResPage() {
  const [sidebarTop, setSidebarTop] = useState(80);
  const maxSidebarTop = 100;
  const [mode, setMode] = useState('read')
  const [surveyID, setSurveyID] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const targetTop = Math.min(Math.max(80, scrollTop), maxSidebarTop); // Ensure the sidebar stays within bounds
      setSidebarTop(targetTop);

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleContainerClick = (e) => {
    if (e.target.closest('.header-container')) return;
    setIsSearchClicked(false);
  };
  return (
    <Container onClick={handleContainerClick}>
      <SideBarContainer style={{ top: `${sidebarTop}px` }}>
        <SideBar />
      </SideBarContainer>
      <div className="header-container" onClick={(e) => e.stopPropagation()}>
        {isSearchClicked ? (
          <SmallHeader autoFocus />
        ) : (
          <MainPageHeader
            onSearchClick={() => setIsSearchClicked(true)}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
        )}
      </div>
      {(mode === 'read') && (
        <SurveyList setMode={setMode} setSurveyID={setSurveyID} />
      )}
      {(mode === 'write') && (
        <SurveyRes setMode={setMode} surveyID={surveyID} />
      )}
    </Container>
  )
}

export default SurveyResPage