import React from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';


const MyPageCard = styled.div`
  width: 50%;
  margin: 5% auto;
  border: none;
  box-shadow: 0px 0px 1px #777777, -1px 1px 3px #777777;
  border-radius: 10px;
  
  position: relative;
  text-align: center;


  & > div.UserInformHeader{
    margin: 30px;
    padding: 15px 5px;
    

    color: #bbbbbb;
    font-size: 25px;
    font-weight: 400;

    

    & > a{
      text-decoration: none;
      color: inherit;
      font-size: 15px;

      position: absolute;
      right: 3%;
      top: 3%;

      display: flex;
      align-items: center;
    }
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
      align-items: center;
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
      align-items: center;
    }
  }

  & > button{
    width: 30%;
    height: 50px;
    margin: 10%;
    font-size: 15px;
    border-radius: 10px;
    background-color: black;
    color: white;
    cursor: pointer;
  }
`


function UserProfile({ userid, username, nickname, year, password}) {
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
  
    try {
      const response = await axios.delete('http://localhost:8080/api/profile', {
        withCredentials: true,
      });
      if (response.status === 200) {
        alert('회원탈퇴가 성공적으로 처리되었습니다.');
        navigate('/')
      }
    } catch (error) {
      console.error('회원탈퇴 중 오류 발생:', error);
      alert('회원탈퇴 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <container>
      <MyPageCard>
        <div className='UserInformHeader'>
          마이페이지
          <Link to='/profileedit'>회원정보 수정<IoIosArrowForward /></Link>
        </div>
        <div>

        </div>
        <div className='UserInform'>
          <p><span className='info'>학번</span><span className='UserInfo'>{userid}</span></p>
          <p><span className='info'>이름</span><span className='UserInfo'>{username}</span></p>
          <p><span className='info'>닉네임</span><span className='UserInfo'>{nickname}</span></p>
          <p><span className='info'>학년</span><span className='UserInfo'>{year}</span></p>
          <p><span className='info'>비밀번호</span><span className='UserInfo'></span></p>
        </div>
        <button className='DeletedButton' onClick={handleDeleteAccount}>회원탈퇴</button>
      </MyPageCard>
    </container>
  )
};

export default UserProfile;
