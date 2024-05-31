import React from 'react';
import styled from 'styled-components';


const InputContent = styled.input`
  font-size: 20px;
  margin-left: 14px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  `
  
const QuestionBox = styled.div`
    margin: 5%;
`;

function SubjectiveQuestion({ questionNumber, questionText, onQuestionChange }) {
    return (
        <QuestionBox>
            <div style={{display: 'flex', width: '480px', marginBottom:'12px'}}>
                <span style={{fontSize: '28px'}}>질문 {questionNumber}:</span>
                <InputContent 
                    type='text' 
                    placeholder='질문 입력...'
                    value={questionText}
                    style={{fontSize: '30px'}}
                    onChange={(e) => onQuestionChange(questionNumber - 1, e.target.value)}
                />
            </div>
            
        </QuestionBox>
    );
}

export default SubjectiveQuestion;
