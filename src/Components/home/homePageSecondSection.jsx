import homePegsection2video1 from "../../videos/homePeg-section2-video1.mp4";

const HomePageSecondSection = () => {
  return (
    <div className="homePageSection2">
      <div style={{ backgroundColor: "" }} className="line-rtl">
        a
      </div>

      <div className="setion2-video-background">
        <video autoPlay loop={true} muted>
          <source src={homePegsection2video1} type="video/mp4" />
        </video>
      </div>
      <div style={{ backgroundColor: "" }} className="line-ltr">
        a
      </div>
    </div>
  );
};

export default HomePageSecondSection;
