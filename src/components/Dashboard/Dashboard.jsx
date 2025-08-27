import { useState } from 'react';
import Books from '../books/Books';
import BookItem from '../bookItem/BookItem'
import NewBook from '../newBook/NewBook';
import BooksSearch from '../bookSearch/BooksSearch';


const booksInitial = [
  {
    title: "100 años de soledad",
    author: "Gabriel García Marquez",
    rating: 5,
    pageCount: 410,
    imageUrl:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
    available: true,
  },
  {
    title: "Asesinato en el Orient Express",
    author: "Agatha Christie",
    rating: 4,
    pageCount: 256,
    imageUrl:
      "https://m.media-amazon.com/images/I/71RFyM95qwL._AC_UF1000,1000_QL80_.jpg",
    available: true,
  },
  {
    title: "Las dos torres",
    author: "J.R.R Tolkien",
    rating: 5,
    pageCount: 352,
    imageUrl:
      "https://m.media-amazon.com/images/I/A1y0jd28riL._AC_UF1000,1000_QL80_.jpg",
    available: true,
  },
  {
    title: "50 sombras de Grey",
    author: "E.L James",
    rating: 1,
    pageCount: 514,
    imageUrl:
      "https://prodimage.images-bn.com/pimages/9781728260839_p0_v2_s1200x630.jpg",
    available: true,
  },
];


const Dashboard = ({onsingout}) => {
    const[bookList, setBookList] = useState(booksInitial)
    const handleClick = () => {
      onsingout(true)
    }


    const handleBookAdded = (enteredBook) =>
        {
    const bookData = {
      ...enteredBook,
      id: Math.random()
    }
    setBookList(prevBooksList => [bookData, ...prevBooksList])
}
  return (
    <>
    <h2>Books Champion App"</h2>
      <p>¡Quiero leer libros!</p>
    <button className='btn btn-primary position-absolute top-0 end-0 m-3'
      onClick={handleClick}>
      Cerrar sesion
    </button>
      <NewBook onBookAdded={handleBookAdded}/>
      <Books books={bookList}/>
    </>
  )
}

export default Dashboard
