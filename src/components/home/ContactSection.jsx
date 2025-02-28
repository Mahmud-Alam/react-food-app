import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { contactSectionContent } from "../../data/contentData";
import { forwardRef } from "react";

const ContactSection = forwardRef((props, ref) => {
  const { heading1, heading2, description, buttonText, path } =
    contactSectionContent;
  return (
    <section ref={ref} id="contact" className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>{heading1}</h4>
            <h2>{heading2}</h2>
            <p>{description}</p>
            <Link to={path} className="btn btn_red px-4 rounded-0">
              {buttonText}
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default ContactSection;
