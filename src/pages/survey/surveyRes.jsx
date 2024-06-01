import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import {getSurveyOne, answerSurvey} from '../../APIs/surveyAPI'
import { useNavigate } from 'react-router-dom';

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
    justify-content: space-between;
    margin-bottom: 40px;
`
const Options = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 44px;
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

const Option = styled.div`
  width: 50%;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  border-radius: 4px;
  background: ${({ selected }) =>
    selected
      ? 'linear-gradient(to right, #27AE60 0%, #56A82B 46%, #009045 100%)'
      : '#c7c7c7'};
  background-size: 200% 100%;
  cursor: pointer;
  padding: 8px;
  &:hover {
    background: ${({ selected }) =>
      selected
        ? 'linear-gradient(to right, #27AE60 0%, #56A82B 46%, #009045 100%)'
        : 'linear-gradient(to right, #b6b6b6 0%, #c3c3c3 46%, #c3c3c3 100%)'};
  }
`;
function SurveyRes({setMode, surveyID}) {

  const handlefocusQuestion = (val)=>{
    setFocus(focus + val)
    setFocusAnswer(null)
  }
  const handleOptionClick = (idx)=>{
    setFocusAnswer(idx)
  }
  const handleNxt = () =>{
    setAnswerList([...answerList, {answer: questionList[focus]['answerList'][focusAnswer]}])
    handlefocusQuestion(+1)
  }
  const handleSubmit = async()=>{
    const newAnswer = [[...answerList, {answer: questionList[focus]['answerList'][focusAnswer]}]]

    const res = await answerSurvey(surveyID, '2019270617', answerList)
    //successPage로 라우팅
    
    navigate('/answerResult', {state:res})
    
  }
  useEffect(() => {
    console.log('발동')
    console.log(surveyID)
    const fetchData = async () => {
      const survey = await getSurveyOne(surveyID);
      console.log(survey)
      // const survey = await getSurveyOne(surveyID);
      if (survey) {
        setSurveyTitle(survey.title)
        setQuestionList(survey.questionList)
      }
    };
    fetchData();
  }, []);

  const [focusAnswer, setFocusAnswer] = useState()
  const [focus, setFocus] = useState(0)
  const [surveyTitle, setSurveyTitle] = useState('')
  const [questionList, setQuestionList] = useState([])
  const [answerList, setAnswerList] = useState([])

  const navigate = useNavigate();
  return (
    <Container>
      <PostContainer>
        <PostWrapper>
          <Navigation>
            {focus===0 && (
              <Icon onClick={()=>{}} icon="material-symbols:arrow-back-ios"  style={{
                width: '30px', height: '30px', color: 'black', opacity: 0}} />
            )}
            {focus >0 &&(
              <Icon onClick={()=>{handlefocusQuestion(-1)}} icon="material-symbols:arrow-back-ios"  style={{
                width: '30px', height: '30px', color: 'black', cursor: 'pointer'}} />
              
            )}
            <Icon onClick={()=>{setMode("read")}} icon="material-symbols:close"  style={{color: 'black',
              width: '30px', height: '30px', cursor: 'pointer'}} />
          </Navigation>
          <span 
            style={{fontSize: '34px', textAlign: 'left',
                  marginBottom: '32px', fontWeight: 700}}>
              {questionList[focus]?.question}
          </span>
          <Options>
            {questionList[focus]?.answerList.map((answer, idx)=>{
              return (<Option
                        key={idx}
                        selected={focusAnswer === idx}
                        onClick={() => handleOptionClick(idx)}
                      >{answer}</Option>)
            })}
          </Options>
          <div style={{width:'90%', height: '1px', backgroundColor: '#ccc', marginBottom: '10px'}}></div>
          {focus + 1 < questionList.length && (
              <NxtBtn onClick={handleNxt}>Next Question</NxtBtn>
            )}
            {focus + 1 === questionList.length && (
              <NxtBtn onClick={handleSubmit}>Submit</NxtBtn>
            )}
        </PostWrapper>

      </PostContainer>

    </Container>
  )
}

export default SurveyRes