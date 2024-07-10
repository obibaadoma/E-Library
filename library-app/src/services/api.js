import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchBooks = async () => {
    const response = await axios.get(`${API_BASE_URL}/books`);
    return response.data;
};

export const fetchBookDetail = async (bookId) => {
    const response = await axios.get(`${API_BASE_URL}/books/${bookId}`);
    return response.data;
};

export const borrowBook = async (bookId, userId) => {
    const response = await axios.post(`${API_BASE_URL}/books/${bookId}/borrow`, { userId });
    return response.data;
};

export const returnBook = async (bookId, userId) => {
    const response = await axios.post(`${API_BASE_URL}/books/${bookId}/return`, { userId });
    return response.data;
};

export const fetchUserAccount = async (userId) => {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
};
