import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '@iconify/react';



const Container = styled.div`
  width: 100%;
  padding: 140px 0;
  display: flex;
  justify-content: center;
`
const PostContainer = styled.div`
  position: relative;
  width: 740px;
  height: 500px;
  margin: 0 auto;
  border: 1px solid #ccc;
  outline: none;
  box-shadow: 0px 0px 1px #777777, -1px 1px 3px #777777;
  border-radius: 20px;
  margin-bottom: 32px;
  background: linear-gradient(
        to right,
        #fff 0%,
        #fff 31%,
        #3DAB5D 55%,
        #fff 84%
        #fff 100%
    );
`;

const PostWrapper = styled.div`
    margin: 0 auto;
    padding: 56px 12px;
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
`
const Navigation = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 40px;
`
const FailImage = styled.div`
  width: 58px;
  height: 58px;
  background-position: center;
  background-size: cover; /* Add this line to set background-size to cover */
  background-image: url(${require('../../assets/cancel 1.png')});
  margin-bottom: 20px;
  `
const SuccessImage = styled.div`
  width: 58px;
  height: 58px;
  background-position: center;
  background-size: cover; /* Add this line to set background-size to cover */
  background-image: url(${require('../../assets/60-Checked.png')});
  margin-bottom: 20px;
`
const Btn = styled.button`
  width: 120px;
  padding: 12px;
  border: none;
  font-weight: 700;
  border-radius: 12px;
  color: #fff;
  background: linear-gradient(
        to right,
        #27AE60 0%,
        #56A82B 46%,
        #009045 100%
    );
  cursor: pointer;
  background-size: 200% 100%;
  animation: gradientMove 2s linear infinite, bounce 1.0s infinite ease;

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(2px);
    }
  }
`
function AnswerResult() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  return (
    <>

    <Container>
      <PostContainer>
        <PostWrapper>
          <Navigation>
            <Icon onClick={()=>{}} icon="material-symbols:close"  style={{color: 'black',
              width: '30px', height: '30px', cursor: 'pointer'}} />
          </Navigation>
              {location.state === null ? (
                // failcode
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
                  <FailImage></FailImage>
                  <div style={{fontSize: '38px', fontWeight: '600', marginBottom: '8px'}}>죄송합니다.😭</div>
                  <div style={{fontSize: '18px', color:'#b0b0b0', marginBottom:'18px'}}>설문작성에 실패했습니다.... 다시 시도해주세요</div>
                  <Btn onClick={()=>{navigate('/mainpage')}}>go to home</Btn>
                </div>
              ) : (
                // successcode
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <SuccessImage></SuccessImage>
                  <div  style={{fontSize: '38px', fontWeight: '600', marginBottom: '8px'}}>수고하셨습니다..😄</div>
                  <div style={{fontSize: '18px', color:'#b0b0b0', marginBottom:'18px'}}>설문작성에 성고했습니다. 소중한 의견 감사드립니다.</div>
                  <Btn onClick={()=>{navigate('/mainpage')}}>go to home</Btn>

                </div>
              )}
        </PostWrapper>
      </PostContainer>

    </Container>
    </>
  )
}

export default AnswerResult