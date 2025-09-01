import { Form } from 'react-bootstrap'

const BooksSearch = ({search, onSearch}) => {

    const handleBookSearch = (e) => {
        onSearch(e.target.value);
    }

  return (
      <Form.Group className='mb-3'>
        <Form.Control
            type='text'
            placeholder='Buscar Libro..'
            onChange={handleBookSearch}
            value={search}  
        />
      </Form.Group>
  )
}

export default BooksSearch
