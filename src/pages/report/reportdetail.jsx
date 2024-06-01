import React, { useEffect } from 'react'
import styled from 'styled-components';


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
function reportdetail() {
  const fetchData = async () => {
    const survey = await getSurveyOne(surveyID);
    // const survey = await getSurveyOne(surveyID);
    if (survey) {
      setSurveyTitle(survey.title)
      setQuestionList(survey.questionList)
    }
  };
  fetchData();
  useEffect(()=>{

  }, [])
  return (
    <Container>
      <PostContainer>
        <PostWrapper>

        </PostWrapper>
      </PostContainer>
    </Container>
  )
}

export default reportdetail