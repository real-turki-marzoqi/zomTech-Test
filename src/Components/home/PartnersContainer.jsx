import { Row, Container, Col } from "react-bootstrap";
import PartnersCard from "./PartnersCard";
import image0 from "../../Images/Partners/p1.png";
import image1 from "../../Images/Partners/p2.png";
import image2 from "../../Images/Partners/p3.png";
import image3 from "../../Images/Partners/p4.png";
import image4 from "../../Images/Partners/p5.png";
import image5 from "../../Images/Partners/p6.png";

import image6 from "../../Images/Partners/p7.png";
import image7 from "../../Images/Partners/p8.png";
import image8 from "../../Images/Partners/p9.png";
import image9 from "../../Images/Partners/p10.png";
import image10 from "../../Images/Partners/p11.png";
import image11 from "../../Images/Partners/p12.png";
import image12 from "../../Images/Partners/p13.png";
import image13 from "../../Images/Partners/p14.png";
import image14 from "../../Images/Partners/p15.png";
import image15 from "../../Images/Partners/p16.png";
import image16 from "../../Images/Partners/p17.png";
import image17 from "../../Images/Partners/p18.png";
import image18 from "../../Images/Partners/p19.png";
import image19 from "../../Images/Partners/p20.png";
import image20 from "../../Images/Partners/p21.png";
import image21 from "../../Images/Partners/p22.png";
import image22 from "../../Images/Partners/p23.png";
import image23 from "../../Images/Partners/p24.png";

const PartnersContainer = () => {
  return (
    <div className="PartnersContainer">
      <div style={{ backgroundColor: "" }} className="line-ltr">
        a
      </div>
      <Container>
        <Row>
          <h3> شركاؤنا</h3>

          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image0} />
          </Col>

          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image1} />
          </Col>

          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image2} />
          </Col>

          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image3} />
          </Col>

          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image4} />
          </Col>

          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image5} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image6} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image7} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image8} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image9} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image10} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image11} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image12} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image13} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image14} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image15} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image16} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image17} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image18} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image19} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image20} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image21} />
          </Col>

          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image22} />
          </Col>
          <Col xl={2} lg={2} md={3} sm={6} xs={6}>
            <PartnersCard image={image23} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PartnersContainer;
