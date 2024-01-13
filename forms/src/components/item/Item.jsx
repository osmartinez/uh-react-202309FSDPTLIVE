import { Card, ListGroup, Spinner } from "react-bootstrap"

import './Item.css'
function Item({ item }) {
    return (
        <Card className="mx-3 my-3 pt-2" style={{ width: '18rem' }}>
            <Card.Img height={250}  variant="top" src={item.foto} />
            <Card.Body>
                <Card.Title className="text-danger">{item.descripcion}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.categoria}</Card.Subtitle>
                <Card.Text>
                    ... aqui iría una descripcion...
                </Card.Text>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{item.year}</ListGroup.Item>
                </ListGroup>
            </Card.Body>

        </Card>
    )
}

export default Item