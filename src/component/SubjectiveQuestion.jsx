import React from 'react';
import styled from 'styled-components';

const QuestionBox = styled.div`
    margin: 5%;
`;

function SubjectiveQuestion({ questionNumber, questionText, onQuestionChange }) {
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
        </QuestionBox>
    );
}

export default SubjectiveQuestion;
