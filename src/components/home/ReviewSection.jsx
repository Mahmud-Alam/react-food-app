import { Container, Row, Carousel } from "react-bootstrap";
import reviewData from "../../data/reviewData";
import Rating from "../../utils/Rating";

function ReviewSection() {
  return (
    <section className="review_section">
      <Container>
        <Row>
          <Carousel>
            {reviewData.map((userReview) => (
              <Carousel.Item key={userReview.id}>
                <Carousel.Caption>
                  <div className="user_img">
                    <img
                      src={userReview.image}
                      className="img-fluid"
                      alt={`user image ${userReview.id}`}
                    />
                  </div>
                  <p>{`"${userReview.review}"`}</p>
                  <div className="item_rating mb-2"><Rating rating={userReview.rating} /></div>
                  <h5>By {userReview.name}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default ReviewSection;
