import React from "react";
import Book from "./Book";


const SearchResults = props => {
    const { searchBooks, onMove } = props;

    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {searchBooks.map(book => (
                    <li key={book.id + 1} > <Book key={book.id} book={book} shelf={book.shelf ? book.shelf : "none"} onMove={onMove} /></li>
                ))}
            </ol>
        </div>
    );
};

export default SearchResults;
