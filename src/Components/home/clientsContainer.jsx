import { Row, Container, Col } from "react-bootstrap";
import CilentsCard from "./cilentsCard";

import image1 from "../../Images/costumersLogos/1.png";

import image5 from "../../Images/costumersLogos/5.png";
import image6 from "../../Images/costumersLogos/6.png";
import image7 from "../../Images/costumersLogos/7.png";
import image8 from "../../Images/costumersLogos/8.png";

import image13 from "../../Images/costumersLogos/13.png";
import image14 from "../../Images/costumersLogos/14.png";
import image15 from "../../Images/costumersLogos/15.png";
import image16 from "../../Images/costumersLogos/16.png";
import image18 from "../../Images/costumersLogos/18.png";
import image19 from "../../Images/costumersLogos/19.png";
import image20 from "../../Images/costumersLogos/20.png";
import image21 from "../../Images/costumersLogos/21.png";
import image23 from "../../Images/costumersLogos/23.png";
import image24 from "../../Images/costumersLogos/24.png";
import image25 from "../../Images/costumersLogos/25.png";
import image26 from "../../Images/costumersLogos/26.png";
import image30 from "../../Images/costumersLogos/30.jpeg";
import image31 from "../../Images/costumersLogos/31.png";
import image32 from "../../Images/costumersLogos/32.png";
import image33 from "../../Images/costumersLogos/33.png";
import image34 from "../../Images/costumersLogos/34.png";
import image35 from "../../Images/costumersLogos/35.png";
import image36 from "../../Images/costumersLogos/36.png";

const ClientsContainer = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row className="client-div-main-row">
        <h3 className="mb-5"> عملاؤنا</h3>

        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image1} />
        </Col>

        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image5} />
        </Col>

        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image6} />
        </Col>

        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image7} />
        </Col>

        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image8} />
        </Col>

        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image13} />
        </Col>

        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image14} />
        </Col>

        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image15} />
        </Col>

        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image18} />
        </Col>
        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image19} />
        </Col>
        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image20} />
        </Col>

        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image21} />
        </Col>

        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image23} />
        </Col>
        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image24} />
        </Col>
        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image25} />
        </Col>

        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image26} />
        </Col>

        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image31} />
        </Col>
        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image32} />
        </Col>
        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image33} />
        </Col>
        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image34} />
        </Col>
        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image35} />
        </Col>
        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image36} />
        </Col>

        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image16} />
        </Col>

        
        <Col xl={1} lg={2} md={3} sm={4} xs={3}>
          <CilentsCard image={image30} />
        </Col>
      </Row>
    </Container>
  );
};

export default ClientsContainer;
