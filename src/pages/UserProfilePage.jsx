import React, { useState, useEffect } from 'react';
import UserProfile from '../component/UserProfile';
import getUserProfile from '../APIs/api';
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

function UserProfilePage() {
  const isLoggedIn = true; // isLoggedIn을 true로 설정하여 테스트
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await getUserProfile();
        setUserProfile(profile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };


    if (isLoggedIn) {
      fetchUserProfile();
      console.log('로그인');
    }

    
  }, []);

  if (!userProfile) {
    return <div>불러오는중...</div>; // 로딩 상태 표시
  }

  return (
    <div>
      <PageHeader />
      <UserProfile
        userid={userProfile.id}
        username={userProfile.name}
        nickname={userProfile.nickname}
        year={userProfile.grade}
        password={userProfile.password}
      />
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
    </div>
  );
}

export default UserProfilePage;
