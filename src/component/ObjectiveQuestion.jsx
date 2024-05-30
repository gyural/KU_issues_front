import React from 'react';
import styled from 'styled-components';

const QuestionBox = styled.div`
    margin: 5%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 22px;
`;

const InputContent = styled.input`
  font-size: 20px;
  margin-left: 14px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;

  &:focus {
    border-bottom-color: black; /* 포커스되면 테두리 색상을 변경하여 나타나도록 설정 */
    border-bottom-width: 1.5px; /* 포커스되면 border-bottom의 너비를 늘립니다. */
  }
`;
function ObjectiveQuestion({ questionNumber, questionText, options, onQuestionChange, onOptionChange }) {
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
            <div style={{paddingLeft: '57px'}}>
                {[...Array(5)].map((_, index) => (
                    <div key={index} style={{marginTop: "12px"}}>
                        <label htmlFor={`question_${questionNumber}-option_${index + 1}`}>{index + 1}.</label>
                        <InputContent 
                            type='text' 
                            placeholder='내용 입력...'
                            value={options[index] || ''}
                            onChange={(e) => onOptionChange(questionNumber - 1, index, e.target.value)}
                        />
                    </div>
                ))}

            </div>
        </QuestionBox>
    );
}

export default ObjectiveQuestion;
