import axios from "axios";
const baseURL = 'http://localhost:8080'

/**
 * 
 * @param {*} author 학번
 * @param {*} title 
 * @param {*} description 
 * @param {*} questionList [question: "질문", questionType: "1-> 객관식 2-> 주관식"]
 */
const createSurvey = (author, title, description, questionList) => {
  const surveyData = {
    author,
    title,
    description,
    questionList,
  };
  console.log(surveyData)
  const reqData = JSON.stringify(surveyData)

  axios.post(`${baseURL}/api/survey`, reqData, {
    headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(response => {
        if (response.status === 200) {
            alert('설문조사가 성공적으로 제출되었습니다.');
        }
    })
    .catch(error => {
        console.error('Error submitting survey:', error);
    });
};

export {createSurvey}