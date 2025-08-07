import { useState } from "react"

const BookUseState = () => {
    const [book, setBook] = useState(
      {
        title: '',
        author: '',
        rating: '',
        pages: '' 
      }
    )
    
    
    const handleChange = (e) => {
        const {name, value}  = e.target
        setBook(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
      e.prevDefault()

    console.log("libro agregado", book)
    
    setBook = ({
      title: '',
      author: '',
      rating: '',
      pages: '' 
    })
    }
    
  return (  
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={book.title} placeholder="Ingrese el nombre" onChange={handleChange}/>
        <input type="text" name="author" value={book.author} placeholder="Ingrese el autor" onChange={handleChange}/>
        <input type="number" name="rating" value={book.rating} placeholder="Cantidad de Estrellas" onChange={handleChange}/>
        <input type="number" name="pages" value={book.pages} placeholder="Cantidad paginas" onChange={handleChange}/>
        <button type="submit">Agregar lectura</button>
      </form>
    </>
  )
}

export default BookUseState
