import React, {useState} from 'react'
import MainLoginHeader from '../component/UserHeader'
import UserProfile from '../component/UserProfile';
import MainHeader from '../component/GuestHeader';


function UserProfilePage() {
    const [isLoggedIn] = useState(false);

    return(
        <div>
            {isLoggedIn ? <MainLoginHeader /> : <MainHeader />}
                <UserProfile
                    userid={2019380415}
                    username={'김선엽'}
                    nickname={'shipleaf'}
                    year={4}
                    password={1234}/>
        </div>
  )
}

export default UserProfilePage;
