import React from 'react';
import styled from 'styled-components';

const QuestionBox = styled.div`
    margin: 5%;
`;

function ObjectiveQuestion({ questionNumber, questionText, options, onQuestionChange, onOptionChange }) {
    return (
        <QuestionBox>
            <div>
                <span>질문 {questionNumber}:</span>
                <input 
                    type='text' 
                    placeholder='질문 입력...'
                    value={questionText}
                    onChange={(e) => onQuestionChange(questionNumber - 1, e.target.value)}
                />
            </div>
            {[...Array(5)].map((_, index) => (
                <div key={index}>
                    <input 
                        type='radio' 
                        id={`question_${questionNumber}-option_${index + 1}`} 
                        name={`question_${questionNumber}`} 
                        disabled 
                    />
                    <label htmlFor={`question_${questionNumber}-option_${index + 1}`}>{index + 1}.</label>
                    <input 
                        type='text' 
                        placeholder='내용 입력...'
                        value={options[index] || ''}
                        onChange={(e) => onOptionChange(questionNumber - 1, index, e.target.value)}
                    />
                </div>
            ))}
        </QuestionBox>
    );
}

export default ObjectiveQuestion;
