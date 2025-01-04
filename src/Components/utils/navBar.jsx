import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../Images/diverse/logo.png";
import saVision from "../../Images/diverse/SaVision.png";
import "../../Styles/navBar.css";
import { Link } from "react-router-dom";

/* a */
const NavBar = () => {
  return (
    <>
      <div className="NavBar-main">
        <Navbar bg="link" expand="lg" className="custom-navbar">
          <Container>
            <Link to="./">
              <img className="logo" alt="الشعار" src={Logo} />
            </Link>

            <div className="navbar-center-text-container">
              <p className="navbar-center-text">شركة زوم تك للحلول الأمنية</p>
              <p className="navbar-second-center-text ">
                إحدى مجموعة شركات محمد شربتلي التجارية
              </p>
            </div>

            {/* زر التبديل لعرض الروابط في الشاشات الصغيرة */}
            <Navbar.Toggle
              aria-controls="navbar-nav"
              className="custom-navbar-toggle"
            />

            <Navbar.Collapse id="navbar-nav">
              <Nav className="me-auto nav-links-container">
                {" "}
                {/* تعديل هنا */}
                <Link className="custom-link" to="./">
                  <p className="link-text">الرئيسية</p>
                </Link>
                <Link className="custom-link" to="/annualContracts">
                  <p className="link-text"> العقود السنوية</p>
                </Link>
                <Link className="custom-link" to="/packages">
                  <p className="link-text">باقاتنا</p>
                </Link>

                <Link className="custom-link" to="/whoAreWe">
                  <p className="link-text">من نحن</p>
                </Link>
                <p>
                  <a
                    className="custom-link"
                    href="https://zoomtechsa.odoo.com/ "
                  >
                    المتجر الإلكتروني
                  </a>
                </p>
              </Nav>
              <Link to="./">
                <img className="sa-logo" alt="الشعار" src={saVision} />
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* الخط تحت الشعار */}
    </>
  );
};

export default NavBar;
