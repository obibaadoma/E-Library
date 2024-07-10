import React, { useState } from 'react';
import { borrowBook } from '../services/api';

const BorrowForm = ({ bookId }) => {
    const [userId, setUserId] = useState('');

    const handleBorrow = async () => {
        await borrowBook(bookId, userId);
        alert('Book borrowed successfully');
    };

    return (
        <div>
            <h1>Borrow Book</h1>
            <input
                type="text"
                value={userId}
                onChange={e => setUserId(e.target.value)}
                placeholder="User ID"
            />
            <button onClick={handleBorrow}>Borrow</button>
        </div>
    );
};

export default BorrowForm;
