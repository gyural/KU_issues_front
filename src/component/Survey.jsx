import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ObjectiveQuestion from './ObjectiveQuestion';
import SubjectiveQuestion from './SubjectiveQuestion';

const SurveyHeader = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SurveyContainer = styled.div`
    margin-top: 20px;
`;

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
        <div>
            <SurveyHeader>
                <input 
                    type='text' 
                    placeholder='설문 주제 입력...' 
                    id='asd' 
                    value={surveyTitle} 
                    onChange={(e) => setSurveyTitle(e.target.value)} // 설문 주제 상태 업데이트
                />
                <div>
                    <input 
                        type="radio" 
                        id="objective" 
                        name="surveytype" 
                        value="objective"
                        onChange={handleSurveyTypeChange}
                    />
                    <label htmlFor="objective">객관식</label>
                    <input 
                        type="radio" 
                        id="subjective" 
                        name="surveytype" 
                        value="subjective" 
                        onChange={handleSurveyTypeChange}
                    />
                    <label htmlFor="subjective">서술식</label>
                </div>
                <div>
                    <span>질문 개수:</span>
                    <button id='minus' onClick={() => handleCount(-1)}>-</button>
                    <span>{numQuestions}</span>
                    <button id='plus' onClick={() => handleCount(1)}>+</button>
                </div>
            </SurveyHeader>
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
            <button onClick={handleSubmit}>설문 생성</button>
        </div>
    );
}

export default Survey;
