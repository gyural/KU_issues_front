import axiosInstance from './axiosInstance';

export const getUserProfile = async () => {
    try {
        const response = await axiosInstance.get('http://localhost:8080/api/profile');
        return response.data;
    } catch (error) {
        console.error('Error fetching user profile:', error.response);
        throw new Error(error.response?.data?.message || '실패!');
    }
};

export default getUserProfile;
