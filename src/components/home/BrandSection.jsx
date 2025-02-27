import { Container, Row, Carousel } from "react-bootstrap";
import { brandSectionImg } from "../../data/contentData";

function BrandSection() {
  return (
    <section className="brand_section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="d-flex align-items-center justify-content-between">
                  {brandSectionImg.slice(0, 6).map(({ id, src, alt }) => (

                    <div className="brand_img" key={id}>
                      <img src={src} className="img-fluid" alt={alt} />
                    </div>
                  ))}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="d-flex align-items-center justify-content-between">
                  {brandSectionImg.slice(2, 8).map(({ id, src, alt }) => (

                    <div className="brand_img" key={id}>
                      <img src={src} className="img-fluid" alt={alt} />
                    </div>
                  ))}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default BrandSection;
