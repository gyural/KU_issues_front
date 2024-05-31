import React, { useState, useEffect } from 'react';
import MainLoginHeader from '../component/UserHeader';
import UserProfile from '../component/UserProfile';
import MainHeader from '../component/GuestHeader';
import getUserProfile from '../APIs/api';

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
      console.log('로그인')
    }
  }, []);

  if (!userProfile) {
    return <div>불러오는중...</div>; // 로딩 상태 표시
  }

  return (
    <div>
      {isLoggedIn ? <MainLoginHeader /> : <MainHeader />}
      <UserProfile
        userid={userProfile.id}
        username={userProfile.name}
        nickname={userProfile.nickname}
        year={userProfile.grade}
        password={userProfile.password}
      />
    </div>
  );
}

export default UserProfilePage;
