import React, { useEffect, useState } from 'react'
import styled, {keyframes} from 'styled-components';
import { getReport } from '../../APIs/surveyAPI';

const Container = styled.div`
  width: 60%;
  padding: 0 0;
  display: flex;
  align-items: center;
  margin-left: 20%;
  justify-content: center;
  z-index: 1000;
`
const PostContainer = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  /* height: 500px; */
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 32px 0;
  outline: none;
  box-shadow: 0px 0px 1px #777777, -1px 1px 3px #777777;
  border-radius: 20px;
  margin-bottom: 32px;
  background-color: #D56A7F;
  
`;

const PostWrapper = styled.div`
    margin: 0 auto;
    padding: 26px 54px;
    box-sizing: border-box;
    width: 98%;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin-bottom: 48px;
    
`
const Navigation = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`

const AnswerList = styled.div`
  padding: 0px 90px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

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
  animation: gradientMove 3s linear infinite;
`

const fillBackground = (percentage) => keyframes`
  from {
    background-size: 0% 100%;
  }
  to {
    background-size: ${percentage}% 100%;
  }
`;

const AnswerItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: ${({ percentage }) => `linear-gradient(to right, #9a9a9a ${percentage}%, #f9f9f9 ${percentage}%)`};
  background-size: ${({ percentage }) => percentage}% 100%;
  background-repeat: no-repeat;
  animation: ${({ percentage }) => fillBackground(percentage)} 1s ease-in-out forwards;
`;


const AnswerText = styled.span`
  font-size: 18px;
`;

const AnswerCount = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
function countAnswersPerQuestion(questionsData) {
  return questionsData.map(question => {
    return question.answerList.map(answer => {
      return question.totalAnswers.filter(totalAnswer => totalAnswer === answer).length;
    });
  });
}

const getPercentage = (answerCnt) => {
  return answerCnt.map(questionCounts => {
    const total = questionCounts.reduce((sum, count) => sum + count, 0);
    return questionCounts.map(count => (total > 0 ? (count / total) * 100 : 0));
  });
};
function Reportdetail({surveyID, setMode}) {
  useEffect(()=>{
    const fetchData = async () => {
      const report = await getReport(surveyID);
      // const survey = await getSurveyOne(surveyID);
      if (report) {
        setReports(report)
        const ansCount = countAnswersPerQuestion(report)
        
        setAnswerCnt(ansCount)
        setPercentages(getPercentage(ansCount))
      }
    };
    fetchData();

  }, [])

  
  const [reports, setReports] = useState([])
  const [answerCnt, setAnswerCnt] = useState([])
  const [percentages, setPercentages] = useState([])
  return (
    <Container>
      <PostContainer>
        <PostWrapper>
          <div style={{display: 'flex', justifyContent:'space-between'}}>
            <p style={{fontSize: '36px', fontWeight:'700', margin:0}}>응답 {reports.length}개</p>
            <NxtBtn onClick={()=>{setMode('list')}}>돌아가기</NxtBtn>
          </div>
        </PostWrapper>
        {reports.map((report, Qidx)=>{
          return(
            <PostWrapper>
              <span style={{fontSize: '32px', fontWeight: '700'}}>{report.question}</span>
              <AnswerList>
              {report.answerList?.map((answer, Aidx) => (
                <AnswerItem key={Aidx} percentage={percentages[Qidx][Aidx]}>
                  <AnswerText>{answer}</AnswerText>
                  <AnswerCount>{percentages[Qidx][Aidx]}%</AnswerCount>
                </AnswerItem>
              ))}
            </AnswerList>
            </PostWrapper>
          )
        })}
      </PostContainer>
    </Container>
  )
}

export default Reportdetail