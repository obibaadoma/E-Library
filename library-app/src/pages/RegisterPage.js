// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Placeholder for actual registration logic
        if (password === confirmPassword) {
            // Here you would usually send a request to your backend to register the user
            alert('Registration successful!');
            navigate('/login'); // Redirect to login page
        } else {
            alert('Passwords do not match. Please try again.');
        }
    };

    return (
        <Container>
            <Form onSubmit={handleRegister}>
                <Title>Register</Title>
                <Label>Username</Label>
                <Input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <Label>Password</Label>
                <Input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <Label>Confirm Password</Label>
                <Input 
                    type="password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                />
                <Button type="submit">Register</Button>
            </Form>
        </Container>
    );
};

export default RegisterPage;

// Styled Components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f9fa;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
    margin-bottom: 20px;
    color: #343a40;
    text-align: center;
`;

const Label = styled.label`
    margin-bottom: 5px;
    color: #6c757d;
`;

const Input = styled.input`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;
