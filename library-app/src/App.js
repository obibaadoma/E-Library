import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import UserAccount from './components/UserAccount';
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books" element={<BookList />} />
                    <Route path="/books/:id" element={<BookDetail />} />
                    <Route path="/account" element={<UserAccount />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="*" element={<h2>404 Page Not Found</h2>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
