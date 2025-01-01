
import { Row, Container, Col } from "react-bootstrap";
import PartnersCard from "./PartnersCard";
import image0 from "../../images/Partners/p1.png";
import image1 from "../../images/Partners/p2.png";
import image2 from "../../images/Partners/p3.png";
import image3 from "../../images/Partners/p4.png";
import image4 from "../../images/Partners/p5.png";
import image5 from "../../images/Partners/p6.png";



const PartnersContainer = () => {
  return (

    <div  className="PartnersContainer" >
       <div style={{backgroundColor:""}} className="line-ltr">a</div>
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

        

       
      </Row>
    </Container>
    </div>
  );
};


export default PartnersContainer;
