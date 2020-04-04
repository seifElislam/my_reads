import React from 'react'
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class ListBooks extends React.Component {
    state = {
        Books: []
    };
    componentDidMount = () => {
        BooksAPI.getAll().then(books => {

            this.setState({ Books: books });
        });
    };
    moveBook = (book, shelf) => {
        BooksAPI.update(book, shelf).catch(err => {
          console.log(err);
        });
        if (shelf === "none") {
          this.setState(prevState => ({
            Books: prevState.Books.filter(b => b.id !== book.id)
          }));
        } else {
          book.shelf = shelf;
          this.setState(prevState => ({
            Books: prevState.Books.filter(b => b.id !== book.id).concat(book)
          }));
        }
      };
    render() {
        const { shelves } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map(shelf => (
                            <BookShelf
                                key={shelf.key}
                                shelf={shelf}
                                books={this.state.Books}
                                onMove={this.moveBook}
                            />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a Book</Link>
                </div>
            </div>

        )
    }
}

export default ListBooks