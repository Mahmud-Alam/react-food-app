import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../components/cards/Cards";
import burgerData from "../../data/burgerData";
import Rating from "../../utils/Rating";
import { menuSectionContent } from "../../data/contentData";
import { forwardRef } from "react";

const MenuSection = forwardRef((props, ref) => {
  const {
    heading,
    description,
    cardHeading1,
    cardHeading2,
    cardHeading3,
    buttonText,
    path1,
    path2,
  } = menuSectionContent;

  return (
    <section ref={ref} id="menu" className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>{heading}</h2>
            <p className="para">{description}</p>
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
              <h4 className="mb-0">{cardHeading1}</h4>
              <h5>{cardHeading2}</h5>
              <Link to={path1} className="btn btn_red px-4 rounded-0">
                {buttonText}
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">{cardHeading1}</h4>
              <h5>{cardHeading3}</h5>
              <Link to={path2} className="btn btn_red px-4 rounded-0">
                {buttonText}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default MenuSection;
