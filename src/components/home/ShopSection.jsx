import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { shopSectionContent } from "../../data/contentData";
import { forwardRef } from "react";

const ShopSection = forwardRef((props, ref) => {
  const { heading1, heading2, description, storeImages, downloadImages } = shopSectionContent;
  return (
    <>
      <section ref={ref} id="shop" className="shop_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>{heading1}</h4>
              <h2>{heading2}</h2>
              <p>{description}</p>
              {storeImages.map(({ id, src, alt, path }) => (
                <Link key={id} to={path}>
                  <img src={src} alt={alt} className="img-fluid me-3 store" />
                </Link>
              ))}
            </Col>
            <Col lg={6}>
              <img
                src={downloadImages.src}
                alt={downloadImages.alt}
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
});

export default ShopSection;
