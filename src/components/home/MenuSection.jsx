import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../components/cards/Cards";
import burgerData from "../../data/burgerData";
import Rating from "../../utils/Rating";

function MenuSection() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>Our Crazy Burgers</h2>
            <p className="para">
              Get ready for a wild ride of flavors! Our crazy burgers are loaded
              with juicy patties, bold toppings, and irresistible sauces, all
              stacked on a perfectly toasted bun. Whether you like it cheesy, or
              extra meaty, we’ve got a burger that will blow your mind!
            </p>
          </Col>
        </Row>

        <Row>
          {burgerData.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.image}
              title={cardData.title}
              description={cardData.description}
              rating={cardData.rating}
              price={cardData.price}
              ratingFunc={Rating}
            />
          ))}
        </Row>

        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">Get Your Free</h4>
              <h5>Cheese Fries</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">Get Your Free</h4>
              <h5>Cheese Fries</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MenuSection;
