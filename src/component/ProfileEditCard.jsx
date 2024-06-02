import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from './Modal';

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
const EditButton= styled.button`
  width: 15%;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  &:hover{
    cursor: pointer;
  }
`


function ProfileEditCard({ id, name, nickname, grade, password }) {
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    nickname: '',
    grade: '',
    password: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/profile', {
          withCredentials: true,
        });
        if (response.status === 200) {
          setUserData(response.data);
        }
      } catch (error) {
        console.error('사용자 정보를 가져오는 중 오류 발생:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put('https://udr2.wild2.duckdns.org/api/profile/edit', userData, {
        withCredentials: true,
      });
      if (response.status === 200) {
        alert('회원정보가 성공적으로 수정되었습니다.');
        navigate('/myprofile');
      }
    } catch (error) {
      console.error('회원정보 수정 중 오류 발생:', error);
      alert('회원정보 수정 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };
  const handlePasswordSave = async () => {
    if (newPassword !== confirmNewPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await axios.put('http://localhost:8080/api/profile/edit', userData, {
        withCredentials: true,
      });
      if (response.status === 200) {
        alert('비밀번호가 성공적으로 수정되었습니다.');
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error('비밀번호 수정 중 오류 발생:', error);
      alert('비밀번호 수정 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <container>
      <MyPageCard>
        <div className='UserInformHeader'>
          마이페이지
        </div>
        <div className='UserInform'>
          <p><span className='info'>학번</span><input className='UserInfo' type='text' maxLength='10' name='id' value={userData.id} /></p>
          <p><span className='info'>이름</span><input className='UserInfo' type='text' name='name' value={userData.name} onChange={handleChange} /></p>
          <p><span className='info'>닉네임</span><input className='UserInfo' type='text' name='nickname' value={userData.nickname} onChange={handleChange} /></p>
          <p><span className='info'>학년</span><input className='UserInfo' type='text' name='grade' value={userData.grade} onChange={handleChange} /></p>
          <p><span className='info'>비밀번호</span><EditButton onClick={() => setIsModalOpen(true)}>비밀번호 수정</EditButton></p>
          {/* <input className='UserInfo' type='password' name='password' value={userData.password} onChange={handleChange} */}
          {/* <p><span className='info'>학번</span><input className='UserInfo' type='text' name='userid' value={response.data.id} onChange={handleChange} readOnly /></p>
        <p><span className='info'>이름</span><input className='UserInfo' type='text' name='username' value={name} onChange={handleChange} /></p>
        <p><span className='info'>닉네임</span><input className='UserInfo' type='text' name='nickname' value={nickname} onChange={handleChange} /></p>
        <p><span className='info'>학년</span><input className='UserInfo' type='text' name='year' value={year} onChange={handleChange} /></p>
        <p><span className='info'>비밀번호</span><input className='UserInfo' type='password' name='password' value={password} onChange={handleChange} /></p> */}
        </div>
        <button onClick={handleSave}>저장</button>
      </MyPageCard>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onSave={handlePasswordSave}
          onChange={(e) => {
            if (e.target.name === 'newPassword') {
              setNewPassword(e.target.value);
            } else if (e.target.name === 'confirmNewPassword') {
              setConfirmNewPassword(e.target.value);
            }
          }}
          newPassword={newPassword}
          confirmNewPassword={confirmNewPassword}
        />
      )}
    </container>
  )
};

export default ProfileEditCard;
