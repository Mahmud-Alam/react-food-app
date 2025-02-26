import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";

function HeroSection() {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} className="img-fluid" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">৳450</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Burger</h1>
              <h2 className="text-white">With Onion</h2>
              <p className="text-white pt-2 pb-4">
                Savor the perfect bite! Our new burger with onion is a juicy,
                flavor-packed delight, layered with fresh, crispy onions,
                premium beef, and a melt-in-your-mouth bun. A taste so good, you
                won’t want to share!
              </p>
              <Link to="/" className="btn order_now">
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
