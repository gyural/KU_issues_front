import React from 'react'
import MainLoginHeader from '../component/UserHeader';
import styled from 'styled-components';


const MyPageCard = styled.div`
  width: 50%;
  margin: 5% auto;
  margin-bottom: 20px;


  border: none;
  box-shadow: 0px 0px 1px #777777, -1px 1px 3px #777777;
  border-radius: 10px;
  
  position: relative;


  & > div.UserInformHeader{
    margin: 0;
    padding: 15px 5px;
    margin-top: 10px;
    margin-left: 10px;

    color: #bbbbbb;
    font-size: 25px;
    font-weight: 400;
  }

  & > div.UserInform{
    width: 95%;
    margin: 0 auto;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & > div.UserInform > p{
    margin: 0px;
    padding: 0px;

    width: 100%;
    border: 1px solid #eeeeee;

    display: flex;
    align-items: center;

    & > span.info{
      width: 30%;
      height: 50px;
      padding: 0px;
      padding-left: 10px;
      font-size: 15px;
      background-color: #F7F9FB;
      display: inline-block;
      color: #A1A7B8;
      display: flex;
      align-items: center; /* 수직 정렬 */
    }
    & > span.UserInfo{
      width: 70%;
      height: 50px;
      padding: 0px;
      padding-left: 10px;
      font-size: 15px;
      font-weight: 400;
      display: inline-block;
      display: flex;
      align-items: center; /* 수직 정렬 */
    }
  }
`

function UserProfile({ id, name, nickname, year, password}) {
  return (
    <container>
      <MainLoginHeader />
      <MyPageCard>
        <div className='UserInformHeader'>
          마이페이지
        </div>
        <div className='UserInform'>
          <p><span className='info'>학번</span><span className='UserInfo'>{id}</span></p>
          <p><span className='info'>닉네임</span><span className='UserInfo'>{nickname}</span></p>
          <p><span className='info'>학년</span><span className='UserInfo'>{year}</span></p>
          <p><span className='info'>비밀번호</span><span className='UserInfo'>{password}</span></p>
        </div>
        <div>회원정보 수정</div>
        <div>회원 탈퇴</div>
      </MyPageCard>
    </container>
  )
};

export default UserProfile;
