import React from 'react'
import ProfileEditCard from '../component/ProfileEditCard';
import PageHeader from '../component/PageHeader';
import SideBar from '../component/SideBar';
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

function ProfileEditPage() {
  return (
    <div>
      <PageHeader />
      <ProfileEditCard />
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
    </div>
  )
}

export default ProfileEditPage;
