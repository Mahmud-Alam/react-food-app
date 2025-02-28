import { forwardRef } from "react";
import aboutData from "../../data/aboutData";
import { aboutSectionContent } from "../../data/contentData";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutSection = forwardRef((props, ref) => {
  const { heading, description, path, buttonText } = aboutSectionContent;

  return (
    <>
      <section ref={ref} id="about" className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>{heading}</h2>
              <p>{description}</p>
              <Link to={path} className="btn order_now btn_red">
                {buttonText}
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {aboutData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      alt="icon"
                      className="img-fluid"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
});

export default AboutSection;
