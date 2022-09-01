import React from 'react';
import classes from "./styles.module.scss";

const BookListItem = ({book}) => {
    const {title, author, price, coverImage} = book;
  return (
    <div className={classes.book_list_item}>
        <div className={classes.book_list_item_cover}>
            <img src= {coverImage} alt='cover'/>
        </div>

        <div className={classes.book_list_item_details}>
            <span className={classes.book_list_item_title}>{title}</span>
            <div className={classes.book_list_item_author}> {author} </div>
            <div className={classes.book_list_item_price}> {price} </div>
            <button className={`btn btn-info`}>Add to cart</button>
        </div>
    </div>
  )
}

export default BookListItem;