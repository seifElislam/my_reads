import React from "react";
import Book from "./Book";


const SearchResults = props => {
    const { searchBooks, onMove, Books } = props;
    const BooksList = searchBooks.map(book => {
        Books.map(b => {
          if (b.id === book.id) {
            book.shelf = b.shelf;
          }
          return b;
        });
        return book;
      });

    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {BooksList.map(book => (
                    <li key={book.id + 1} > <Book key={book.id} book={book} shelf={book.shelf ? book.shelf : "none"} onMove={onMove} /></li>
                ))}
            </ol>
        </div>
    );
};

export default SearchResults;
