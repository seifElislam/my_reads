import React from 'react'
import { Link } from "react-router-dom";
import SearchInput from './SearchInput'
import * as BooksAPI from './BooksAPI'
import SearchResults from './SearchResults'

class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchBooks: [] };
    this.onSearch = this.onSearch.bind(this);
  }
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).catch(err => {
      console.log(err);
    });
    book.shelf = shelf.key
  };
  onSearch(query) {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  }
  render() {
    return (<div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
          </Link>
        <SearchInput onSearch={this.onSearch} />
      </div>
      <SearchResults searchBooks={this.state.searchBooks} onMove={this.moveBook} />
    </div>)
  }
}

export default SearchBooks