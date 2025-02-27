import { Col, Container, Row } from "react-bootstrap";
import { promotionSectionContent } from "../../data/contentData";

function PromotionSection() {
  const { heading, description, listItems, image } = promotionSectionContent;

  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={image} alt="Promotion" className="img-fluid" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>{heading}</h2>
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <ul>
                {listItems.map((item, index) => (
                  <li key={index}>
                    <p>{item}</p>
                  </li>
                ))}
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
