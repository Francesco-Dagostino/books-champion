import BookItem from "../bookItem/BookItem"

const Book = ({books}) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
        <BookItem 
        title={books[0].title}
        author={books[0].author}
        rating={books[0].rating}
        pageCount={books[0].pageCount}
        imageUrl={books[0].imageUrl} 
      />
      <BookItem
        title={books[1].title}
        author={books[1].author}
        rating={books[1].rating}
        pageCount={books[1].pageCount}    
        imageUrl={books[1].imageUrl}    
      />
         <BookItem
        title={books[2].title}
        author={books[2].author}
        rating={books[2].rating}
        pageCount={books[2].pageCount}      
        imageUrl={books[2].imageUrl} 
  
      />
    </div>
  )
}

export default Book
