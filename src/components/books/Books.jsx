import BookItem from "../bookItem/BookItem"

const Book = ({books}) => {
  return (
    <div className="d-flex justify-content-center flex-wrap my-5">
        {books.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            rating={book.rating}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
            available={book.available}
          />
        ))}
      </div>
  )
}

export default Book
