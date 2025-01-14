import Container from "react-bootstrap/esm/Container";
import RoW from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import homePageImg1 from "../../Images/diverse/homePageImage1.gif";
import zoomTechName from "../../Images/diverse/ZoomtechName.png";


const HomePageFirstSection = () => {
  return (
    <Container>
      <RoW className="mt-2 mb-2 homePageFirstRow ">
     

        <Col
          className="homePageSection-1PageText-1 centerHomePage"
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
        >
          <img className="zoomTechName" src={zoomTechName} />
          <p className="homePageText1">
           
            نقدم لكم أحدث الحلول الأمنية المتكاملة لحماية ممتلكاتكم وضمان سلامة
            أعمالكم. مع تقنيات متقدمة وخبرات متميزة، نوفر أنظمة مراقبة حديثة،
            أنظمة تحكم بالدخول، واستشارات أمنية مصممة خصيصاً لتلبية احتياجاتكم.
            زوم تك الأمنية شريككم الأمثل للأمان والثقة.
          </p>
        </Col>

        <Col
          className="home-page-section--img-col centerHomePage"
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
        >
          <img className="HomePageImg1" src={homePageImg1} />
        </Col>
      </RoW>
    </Container>
  );
};

export default HomePageFirstSection;
  