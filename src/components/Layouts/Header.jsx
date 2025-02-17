import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/HeaderStyle.css";
import Logo from "../../assets/logo/logo.png"

function Header() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link>
          <img src={Logo} alt="Logo" className="img-fluid"/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <div className="cart">
                <i class="bi bi-bag fs-5"></i>
                <em className="roundpoint">2</em>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;
