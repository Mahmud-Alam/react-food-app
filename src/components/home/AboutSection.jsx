import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

const aboutData = [
  {
    image: Pizza,
    title: "Original",
    description: `Crafted with the finest ingredients, our pizzas are a perfect blend of crispy crust, rich sauce, and gooey, melted cheese. Whether you love classic flavors or adventurous toppings, every slice delivers pure satisfaction`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    description: `Fresh, vibrant, and packed with nutrients—our salads are a refreshing mix of crisp greens, juicy veggies, and flavorful dressings. Whether as a light meal or a tasty side, each bowl is a burst of goodness`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    description: `Craving something delicious but don’t want to step out? Our fast and reliable delivery service ensures your favorite meals arrive hot and fresh at your doorstep. Just sit back, relax, and enjoy!`,
  },
];

function AboutSection() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
                At Tasty Burger, we’re all about bold flavors and high-quality
                ingredients. Every bite is crafted with care, from our perfectly
                seasoned patties to our fresh, locally sourced toppings. Whether
                you're craving something classic or looking for a new favorite,
                we promise a burger experience that’s nothing short of
                delicious.
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {aboutData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      alt="icon"
                      className="img-fluid"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.description}aaa</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutSection;
