/* eslint-disable react/prop-types */




const BtnsSectionCard = ({ text, icon ,lnk}) => {
  return (
    <>

<a className="custom-link" href={lnk}>


      <div className="home-btns-main-div">

        <img className="home-btns-img" src={icon}/>
        <p className="home-btns-title">{text}</p>

      </div>
      </a>
    </>
  );
};

export default BtnsSectionCard;
