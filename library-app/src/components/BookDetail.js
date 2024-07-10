import React, { useState, useEffect } from 'react';
import { fetchBookDetail } from '../services/api';

const BookDetail = ({ bookId }) => {
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetchBookDetail(bookId).then(data => setBook(data));
    }, [bookId]);

    if (!book) return <div>Loading...</div>;

    return (
        <div>
            <h1>{book.title}</h1>
            <p>{book.description}</p>
            <p>{book.author}</p>
            <p>{book.available ? 'Available' : 'Borrowed'}</p>
        </div>
    );
};

export default BookDetail;
