import React, { useContext, useEffect } from 'react';
import {connect} from 'react-redux';
import classes from "./styles.module.scss";
import BooksContext from '../context';
import {fetchBooks} from "../../redux";
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const Booklist = ({books, loading, error, fetchBooks}) => {
  const service = useContext(BooksContext);

  useEffect(() => {
    fetchBooks(service.getBooks)
  }, []);

  if(loading) {
    return <Spinner/>
  }

  if (error) {
    return <ErrorIndicator/>
  }


  return (
    <ul className={classes.book_list}>

      {books.map((book) => {
          return <li key = {`books-${book.id}`}> <BookListItem book={book}/> </li>
      })}
    </ul>
  )
};

const mapStateToProps = ({books, error, loading}) => {
    return {
        books,
        error, 
        loading
    };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchBooks: (service) => fetchBooks(dispatch, service)
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Booklist);