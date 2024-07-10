import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../services/api';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks().then(data => setBooks(data));
    }, []);

    return (
        <div>
            <h1>Book List</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
