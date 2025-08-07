import './App.css'
import BookItem from './components/bookItem/BookItem'
import BookUseState from './components/bookItem/bookUseState/BookUseState'

function App() {
  
  return (
    <>
      <h2>Books Champion App"</h2>
      <p>¡Quiero leer libros!</p>
      <BookItem />
      <h2>form</h2>
      <BookUseState/>
    </>
  )
}

export default App
