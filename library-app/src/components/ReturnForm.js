import React, { useState } from 'react';
import { returnBook } from '../services/api';

const ReturnForm = ({ bookId }) => {
    const [userId, setUserId] = useState('');

    const handleReturn = async () => {
        await returnBook(bookId, userId);
        alert('Book returned successfully');
    };

    return (
        <div>
            <h1>Return Book</h1>
            <input
                type="text"
                value={userId}
                onChange={e => setUserId(e.target.value)}
                placeholder="User ID"
            />
            <button onClick={handleReturn}>Return</button>
        </div>
    );
};

export default ReturnForm;
