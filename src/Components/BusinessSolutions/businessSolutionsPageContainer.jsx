import { Container, Row } from "react-bootstrap";
import BusinessSolutionsPageCard from "./businessSolutionsPageCard";
import "../../Styles/BusinessSolutionsPage.css";
import img from "../../Images/diverse/maintenance.png";

import img1 from '../../Images/BusinessSolutions/1.svg'
import img2 from '../../Images/BusinessSolutions/2.svg'
import img3 from '../../Images/BusinessSolutions/3.svg'
import img4 from '../../Images/BusinessSolutions/4.svg'
import img5 from '../../Images/BusinessSolutions/5.svg'
import img6 from '../../Images/BusinessSolutions/6.svg'
import img7 from '../../Images/BusinessSolutions/7.svg'
import img8 from '../../Images/BusinessSolutions/8.svg'
import img9 from '../../Images/BusinessSolutions/9.svg'
/* import img9 from '../../Images/BusinessSolutions/1.svg' */


import brand1 from "../../Images/Partners/1.png";
import brand2 from "../../Images/Partners/2.png";
import brand3 from "../../Images/Partners/3.png";
import brand4 from "../../Images/Partners/4.png";
import brand5 from "../../Images/Partners/5.png";
import brand6 from "../../Images/Partners/6.png";
import brand7 from "../../Images/Partners/7.png";
import brand8 from "../../Images/Partners/8.png";
import brand9 from "../../Images/Partners/9.png";
import brand10 from "../../Images/Partners/10.png";
import brand11 from "../../Images/Partners/11.png";
import brand12 from "../../Images/Partners/12.png";
import brand13 from "../../Images/Partners/13.png";
import brand14 from "../../Images/Partners/14.png";
import brand15 from "../../Images/Partners/15.png";
import brand16 from "../../Images/Partners/16.png";
import brand17 from "../../Images/Partners/17.png";
import brand18 from "../../Images/Partners/18.png";
import brand19 from "../../Images/Partners/19.png";
import brand20 from "../../Images/Partners/20.png";
import brand21 from "../../Images/Partners/21.png";
import brand22 from "../../Images/Partners/22.png";
import brand23 from "../../Images/Partners/23.png";
import brand24 from "../../Images/Partners/24.png";
import brand25 from "../../Images/Partners/25.png";
import brand26 from "../../Images/Partners/26.png";

const BusinessSolutionsPageContainer = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row className="mb-2">
        <p className="bs-head">الحلول الأمنية والتقنية</p>
      </Row>
      <Row>
        <BusinessSolutionsPageCard
          title={" كاميرات المراقبة"}
          img={img1}
          brands={[
            { img: brand3, link: "https://zoomtechsa.odoo.com/shop/category/lmrkt-l-lmy-hikvision-kmyrt-mrqb-489" },
            { img: brand4, link: "/brand1" },
            { img: brand2, link: "/brand2" },
           
          ]}
        />
        <BusinessSolutionsPageCard
           title={"أجهزة التسجيل"}
          img={img9}
          brands={[
            { img: brand3, link: "https://zoomtechsa.odoo.com/shop/category/lmrkt-l-lmy-hikvision-jhz-ltsjyl-602" },
            { img: brand4, link: "/brand1" },
            { img: brand2, link: "/brand2" },
           
          ]}
        />
        <BusinessSolutionsPageCard
           title={"الشبكات وربط الفروع"}
          img={img2}
          brands={[
            { img: brand1, link: "/brand1" },
            { img: brand2, link: "/brand2" },
          ]}
        />

<BusinessSolutionsPageCard
             title={"السنترالات والإتصالات"}
          img={img3}
          brands={[
            { img: brand1, link: "/brand1" },
            { img: brand2, link: "/brand2" },
          ]}
        />


<BusinessSolutionsPageCard
          title={"بصمة الإصبع"}
          img={img4}
          brands={[
            { img: brand1, link: "/brand1" },
            { img: brand2, link: "/brand2" },
          ]}
        />


<BusinessSolutionsPageCard
           title={" المنزل الذكي"}
          img={img5}
          brands={[
            { img: brand1, link: "/brand1" },
            { img: brand2, link: "/brand2" },
          ]}
        />


<BusinessSolutionsPageCard
       title={" أجهزة الصوتيات"}
          img={img6}
          brands={[
            { img: brand1, link: "/brand1" },
            { img: brand2, link: "/brand2" },
          ]}
        />


<BusinessSolutionsPageCard
       title={" أجهزة الإنذار"}
          img={img7}
          brands={[
            { img: brand1, link: "/brand1" },
            { img: brand2, link: "/brand2" },
          ]}
        />

<BusinessSolutionsPageCard
          title={"التحكم بالأبواب"}
          img={img8}
          brands={[
            { img: brand1, link: "/brand1" },
            { img: brand2, link: "/brand2" },
          ]}
        />
                <BusinessSolutionsPageCard
            title={" بوابات مواقف السيارات"}
          img={img}
          brands={[
            { img: brand1, link: "/brand1" },
            { img: brand2, link: "/brand2" },
          ]}
        />


      </Row>
    </Container>
  );
};

export default BusinessSolutionsPageContainer;
