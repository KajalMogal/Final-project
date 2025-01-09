import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data.token;
  } catch (error) {
    throw new Error('login failed !!');
  }
};

export const register = async (name, email, password) => {
  try {
    await axios.post(`${API_URL}/auth/register`, { name, email, password });
  } catch (error) {
    throw new Error('registration failed !!');
  }
};

export const issuePoints = async (userId, points) => {
  try {
    await axios.post(`${API_URL}/loyalty/issue-points`, { userId, points });
  } catch (error) {
    throw new Error('failed to issue points !!');
  }
};

export const getPoints = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/loyalty/get-points/${userId}`);
    return response.data.totalPoints;
  } catch (error) {
    throw new Error('failed to fetch points !!');
  }
};
