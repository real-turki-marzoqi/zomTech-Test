/* eslint-disable react/prop-types */

import {  Container } from "react-bootstrap";

const BusinessSolutionsCards = ({title, text,img,lnk}) => {
  return (
   <Container>
    <div className="card mt-2">
      <a  className="card1" href={lnk}>
        <p>
          {title} 
        </p>
        <img className='hss-container-image' src={img} alt=""/>
        <p className="ps-small">  {text}</p>
        <div className="go-corner" href="#">
          <div className="go-arrow">→</div>
        </div>
      </a>
    </div>
    </Container>
  );
};

export default BusinessSolutionsCards;
  