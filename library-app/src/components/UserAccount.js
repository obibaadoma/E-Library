import React, { useState, useEffect } from 'react';
import { fetchUserAccount } from '../services/api';

const UserAccount = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUserAccount(userId).then(data => setUser(data));
    }, [userId]);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>{user.name}'s Account</h1>
            <p>Email: {user.email}</p>
            <h2>Borrowed Books</h2>
            <ul>
                {user.borrowedBooks.map(book => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserAccount;
