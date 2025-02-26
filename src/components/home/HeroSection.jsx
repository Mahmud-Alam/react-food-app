import { heroSectionContent } from "../../data/contentData";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeroSection() {
  const {
    heading1,
    heading2,
    description,
    text1,
    text2,
    image,
    buttonText,
    path,
  } = heroSectionContent;

  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={image} className="img-fluid" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">{text1}</h4>
                  <h4 className="h3_lg">{text2}</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">{heading1}</h1>
              <h2 className="text-white">{heading2}</h2>
              <p className="text-white pt-2 pb-4">{description}</p>
              <Link to={path} className="btn order_now">
                {buttonText}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
