
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/packages.css";

import img from "../Images/packages/zoomTech2.png";
import warehouse from "../Images/packages/warehouse.png";
import shop from "../Images/packages/shop.png";
import houses from "../Images/packages/Houses.png";
const Packages = () => {
  return (
  

      <Container className="mt-2 mb-2 pakecase-main-con">
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="p-head-col">
            <p className="p-head"> باقات وعروض</p>
            <img src={img} alt="" className="p-main-image" />
          </Col>
        </Row>

        <Row>
          <Col className="p-main-col" xl={4} lg={4} md={12} sm={12} xs={12}>
            <a
              className="custom-link"
              href="https://zoomtechsa.odoo.com/shop/category/l-rwd-wlbqt-lmtkml-bqt-lmstwd-t-367"
            >
              <div className="p-main-div">
                <img className="p-imgs" alt="warehouse" src={warehouse} />
                <p className="p-title">باقات المستودعات</p>
              </div>
            </a>
          </Col>

          <Col className="p-main-col" xl={4} lg={4} md={12} sm={12} xs={12}>
            <a
              className="custom-link"
              href="https://zoomtechsa.odoo.com/shop/category/l-rwd-wlbqt-lmtkml-bqt-lmhlt-ltjry-364"
            >
              <div className="p-main-div">
                <img className="p-imgs" alt="shops" src={shop} />
                <p className="p-title">باقات المحلات</p>
              </div>
            </a>
          </Col>

          <Col className="p-main-col" xl={4} lg={4} md={12} sm={12} xs={12}>
            <a
              className="custom-link"
              href="https://zoomtechsa.odoo.com/shop/category/l-rwd-wlbqt-lmtkml-bqt-lmnzl-366"
            >
              <div className="p-main-div">
                <img className="p-imgs" alt="houses" src={houses} />
                <p className="p-title">باقات المنازل</p>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
   
  );
};

export default Packages;
