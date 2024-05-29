import React from 'react'
import ProfileEditCard from '../component/ProfileEditCard';
import MainLoginHeader from '../component/UserHeader';

function ProfileEditPage() {
  return (
    <div>
      <MainLoginHeader />
      <ProfileEditCard 
      id={20000000}
      name={'김선엽'}
      nickname={'shipleaf'}
      year={4}
      password={123}
      />
    </div>
  )
}

export default ProfileEditPage;
