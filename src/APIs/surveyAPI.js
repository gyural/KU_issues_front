import axios from "axios";
const baseURL = 'https://udr2.wild2.duckdns.org'

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

const getAllSurvey = async () =>{
  return await axios.get(`${baseURL}/api/survey`).then(
    res=>{
      if(res.status===200){
        return res.data
      }
      else{
        return []
      }
    }
  ).catch(err=>{
    console.log(err)
  }
    
  )
}

const getSurveyOne = async (surveyID)=>{
  return await axios.get(`${baseURL}/api/survey/${surveyID}`).then(
    res=>{
      if(res.status === 200){return res.data}
      else{ return []}
    }
  ).catch(err=>{
    console.log(err)
    return []
  })
}

/**
 * 
 * @param {*} surveyID 
 * @param {*} respondent 
 * @param {array} answerLIst 
 * answerList of answer: {"answer": "새로운 답"},
 */
const answerSurvey = async (surveyID, respondent, answerList) => {
  const answer = { surveyID, respondent, answerList };  
  const reqData = JSON.stringify(answer);
  console.log(reqData);

  return await axios.post(`${baseURL}/api/survey/${surveyID}/answer`, reqData, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    if (response.status === 201) {
      return true;
    } else {
      return false;
    }
  })
  .catch(err => {
    console.log(err);
    return false;
  });
}

const getReport = async(surveyID)=>{
  const requestURL = baseURL + '/api/survey/report/' + surveyID

  return await axios.get(requestURL)
  .then(
    res=>{
      if(res.status === 200){
        return res.data
      }else{
        return false
      }
    })
    .catch(
      err=>{
        console.log(err)
        return false
      }
    )
}
export {createSurvey, getAllSurvey, getSurveyOne, answerSurvey, getReport}