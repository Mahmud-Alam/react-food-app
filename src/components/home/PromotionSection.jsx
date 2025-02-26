import { Col, Container, Row } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function PromotionSection() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} alt="Promotion" className="img-fluid" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                A great burger isn’t just a meal—it’s an experience worth
                sharing. Whether you're dining with family, catching up with
                friends, or treating yourself, our delicious burgers bring
                people together with every juicy bite. Because the best moments
                in life are made even better with great food!
              </p>
              <p>
                Enjoy the perfect burger experience with us! Here's what makes
                our burgers special:
              </p>
              <ul>
                <li>
                  <p>🍔 Made with premium, fresh ingredients</p>
                </li>
                <li>
                  <p>🔥 Grilled to perfection for maximum flavor</p>
                </li>
                <li>
                  <p>🧀 Loaded with delicious, melty cheese</p>
                </li>
                <li>
                  <p>🥓 Topped with crispy bacon and fresh veggies</p>
                </li>
                <li>
                  <p>🚀 Available for quick delivery, straight to your door</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Backgroud Parallax Effect on Scrolling */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default PromotionSection;
