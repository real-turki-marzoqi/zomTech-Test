import Container from "react-bootstrap/esm/Container";
import RoW from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import img1 from "../../Images/diverse/homePageImg2.png";
import img2 from "../../Images/diverse/homePage-section2-img2.png";
/* import img3 from "../../Images/diverse/homePage-section2-img3.gif"; */

import BtnsSectionContainer from "./btnsSectionContainer";

const HompePageSection3 = () => {
  return (
    <div className="homePageSection3">
      <Container>
        <RoW>
          <Col
            className="homePage-section3-img2-col"
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <img className="homePage-section3-img2" src={img2} alt="" />
          </Col>
        </RoW>

        <RoW>
          <Col
            className="homePage-section3-img3-col"
            xl={5}
            lg={5}
            md={5}
            sm={5}
            xs={5}
          >
            <BtnsSectionContainer />
          </Col>

          <Col xl={3} lg={3} md={3} sm={3} xs={3}>
            <img className="homePage-section2-img1" src={img1} />
          </Col>
        </RoW>
      </Container>
      <div style={{ backgroundColor: "" }} className="line-ltr">
        a
      </div>
    </div>
  );
};

export default HompePageSection3;
