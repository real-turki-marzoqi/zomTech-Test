import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../Images/diverse/zoomTechLogo.png";
import savision from "../../Images/diverse/SaVision.png";
import "../../Styles/secondNavBar.css";

const SecondNavBar = () => {
  return (
    <div className="secondNavBar-Main">
      <Container className="secondNavBar-container">
        <Row className="secondNavBar-Row">
          <Col
            className="secondNavBar-col secondNavBar-logo-col"
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
          >
            <img className="secondNavBar-logo" src={logo} />
          </Col>

          <Col
            xl={9}
            lg={9}
            md={9}
            sm={9}
            xs={9}
            className="secondNavBar-col secondNavBar-links-col"
          >
  
            <Link to="./" className="secondNavBar-Link">
              الرئيسية  
            </Link>
            <a href="https://zoomtechsa.odoo.com/ "className="secondNavBar-Link">
             المتجر الإلكتروني
            </a>
            <Link  to="/annualContracts" className="secondNavBar-Link">
            العقود السنوية
            </Link>
            <Link to={'/packages'} className="secondNavBar-Link">
            باقاتنا
            </Link>
            <Link to="/whoAreWe" className="secondNavBar-Link">
           من نحن
            </Link>

          
          </Col>

          <Col
            xl={1}
            lg={1}
            md={1}
            sm={1}
            xs={1}
            className="secondNavBar-col secondNavBar-savsion-col"
          >
            <img className="secondNavBar-savsion" src={savision} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SecondNavBar;
