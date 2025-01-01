import HomePageMainVideo from "../Components/home/HomePageMainVideo";
import HomePageFirstSection from "../Components/home/homePageFirstSection";
import HomePageSecondSection from "../Components/home/homePageSecondSection";
import HompePageSection3 from "../Components/home/hompePageSection3";
import BusinessSolutionsContainer from "../Components/home/businessSolutionsContainer";
import PartnersContainer from '../Components/home/PartnersContainer'
import ClientsContainer from "../Components/home/clientsContainer";

import "../Styles/homePage.css";

const HomePage = () => {
  return (
    <>
      <HomePageMainVideo />

      <div className="line-rtl">a</div>
      <HomePageFirstSection />
      <HomePageSecondSection/>
      <HompePageSection3/>
      <div style={{backgroundColor:"#686f80"}} className="line-rtl">a</div>
      <BusinessSolutionsContainer/>
      <div style={{backgroundColor:""}} className="line-rtl">a</div>

      <ClientsContainer/>

      <div style={{backgroundColor:""}} className="line-ltr">a</div>
      <PartnersContainer/>
     
 
    </>
  );
};

export default HomePage;
