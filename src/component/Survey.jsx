import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ObjectiveQuestion from './ObjectiveQuestion';
import SubjectiveQuestion from './SubjectiveQuestion';
import { Icon } from '@iconify/react';

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
    const [numQuestions, setNumQuestions] = useState(1);
    const [surveyType, setSurveyType] = useState('');
    const [surveyTitle, setSurveyTitle] = useState(''); // 설문 주제 상태 추가
    const [questions, setQuestions] = useState([{ text: '', options: [] }]);

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
                newQuestions.push({ text: '', options: [] });
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
        setQuestions([{ text: '', options: [] }]);
    };

    const handleQuestionChange = (index, text) => {
        const newQuestions = [...questions];
        newQuestions[index].text = text;
        setQuestions(newQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, text) => {
        const newQuestions = [...questions];
        if (!newQuestions[questionIndex].options) {
            newQuestions[questionIndex].options = [];
        }
        newQuestions[questionIndex].options[optionIndex] = text;
        setQuestions(newQuestions);
    };

    const handleSubmit = async () => {
        try {
            const surveyData = {
                title: surveyTitle,
                questions: questions
            };
            const response = await axios.post('/api/survey', surveyData);
            if (response.status === 200) {
                alert('설문조사가 성공적으로 제출되었습니다.');
            }
        } catch (error) {
            console.error('설문조사 제출 중 오류 발생:', error);
            alert('설문조사 제출 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <Container>
            <div style={{textAlign:'center', fontSize: '24px', fontWeight: '700', marginBottom: '14px'}}>설문 생성</div>
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
                            value="objective"
                            onChange={handleSurveyTypeChange}
                            />
                            <RadioLabel>객관식</RadioLabel>
                        </RadioContainer>

                        <RadioContainer>
                            <RadioInput
                            type="radio"
                            name="example"
                            value="subjective"
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
                        {surveyType === 'objective' &&
                            questions.map((question, index) => (
                                <ObjectiveQuestion
                                    key={index}
                                    questionNumber={index + 1}
                                    questionText={question.text}
                                    options={question.options}
                                    onQuestionChange={handleQuestionChange}
                                    onOptionChange={handleOptionChange}
                                />
                            ))
                        }

                        {surveyType === 'subjective' &&
                            questions.map((question, index) => (
                                <SubjectiveQuestion
                                    key={index}
                                    questionNumber={index + 1}
                                    questionText={question.text}
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
