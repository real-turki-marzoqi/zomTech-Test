import { Row, Container, Col } from "react-bootstrap";
import CilentsCard from "./cilentsCard";

import image1 from "../../images/costumersLogos/1.png";

import image5 from "../../images/costumersLogos/5.png";
import image6 from "../../images/costumersLogos/6.png";
import image7 from "../../images/costumersLogos/7.png";
import image8 from "../../images/costumersLogos/8.png";

import image13 from "../../images/costumersLogos/13.png";
import image14 from "../../images/costumersLogos/14.png";
import image15 from "../../images/costumersLogos/15.png";
import image16 from "../../images/costumersLogos/16.png";
import image18 from "../../images/costumersLogos/18.png";
import image19 from "../../images/costumersLogos/19.png";
import image20 from "../../images/costumersLogos/20.png";
import image21 from "../../images/costumersLogos/21.png";
import image23 from "../../images/costumersLogos/23.png";
import image24 from "../../images/costumersLogos/24.png";
import image25 from "../../images/costumersLogos/25.png";
import image26 from "../../images/costumersLogos/26.png";
import image30 from "../../images/costumersLogos/30.jpeg";
import image31 from "../../images/costumersLogos/31.png";
import image32 from "../../images/costumersLogos/32.png";
import image33 from "../../images/costumersLogos/33.png";
import image34 from "../../images/costumersLogos/34.png";
import image35 from "../../images/costumersLogos/35.png";
import image36 from "../../images/costumersLogos/36.png";

const ClientsContainer = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row className="client-div-main-row">
        <h3> عملاؤنا</h3>

        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image1} />
        </Col>

        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image5} />
        </Col>

        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image6} />
        </Col>

        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image7} />
        </Col>

        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image8} />
        </Col>

        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image13} />
        </Col>

        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image14} />
        </Col>

        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image15} />
        </Col>

        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image18} />
        </Col>
        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image19} />
        </Col>
        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image20} />
        </Col>

        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image21} />
        </Col>

        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image23} />
        </Col>
        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image24} />
        </Col>
        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image25} />
        </Col>

        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image26} />
        </Col>

        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image31} />
        </Col>
        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image32} />
        </Col>
        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image33} />
        </Col>
        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image34} />
        </Col>
        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image35} />
        </Col>
        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image36} />
        </Col>

        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image16} />
        </Col>

        <Col xl={2} lg={3} md={4} sm={6} xs={6}>
          <CilentsCard image={image30} />
        </Col>
      </Row>
    </Container>
  );
};

export default ClientsContainer;
