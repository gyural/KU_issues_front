import axios from 'axios';

// const API_URL = 'http://localhost:3000/survey';

// export const test = async (credentials) => {
//   const reqData = {
//     "author": "gyu",
//     "title": "test-survey",
//     "description": "설문조사-설명"
//   }
//   const data1 =  JSON.stringify(reqData)
//   try {
//     const response = await axios.post(API_URL, data1);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
const API_URL = 'http://localhost:3000'; // 서버의 API URL

export const getUserProfile = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/profile/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || '실패!');
    }
};


export default getUserProfile;