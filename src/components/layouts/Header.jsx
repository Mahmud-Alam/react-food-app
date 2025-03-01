import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../../styles/HeaderStyle.css";
import Logo from "/assets/logo/logo.png";

function Header({ aboutRef, menuRef, shopRef, contactRef }) {
  const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
    // console.log(scrollValue);
  };

  addEventListener("scroll", changeValueOnScroll);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand>
            <Nav.Link
              className="logo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => scrollToSection(aboutRef)}>
                About
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(menuRef)}>
                Our Menu
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(shopRef)}>
                Shop
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(contactRef)}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
