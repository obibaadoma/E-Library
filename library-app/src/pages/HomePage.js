// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => {
    return (
        <Container>
            <Header>Welcome to the Library Management System</Header>
            <Description>
                Manage your books, borrow and return them with ease. Explore our vast collection and find your next read.
            </Description>
            <ButtonContainer>
                <StyledLink to="/books">View Books</StyledLink>
                <StyledLink to="/account">My Account</StyledLink>
            </ButtonContainer>
        </Container>
    );
};

export default HomePage;

// Styled Components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f9fa;
`;

const Header = styled.h1`
    font-size: 2.5rem;
    color: #343a40;
`;

const Description = styled.p`
    font-size: 1.25rem;
    color: #6c757d;
    text-align: center;
    margin: 20px 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
`;

const StyledLink = styled(Link)`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;
