import { Col, Container, Row } from "react-bootstrap";
import "../../Styles/footer.css";
import logo from "../../Images/diverse/footerLogo.png";
import { Link } from "react-router-dom";
import SocialMedia from "./socialMedia";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          {/* روابط مهمة*/}
          <Col xl={4} lg={4} md={4} sm={12} xs={12} className="footer-section">
            <h4 className="footer-title">روابط مهمة</h4>

            <Link className="custom-link" to="/freeConsultation">
              <p className="footer-link"> احصل على إستشارة مجانية</p>
            </Link>
            <Link className="custom-link" to="/businessSolutions">
              <p className="footer-link"> حلول أعمالنا</p>
            </Link>
            <Link className="custom-link" to="/ConnectingToSystems">
              <p className="footer-link"> الربط مع الأنظمة</p>
            </Link>
            <Link className="custom-link" to="/packages">
              <p className="footer-link"> الباقات والعروض</p>
            </Link>
            <Link className="custom-link" to="/blog">
              <p className="footer-link"> المدونة</p>
            </Link>
            <Link className="custom-link" to="/whyVisionFuture">
              <p className="footer-link"> لماذا نحن</p>
            </Link>
            <Link className="custom-link" to="/whoAreWe">
              <p className="footer-link"> من نحن</p>
            </Link>
            <Link className="custom-link" to="/workProcess">
              <p className="footer-link"> الية العمل</p>
            </Link>
          </Col>

          {/* روابط سريعة */}
          {/* روابط سريعة */}
          <Col xl={4} lg={4} md={4} sm={12} xs={12} className="footer-section">
            <h4 className="footer-title"> فروعنا</h4>
            <Row>
              <Col md={12} sm={12}>
                <p className="footer-link Branches "> فرع الرياض</p>

                <p className="footer-link">السجل التجاري: 1009037919 </p>

                <p className="footer-link">الترخيص: 24506113398 </p>

                <p className="footer-link Branches"> فرع الخبر</p>

                <p className="footer-link"> السجل التجاري: 5900148532 </p>

                <p className="footer-link"> الترخيص: 24506115290 </p>

                <p className="footer-link Branches"> فرع مكة</p>

                <p className="footer-link"> السجل التجاري: 4031310163 </p>

                <p className="footer-link"> الترخيص:24506120835 </p>

                <p className="footer-link Branches "> فرع جيزان</p>
                <p className="footer-link"> السجل التجاري: 5900148532</p>
                <p className="footer-link"> الترخيص:24506120835</p>
              </Col>
            </Row>
          </Col>

          {/* معلومات الاتصال */}
          <Col xl={4} lg={4} md={4} sm={12} xs={12} className="footer-section">
            <h4 className="footer-title">معلومات الإتصال</h4>

            <p className="footer-text">
              <i className="fa-solid fa-map-pin"></i>
              <br></br>
              الإدارة العامة:الرياض - حي الملك فهــد - طريق الملك عبدالعزيز
              الفرعي - مبنـــــى رقـــــــم 8246 - الـــدور الثانـــي مكتـــب 2
            </p>
            <p className="footer-text">
              الإدارة الإقليمية: جدة - حي الشرفية - طريق المدينة - مركز الخليج -
              الدور الأرضي - مكتب رقم 2-3
            </p>

            <br />
            <p className="footer-text">
              <i className="fa-solid fa-tty"></i> : 920003872
            </p>
            <p className="footer-text">
              <i className="fa-regular fa-envelope"></i> : info@zoomtechsa.com
            </p>
            <div className="footer-logo-container">
              <img src={logo} alt="Company Logo" className="footer-logo" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            className="footer-socialMedia"
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <SocialMedia />
          </Col>

          <Col
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className="footer-rights"
          >
            <p className="rights-text">
              All rights reserved to ZoomTech © 2024 | جميع الحقوق محفوظة لشركة
              زوم تك
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
