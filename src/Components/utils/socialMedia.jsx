
import { Row, Col, Container } from "react-bootstrap";
import "../../Styles/socialMedia.css";

const SocialMedia = () => {
  return (
    <Container>
      <Row className="social-media-row mt-5">
        <Col className="social-media-col" xl={2} lg={2} md={2} sm={2} xs={2}>
          <i className="fa-brands fa-linkedin-in social-media-icon"></i>
        </Col>

        <Col className="social-media-col" xl={2} lg={2} md={2} sm={2} xs={2}>
          <i className="fa-brands fa-whatsapp social-media-icon"></i>
        </Col>

        <Col className="social-media-col" xl={2} lg={2} md={2} sm={2} xs={2}>
          <i className="fa-brands fa-youtube social-media-icon"></i>
        </Col>

        <Col className="social-media-col" xl={2} lg={2} md={2} sm={2} xs={2}>
          <i className="fa-brands fa-instagram social-media-icon"></i>
        </Col>

        <Col className="social-media-col" xl={2} lg={2} md={2} sm={2} xs={2}>
          <i className="fa-regular fa-comments social-media-icon"></i>
        </Col>

        <Col className="social-media-col" xl={2} lg={2} md={2} sm={2} xs={2}>
          <i className="fa-solid fa-location-dot social-media-icon"></i>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialMedia;
