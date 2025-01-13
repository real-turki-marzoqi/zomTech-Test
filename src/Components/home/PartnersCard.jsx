// eslint-disable-next-line react/prop-types
const PartnersCard = ({ image, lnk }) => {
  return (
    <a className="custom-link" href={lnk}>
      <div className="partners-dev">
        <img className="partners-img" src={image} alt="partners-logos" />
      </div>
    </a>
  );
};

export default PartnersCard;
