
import { Row, Container, Col } from "react-bootstrap";
import BusinessSolutionsCards from "./businessSolutionsCards";
import CostumBtn from "../utils/costumBtn";

import securyCamera from "../../Images/diverse/security-camera.svg";
import network from "../../Images/diverse/network.svg";
 import central from "../../Images/diverse/central.svg"; 
import fingerprint from "../../Images/diverse/fingerprint.svg";
 import door from "../../Images/diverse/door-handle-svgrepo-com.svg"; 
import smarHome from "../../Images/diverse/smart-home-svgrepo-com.svg";
import speakr from "../../Images/diverse/speaker-high-volume-svgrepo-com.svg";
import alarm from "../../Images/diverse/fire-alarm-danger-svgrepo-com.svg";
import parking from "../../Images/diverse/parking-svgrepo-com.svg";

const BusinessSolutionsContainer = () => {
  return (
    <div className="BusinessSolutionsContainer">
      <Container className="">
        <Row>
          <p className="BusinessSolutionsHead">
            {" "}
            الحلول الأمنية <i className="fa-solid fa-shield-halved"></i>
          </p>
        </Row>
        <Row style={{}}>
          <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <BusinessSolutionsCards
              title={" كاميرات المراقبة"}
              text={""}
              img={securyCamera}
              lnk={
                "https://zoomtechsa.odoo.com/shop/category/lhlwl-lmny-wltqny-lnzm-lmny-kmyrt-mrqb-38"
              }
            />
          </Col>

          <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <BusinessSolutionsCards
              Icon={"fa-solid fa-industry homeIcons"}
              title={"الشبكات وربط الفروع"}
              text={""}
              img={network}
              lnk={
                "https://zoomtechsa.odoo.com/shop/category/lhlwl-lmny-wltqny-jhz-lwyrls-wlshbkt-5"
              }
            />
          </Col>

          <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <BusinessSolutionsCards
              title={"السنترالات والإتصالات"}
              img={central}
              lnk={
                "https://zoomtechsa.odoo.com/shop/category/lhlwl-lmny-wltqny-ltslt-wlsntrl-6"
              }
            />
          </Col>

          <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <BusinessSolutionsCards
              title={"بصمة الإصبع"}
              img={fingerprint}
              lnk={'https://zoomtechsa.odoo.com/shop/category/lhlwl-lmny-wltqny-jhz-lbsm-7'}
            />
          </Col>

          <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <BusinessSolutionsCards
              title={" المنزل الذكي"}
              lnk={'https://zoomtechsa.odoo.com/shop/category/lhlwl-lmny-wltqny-lntrkwm-wljrs-ldhky-8'}
              img={smarHome}
            />
          </Col>
          <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <BusinessSolutionsCards
              title={" أجهزة الصوتيات"}
              lnk={"https://zoomtechsa.odoo.com/shop/category/lhlwl-lmny-wltqny-lnzm-lswty-12"}
              img={speakr}
            />
          </Col>

          <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <BusinessSolutionsCards
              title={" أجهزة الإنذار"}
              lnk={"https://zoomtechsa.odoo.com/shop/category/lhlwl-lmny-wltqny-nzm-lndhr-lmbkr-10"}
              img={alarm}
            />
          </Col>

          <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <BusinessSolutionsCards
              title={"التحكم بالأبواب"}
              lnk={"https://zoomtechsa.odoo.com/shop/category/lhlwl-lmny-wltqny-jhz-lthkm-bldkhwl-9"}
              img={door}
            />
          </Col>

          <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <BusinessSolutionsCards
              title={" بوابات مواقف السيارات"}
              lnk={"https://zoomtechsa.odoo.com/shop/category/lhlwl-lmny-wltqny-nzm-hwjz-mwqf-lsyrt-11"}
              img={parking}
            />
          </Col>
        </Row>

    
          <CostumBtn text="تصفح كل الحلول" />
     
      </Container>

      <div style={{backgroundColor:""}} className="line-rtl">a</div>
    </div>
  );
};

export default BusinessSolutionsContainer;
