import axios from 'axios';

const API_URL = 'http://localhost:3000/survey';

export const test = async (credentials) => {
  const reqData = {
    "author": "gyu",
    "title": "test-survey",
    "description": "설문조사-설명"
  }
  const data1 =  JSON.stringify(reqData)
  try {
    const response = await axios.post(API_URL, data1);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export default test