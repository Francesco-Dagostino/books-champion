import { useState } from "react"
import BookItem from "../bookItem/BookItem"
import BooksSearch from "../bookSearch/BooksSearch"

const Book = ({books}) => {

  const[search, setSearch] = useState("")

  const handleSearch = (value) => {
    setSearch(value)
  }

  const filterBook = books
  .filter((book) => 
    search
      ? book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
      : book
    )
    .map((book) => (
      <BookItem
        key={book.id}
        title={book.title}
        author={book.author}
        rating={book.rating}
        pageCount={book.pageCount}
        imageUrl={book.imageUrl}
        available={book.available}
      />
  ))
  
  return (
    <div className="d-flex justify-content-center flex-wrap my-5">
        <div className="container max-w-50 d-flex justify-content-center flex-wrap">
          <BooksSearch onSearch={handleSearch} search={search} />
        </div>
         <div className="container d-flex justify-content-center flex-wrap">
          {filterBook.length ? (
            filterBook
          ) : (
            <p>No se encontraron libros</p>
          )}
        </div>
    </div>
  )
}

export default Book
