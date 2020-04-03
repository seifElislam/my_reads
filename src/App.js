import React from 'react'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  bookshelves = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" }
  ];
  render() {
    return (
      <div className="app">
       <Route
          exact
          path="/"
          render={() => (
            <ListBooks shelfs={this.bookshelves} />
          )}
        />
          <Route
          path="/search"
          render={() => (
            <SearchBooks />
          )}
        />
        
      </div>
    )
  }
}

export default BooksApp
