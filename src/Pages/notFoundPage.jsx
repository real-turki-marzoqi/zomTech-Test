import { Col, Container, Row } from "react-bootstrap";
import notFounfImg from "../Images/diverse/404 Error.gif";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <Container className="mt-2 mb-2 notFoundPageContainer">
        <Row>
          <Col>
            <p className="notFoundPageHead">الصفحة غير موجودة</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <img
              className="notFoundPageImg"
              src={notFounfImg}
              alt="not found page img"
            />
          </Col>
        </Row>

        <Row>
          <Col>
          <Link className="custom-link" to={'/.'}>
      
            <button className="notFoundPageBtn">
              <i style={{ fontSize: "20px" }} className="fa-solid fa-house"></i>{" "}
            </button>
            </Link>
          </Col>
        </Row>
      </Container>
      
    </>
  );
};

export default NotFoundPage;
