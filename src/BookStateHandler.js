import React, { Component } from "react";

class BookStateHandler extends Component {
    state = {
        status: this.props.shelf
    };
    bookShelfStates = [
        {
            status: "currentlyReading",
            text: "Currently Reading"
        },

        {
            status: "wantToRead",
            text: "Want to Read"
        },

        {
            status: "read",
            text: "Read"
        },

        {
            status: "none",
            text: "None"
        }
    ];
    statusChangeHandler = event => {
        var nextStatus   = event.target.value;
        this.setState({ status: nextStatus});
        this.props.onMove(this.props.book, nextStatus);
      };
    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.state.status} onChange={this.statusChangeHandler}>
                    <option value="move" disabled>
                        Move to...
                    </option>
                    {this.bookShelfStates.map(option => (
                        <option key={option.status} value={option.status}>{option.text}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default BookStateHandler