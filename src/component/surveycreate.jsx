import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ObjectiveQuestion from './ObjectiveQuestion';
import SubjectiveQuestion from './SubjectiveQuestion';
import { Icon } from '@iconify/react';
import { createSurvey } from '../APIs/surveyAPI';
import { IoMdCheckboxOutline } from "react-icons/io";

const Container = styled.div`
    width: 100%;
    padding: 44px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`
const SurveyHeader = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TitleInput = styled.input`
  width: 98%;
  height: 66px;
  border: 0px;
  padding: 4px 0;
  border-bottom: 0.3px solid transparent; /* 투명한 하단 테두리 */
  
  font-size: 32px;
  margin-bottom: 38px;
  font-weight: 700;
  transition: border-bottom 0.3s ease; /* 트랜지션 효과 추가 */
  outline: none;
  
  &:focus {
    border-bottom-color: black; /* 포커스되면 테두리 색상을 변경하여 나타나도록 설정 */
    border-bottom-width: 2px; /* 포커스되면 border-bottom의 너비를 늘립니다. */
  }
`;
const SurveyContainer = styled.div`
    margin-top: 20px;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 5px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  &:focus {
    outline: none;
  }
  & > svg {
    width: 24px;
    height: 24px;
  }
`;

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
`;

const PostWrapper = styled.div`
    margin: 0 auto;
    padding: 12px 12px;
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
`

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-family: 'Arial', sans-serif;
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

const RadioLabel = styled.label`
  font-size: 16px;
  cursor: pointer;
`;

const Submit = styled.button`
    width: 200px;
    font-size: 24px;
    height: 44px;
    font-weight: 700;
    background-color: #ccc;
    border: none;
    
`

function Survey() {
    
    const handleCount = (increment) => {
        if (!surveyType) {
            return;
        }
        setNumQuestions((prevCount) => {
            const newCount = prevCount + increment;
            if (newCount < 1 || newCount > 3) {
                return prevCount;
            }
            const newQuestions = [...questions];
            if (increment > 0) {
                newQuestions.push({ question: '', answerList: [], questionType: surveyType});
            } else {
                newQuestions.pop();
            }
            setQuestions(newQuestions);
            return newCount;
        });
    };
    
    const handleSurveyTypeChange = (event) => {
        setSurveyType(event.target.value);
        setNumQuestions(1);
        setQuestions([{ question: '', answerList: [], questionType: surveyType }]);
    };
    
    const handleQuestionChange = (index, question) => {
        const newQuestions = [...questions];
        newQuestions[index].question = question;
        setQuestions(newQuestions);
    };
    
    const handleOptionChange = (questionIndex, optionIndex, text) => {
        const newQuestions = [...questions];
        if (!newQuestions[questionIndex].question) {
            newQuestions[questionIndex].question = [];
        }
        newQuestions[questionIndex].answerList[optionIndex] = text;
        setQuestions(newQuestions);
    };
    const handleSubmit = async () => {
        await createSurvey(tempUser, surveyTitle, surveyDescription, questions)
    };

    const [numQuestions, setNumQuestions] = useState(1);
    const [surveyType, setSurveyType] = useState('');
    const [surveyTitle, setSurveyTitle] = useState(''); // 설문 주제 상태 추가
    const [questions, setQuestions] = useState([{ question: '', answerList: [] , questionType: "1"}]);
    const [surveyDescription, setSurveyDescription] = useState('ㅇ')
    const tempUser = "2019270617"
    
    return (
        <Container>
            <div style={{textAlign:'center', fontSize: '50px', fontWeight: '700', marginBottom: '14px', display:'flex', alignItems:'center', justifyContent:'center',
            marginBottom:'3%'
             }}><IoMdCheckboxOutline size='80' />설문 생성</div>
            <PostContainer>
                <PostWrapper>
                    <SurveyHeader>
                        <TitleInput 
                            type='text' 
                            placeholder='설문 제목 입력...' 
                            id='asd' 
                            value={surveyTitle} 
                            onChange={(e) => setSurveyTitle(e.target.value)} // 설문 주제 상태 업데이트
                        />
                        <div style={{display:'flex', width: '100%'}}>
                        <RadioContainer>
                            <RadioInput
                            type="radio"
                            name="example"
                            value="1"
                            onChange={handleSurveyTypeChange}
                            />
                            <RadioLabel>객관식</RadioLabel>
                        </RadioContainer>

                        <RadioContainer>
                            <RadioInput
                            type="radio"
                            name="example"
                            value="2"
                            onChange={handleSurveyTypeChange}
                            />
                            <RadioLabel>주관식</RadioLabel>
                        </RadioContainer>
                            
                        <div style={{ flexGrow: 1, textAlign: 'right', display: 'flex',  justifyContent: 'flex-end'}}>
                            <span style={{fontSize: '18px'}}>질문 개수:</span>
                            <Icon icon="flowbite:circle-minus-solid" onClick={() => handleCount(-1)} 
                                style={{width: '24px', height:'24px', marginLeft: '4px', marginRight: '8px', color: 'black'}} />
                            <span>{numQuestions}</span>
                            <Icon icon="flowbite:circle-plus-solid" onClick={() => handleCount(1)} 
                            style={{width: '24px', height:'24px', marginLeft: '8px', color: 'black'}} />
                        </div>

                        </div>
                    </SurveyHeader>
                </PostWrapper>
            </PostContainer>

            <PostContainer>
                <PostWrapper>
                    <SurveyContainer>
                        {surveyType === '1' &&
                            questions.map((question, index) => (
                                <ObjectiveQuestion
                                    key={index}
                                    questionNumber={index + 1}
                                    questionText={question.question}
                                    options={question.answerList}
                                    onQuestionChange={handleQuestionChange}
                                    onOptionChange={handleOptionChange}
                                />
                            ))
                        }

                        {surveyType === '2' &&
                            questions.map((question, index) => (
                                <SubjectiveQuestion
                                    key={index}
                                    questionNumber={index + 1}
                                    questionText={question.question}
                                    onQuestionChange={handleQuestionChange}
                                />
                            ))
                        }
                    </SurveyContainer>
                </PostWrapper>

            </PostContainer>
            <Submit onClick={handleSubmit}>설문 생성</Submit>
        </Container>
    );
}

export default Survey;
