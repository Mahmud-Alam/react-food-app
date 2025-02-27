import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function ContactSection() {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <p>
              Craving something delicious? We guarantee your meal will be at your door in 30 minutes or less!
            </p>
            <Link to="/" className="btn btn_red px-4 rounded-0">Order Now</Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;
