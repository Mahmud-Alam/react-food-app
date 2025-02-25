import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IOS from "../../assets/shop/appstore.png";
import Android from "../../assets/shop/googleplay.png";
import DownloadImage from "../../assets/shop/e-shop.png";

function ShopSection() {
  return (
    <>
      <section className="shop_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download mobile App and</h4>
              <h2>save up to 20%</h2>
              <p>
                Enjoy your favorite burgers anytime, anywhere! Download our mobile app today and get exclusive deals, easy ordering, and a special 20% discount on your first purchase. Deliciousness is just a tap away!
              </p>
              <Link to="">
              <img src={IOS} alt="ios" className="img-fluid me-3 store"/>
              </Link>
              <Link to="">
              <img src={Android} alt="android" className="img-fluid me-3 store"/>
              </Link>
            </Col>
            <Col lg={6}>
            <img src={DownloadImage} alt="e-shop" className="img-fluid"/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ShopSection;
