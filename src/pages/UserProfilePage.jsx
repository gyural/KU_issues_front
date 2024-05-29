import React, {useState, useEffect} from 'react'
import MainLoginHeader from '../component/UserHeader'
import UserProfile from '../component/UserProfile';
import MainHeader from '../component/GuestHeader';
import getUserProfile from '../APIs/api';

function UserProfilePage() {
    const [isLoggedIn] = useState(false);
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
          try {
            const userId = localStorage.getItem('userId');
            const profile = await getUserProfile(userId);
            setUserProfile(profile);
          } catch (error) {
            console.error('Error fetching user profile:', error);
          }
        };
    
        if (isLoggedIn) {
          fetchUserProfile();
        }
      }, [isLoggedIn]);
    
      if (!userProfile) {
        return <div>불러오는중...</div>; // 로딩 상태 표시
      }
    
    return(
        <div>
            {isLoggedIn ? <MainLoginHeader /> : <MainHeader />}
                <UserProfile
                    userid={userProfile.userid}
                    username={userProfile.username}
                    nickname={userProfile.nickname}
                    year={userProfile.year}
                    password={userProfile.password}
                />
        </div>
  )
}

export default UserProfilePage;
