import React from 'react'
import BookStateHandler from './BookStateHandler'

const Book = (props) => {
    const { book, shelf, onMove } = props;
    return (<div className="book">
        <div className="book-top">
            <div className="book-cover" style={{
                width: 128,
                height: 174,
                backgroundImage: `url(${
                    book.imageLinks
                        ? book.imageLinks.thumbnail
                        : "icons/book-placeholder.svg"
                    })`
            }}></div>
            <BookStateHandler book={book} shelf={shelf} onMove={onMove}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
    </div>)

};

export default Book