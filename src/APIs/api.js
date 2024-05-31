import axios from 'axios';

const API_URL = 'http://localhost:8080'; // 서버의 API URL

export const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/api/profile/${userId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}` // 인증 토큰을 헤더에 추가
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error.response);
    throw new Error(error.response?.data?.message || '실패!');
  }
};

export default getUserProfile;
