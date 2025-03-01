import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { footerSectionContent } from "../../data/contentData";
import CopyrightSection from "../home/CopyrightSection";
import ScrollTop from "../others/ScrollTop";

function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            {footerSectionContent.map((item, index) => (
              <Col sm={6} lg={3} className="mb-4 mb-lg-0" key={index}>
                <div className="text-center">
                  <h5>{item.heading}</h5>
                  {item.descriptions.map((description, i) => (
                    <p key={i}>{description}</p>
                  ))}
                  {item.links && (
                    <p>
                      <Link to={item.links.path} className="calling">
                        {item.links.text}
                      </Link>
                    </p>
                  )}
                  {item.socialLinks && (
                    <ul className="list-unstyled text-center mt-2">
                      {item.socialLinks.map((social, i) => (
                        <li key={i}>
                          <Link to={social.path}>
                            <i className={social.icon}></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Col>
            ))}
          </Row>

          {/* Copyright Section */}
          <CopyrightSection />
        </Container>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollTop/>
    </>
  );
}

export default Footer;
