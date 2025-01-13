/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";

const BusinessSolutionsPageCard = ({ img, title, brands }) => {
  return (
    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="bsCard mb-3">
      <div className="bsfirstDiv">
        <p className="bs-cardTitle">{title}</p>
        <img className="bsImg" src={img} alt={title} />
      </div>

      <div className="bs-footer-div">
        {brands?.map((brand, index) => (
          <Col key={index} className="be-brand-Col">
            <a href={brand.link} target="_blank" rel="noopener noreferrer">
              <img className="bs-brand-img" src={brand.img} alt={`Brand ${index + 1}`} />
            </a>
          </Col>
        ))}
      </div>
    </Col>
  );
};

export default BusinessSolutionsPageCard;
