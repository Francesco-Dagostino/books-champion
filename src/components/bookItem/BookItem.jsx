import React from 'react'

const BookItem = () => {
    const bookItem = "100 años de soledad";
    const bookAuthor = "Gabriel Garcia Marquez";
    const bookRating = 5;
    const bookPages = 410;
    
  return (
    <>
    <h2>{bookItem}</h2> 
    <h3>{bookAuthor}</h3>
    <div>{bookRating} Estrellas</div>
    <p>{bookPages} Pàginas</p>
    </>
  )
}

export default BookItem
