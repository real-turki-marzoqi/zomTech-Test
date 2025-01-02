
import { Row, Container, Col } from "react-bootstrap";
import BtnsSectionCard from "./btnsSectionCard";
import { Link } from "react-router-dom";

import packages from '../../images/diverse/pakacgesbtn.svg'
import connectwithSystems from '../../images/diverse/connectWithSystemsBtn.svg'
import workprocces from '../../images/diverse/workProccesBtn.svg'
import blogbtn from '../../images/diverse/blogBtn.svg'



const BtnsSectionContainer = () => {
  return (
<Container
  className="btns-section-container custom-center-container"
  fluid
>
  <Row>
    <Col className="" xl={3} lg={6} md={6} sm={6} xs={6}>
      <Link className="custom-link" to={"/packages"}>
        <BtnsSectionCard
          icon={packages}
          text={"الباقات والعروض"}
        />
      </Link>
    </Col>

    <Col className="" xl={3} lg={6} md={6} sm={6} xs={6}>
     
        <BtnsSectionCard
          icon={connectwithSystems}
          text={"المنتجات"}
          lnk={"https://zoomtechsa.odoo.com/shop"}
        />
   
    </Col>

    <Col className=" " xl={3} lg={6} md={6} sm={6} xs={6}>
      <Link className="custom-link" to={"/annualContracts"}>
        <BtnsSectionCard
          icon={workprocces}
          text={"العقود السنوية"}
        />
      </Link>
    </Col>

    <Col className="" xl={3} lg={6} md={6} sm={6} xs={6}>
      <Link className="custom-link" to={"/blog"}>
        <BtnsSectionCard
          icon={blogbtn}
          text={"الخدمات الميدانية"}
        />
      </Link>
    </Col>
  </Row>
</Container>

  );
};

export default BtnsSectionContainer;
