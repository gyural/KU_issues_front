import axiosInstance from './axiosInstance';
import Cookies from 'js-cookie';


// 사용자 프로필을 조회하는 함수
export const getUserProfile = async () => {
    try {
        const response = await axiosInstance.get('/api/profile/123');
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching user profile:', error.response);
        throw new Error(error.response?.data?.message || '실패!');
    }
};

export default getUserProfile;
