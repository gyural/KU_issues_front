import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import {getSurveyOne} from '../../APIs/surveyAPI'

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
function SurveyRes() {
  const handlefocusQuestion = (val)=>{
    setFocus(focus + val)
    setFocusAnswer(null)
  }
  const handleOptionClick = (idx)=>{
    setFocusAnswer(idx)
  }
  const handleSubmit = ()=>{

  }
  useEffect(() => {
    const fetchData = async () => {
      const survey = await getSurveyOne(11);
      if (survey) {
        setSurveyTitle(survey.survey.title)
        setQuestionList(survey.questionList)
      }
    };
    fetchData();
  }, []);
  const [focusAnswer, setFocusAnswer] = useState()
  const [focus, setFocus] = useState(0)
  const [surveyTitle, setSurveyTitle] = useState('')
  const [questionList, setQuestionList] = useState([])
  
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
                width: '30px', height: '30px', color: 'black'}} />
              
            )}
            <Icon icon="material-symbols:close"  style={{color: 'black',
              width: '30px', height: '30px'}} />
          </Navigation>
          <span 
            style={{fontSize: '34px', textAlign: 'left',
                  marginBottom: '32px', fontWeight: 700}}>
              {questionList[focus]?.question}
          </span>
          <Options>
            {questionList[focus]?.answerList.map((answer, idx)=>{
              {console.log(answer)}
              return (<Option
                        key={idx}
                        selected={focusAnswer === idx}
                        onClick={() => handleOptionClick(idx)}
                      >{answer}</Option>)
            })}
          </Options>
          <div style={{width:'90%', height: '1px', backgroundColor: '#ccc', marginBottom: '10px'}}></div>
          {focus + 1 < questionList.length && (
              <NxtBtn onClick={()=>{handlefocusQuestion(1)}}>Next Question</NxtBtn>
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