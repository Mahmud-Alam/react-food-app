import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { copyrightSectionContent } from "../../data/contentData";

function CopyrightSection() {
    const { year, owner, ownerUrl, links, reserveText } = copyrightSectionContent

    return (
        <Row className="copy_right">
          <Col>
            <div>
              <ul className="list-unstyled text-center mb-0">
                <li>
                  <Link to={ownerUrl} target="_blank">
                    © {year} <span>{owner}</span>. {reserveText}
                  </Link>
                </li>
                {links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      )
}

export default CopyrightSection