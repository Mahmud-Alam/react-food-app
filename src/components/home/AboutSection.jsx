import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import aboutData from "../../data/aboutData";

function AboutSection() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
                At Tasty Burger, we’re all about bold flavors and high-quality
                ingredients. Every bite is crafted with care, from our perfectly
                seasoned patties to our fresh, locally sourced toppings. Whether
                you're craving something classic or looking for a new favorite,
                we promise a burger experience that’s nothing short of
                delicious.
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
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
                  <p>{cardData.description}aaa</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutSection;
