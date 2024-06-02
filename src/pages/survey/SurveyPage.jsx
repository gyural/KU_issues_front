import React,{useState, useEffect} from 'react'
import Survey from '../../component/surveycreate'
import PageHeader from '../../component/PageHeader';
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

function SurveyPage() {
  const [sidebarTop, setSidebarTop] = useState(80);
  const maxSidebarTop = 100;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const targetTop = Math.min(Math.max(80, scrollTop), maxSidebarTop); // Ensure the sidebar stays within bounds
      setSidebarTop(targetTop);

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <SideBarContainer style={{ top: `${sidebarTop}px` }}>
        <SideBar />
      </SideBarContainer>
      <PageHeader />
      <Survey />
    </div>
  )
}

export default SurveyPage;
