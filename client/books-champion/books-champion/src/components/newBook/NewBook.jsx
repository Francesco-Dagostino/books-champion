import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const NewBook = ({onBookAdded}) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState('');
    const [pageCount, setPageCount] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [available, setAvailable] = useState(false);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    }
    const handleRatingChange = (e) => {
        setRating(e.target.value);
    }
    const handlePageCountChange = (e) => {
        setPageCount(e.target.value);
    }
    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    }
    const handleAvailabilityChange = (e) => {
        setAvailable(e.target.checked);
    }
    
    const handleAddBook = (e) => {

        e.preventDefault();

        const bookData = {
            title,
            author,
            rating: parseInt(rating, 10),
            pageCount: parseInt(pageCount, 10),
            imageUrl,
            available
        };

        onBookAdded(bookData);
        setTitle("")
        setAuthor("")
        setRating("")
        setPageCount("")
        setImageUrl("")
        setAvailable(false)

        console.log(bookData)
    }


    return (
        <Card className="m-4 w-50" bg="success">
            <Card.Body>
                <Form className="text-white" onSubmit={handleAddBook}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Título</Form.Label>
                                <Form.Control 
                                type="text" 
                                value={title}
                                placeholder="Ingresar título" 
                                onChange={handleChangeTitle}/>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="author">
                                <Form.Label>Autor</Form.Label>
                                <Form.Control 
                                type="text" 
                                value={author}
                                placeholder="Ingresar autor" 
                                onChange={handleAuthorChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="rating">
                                <Form.Label>Puntuación</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={rating}
                                    onChange={handleRatingChange}
                                    placeholder="Ingresar cantidad de estrellas"
                                    max={5}
                                    min={0}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="pageCount">
                                <Form.Label>Cantidad de páginas</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={pageCount}
                                    onChange={handlePageCountChange}
                                    placeholder="Ingresar cantidad de páginas"
                                    min={1}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>URL de imagen</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ingresar url de imagen"
                                value={imageUrl}
                                onChange={handleImageUrlChange} />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-end">
                        <Col md={3} className="d-flex flex-column justify-content-end align-items-end">
                            <Form.Check
                                type="switch"
                                id="available"
                                className="mb-3"
                                label="¿Disponible?"
                                onChange={handleAvailabilityChange}
                            />
                            <Button variant="primary" type="submit">
                                Agregar lectura
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default NewBook;