/* eslint-disable react/prop-types */




const BtnsSectionCard = ({ text, icon }) => {
  return (
    <>


      <div className="home-btns-main-div">

        <img className="home-btns-img" src={icon}/>
        <p className="home-btns-title">{text}</p>

      </div>
 
    </>
  );
};

export default BtnsSectionCard;
