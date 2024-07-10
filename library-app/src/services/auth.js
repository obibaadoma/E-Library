import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const login = async (email, password) => {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
    return response.data;
};

export const register = async (name, email, password) => {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, { name, email, password });
    return response.data;
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const setToken = (token) => {
    localStorage.setItem('token', token);
};
