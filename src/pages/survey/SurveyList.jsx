import React, { useEffect, useState } from 'react'
import { getAllSurvey } from '../../APIs/surveyAPI';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    padding: 44px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

const PostContainer = styled.div`
  position: relative;
  width: 740px;
  height: auto;
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
    padding: 24px 12px;
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
`

const NxtBtn = styled.button`
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
  background-size: 200% 100%;
  animation: gradientMove 3s linear infinite;

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
`
function SurveyList({setSurveyID, setMode}) {
  const navigate = useNavigate()
  const handleWrite = (id)=>{
    setSurveyID(id)
    setMode('write')

  }

  const [surveyList, setSurveyList] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const surveyList = await getAllSurvey();
      if (surveyList) {
        setSurveyList(surveyList);
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      {surveyList.map((survey)=>{
        return(<PostContainer>
          <PostWrapper>
            <span style={{fontSize: '34px', marginBottom: '32px', fontWeight: 700}}>{survey.title}</span>
            <span style={{marginBottom: '22px', color: '#181818'}}>{survey.description}</span>
            <div style={{width:'90%', height: '1px', backgroundColor: '#ccc', marginBottom: '10px'}}></div>
            <NxtBtn onClick={()=>{handleWrite(Number(survey.id))}}>답변하러 가기</NxtBtn>
          </PostWrapper>
        </PostContainer>)
      })}
    </Container>
  )
}

export default SurveyList