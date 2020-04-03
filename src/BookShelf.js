import React from 'react'
import Book from './Book'

const BookSelf = (props) => {
    const { shelf, books } = props;
    const shelfBooks = books.filter(book => book.shelf === shelf.key);
    return (<div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                    {shelfBooks.map(book => (
                       <li> <Book key={book.id} book={book} shelf={shelf.key} /></li>
                    ))}
            </ol>
        </div>
    </div>)

};

export default BookSelf