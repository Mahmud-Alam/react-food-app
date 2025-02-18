import { Col, Container, Row } from "react-bootstrap"

function MenuSection() {
  return (
    <section className="menu_section">
        <Container>
            <Row>
                <Col lg={{span:8, offset:2}}>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default MenuSection