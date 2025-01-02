import { Col, Container, Row } from "react-bootstrap";
import "../../Styles/footer.css";
import logo from "../../Images/diverse/logo.png";
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
            <h4 className="footer-title">تطبيقات أودو</h4>
            <Row>
              {/* العمود الأول */}
              <Col md={6} sm={12}>
                <Link className="custom-link" to="/accounting">
                  <p className="footer-link"> المحاسبة </p>
                </Link>
                <Link className="custom-link" to="/knowledge">
                  <p className="footer-link"> المعرفة </p>
                </Link>
                <Link className="custom-link" to="/signature">
                  <p className="footer-link"> التوقيع الإلكتروني </p>
                </Link>
                <Link className="custom-link" to="/crm">
                  <p className="footer-link"> إدارة علاقات العملاء</p>
                </Link>
                <Link className="custom-link" to="/studio">
                  <p className="footer-link">الإستديو </p>
                </Link>
                <Link className="custom-link" to="/subscription">
                  <p className="footer-link">الإشتراكات </p>
                </Link>
                <Link className="custom-link" to="/rent">
                  <p className="footer-link">التأجير </p>
                </Link>
                <Link className="custom-link" to="/PointOfSale">
                  <p className="footer-link">نقطة البيع </p>
                </Link>
                <Link className="custom-link" to="/discuss">
                  <p className="footer-link">المناقشة </p>
                </Link>
                <Link className="custom-link" to="/document">
                  <p className="footer-link">المستندات </p>
                </Link>
                <Link className="custom-link" to="/project">
                  <p className="footer-link">المشروع </p>
                </Link>
                <Link className="custom-link" to="/webSite">
                  <p className="footer-link"> التوقيع الإلكتروني </p>
                </Link>
              </Col>

              {/* العمود الثاني */}
              <Col md={6} sm={12}>
                <Link className="custom-link" to="/socialMarketing">
                  <p className="footer-link"> التسويق الإجتماعي </p>
                </Link>
                <Link className="custom-link" to="/emailMarketing">
                  <p className="footer-link"> التسويق عبر البريد </p>
                </Link>
                <Link className="custom-link" to="/purchases">
                  <p className="footer-link"> المشتريات </p>
                </Link>
                <Link className="custom-link" to="/inventory">
                  <p className="footer-link"> المخزون </p>
                </Link>
                <Link className="custom-link" to="/manufacturing">
                  <p className="footer-link"> التصنيع </p>
                </Link>
                <Link className="custom-link" to="/sales">
                  <p className="footer-link"> المبيعات </p>
                </Link>
                <Link className="custom-link" to="/hr">
                  <p className="footer-link"> الموارد البشرية </p>
                </Link>
                <Link className="custom-link" to="/dashboard">
                  <p className="footer-link"> لوحة البيانات </p>
                </Link>
                <Link className="custom-link" to="/timeSheets">
                  <p className="footer-link">الجداول الزمنية </p>
                </Link>
                <Link className="custom-link" to="/fieldservice">
                  <p className="footer-link">الخدمات الميدانية </p>
                </Link>
                <Link className="custom-link" to="/planning">
                  <p className="footer-link">التخطيط </p>
                </Link>
                <Link className="custom-link" to="/helpDesk">
                  <p className="footer-link">مكتب المساعدة </p>
                </Link>
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
              <i className="fa-solid fa-tty"></i>:920003872
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
