import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"


function Formulario({ onInsertarItem }) {
    const INITAL_STATE = { descripcion: "", foto: "", year: "", categoria: "" }

    const [dato, setDato] = useState(INITAL_STATE)


    function cambiarAtributo(e, atributo) {
        setDato({ ...dato, [atributo]: e.target.value })
    }

    function insertar() {
        onInsertarItem(dato)
        setDato(INITAL_STATE)
    }

    return (
        <Form>
            <h1>Formulario</h1>

            <Container>

                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <Form.Group>
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control value={dato.descripcion} onChange={(e) => cambiarAtributo(e, 'descripcion')} type="text" />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Form.Group>
                            <Form.Label>Año</Form.Label>
                            <Form.Control value={dato.year} onChange={(e) => cambiarAtributo(e, 'year')} type="number" />
                        </Form.Group>
                    </Col>
                </Row>
{/* 
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label >Foto</Form.Label>
                            <Form.Control value={dato.foto} onChange={(e) => cambiarAtributo(e, 'foto')} type="text" />
                        </Form.Group>
                    </Col>
                </Row> */}

                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label >Foto</Form.Label>
                            <Form.Control value={dato.foto} onChange={(e) => cambiarAtributo(e, 'foto')} type="text" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label >categoria</Form.Label>
                            <Form.Control value={dato.categoria} onChange={(e) => cambiarAtributo(e, 'categoria')} type="text" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="my-3">
                    <Col>
                        <Button onClick={insertar}>Guardar</Button>

                    </Col>
                </Row>

            </Container>










            <img width={100} src={dato.foto} />




        </Form>
    )
}

export default Formulario