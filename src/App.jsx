
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/utils/navBar";
import Footer from "./Components/utils/footer"; 
import HomePage from "./Pages/HomePage";
/* import WhyVisionFuturePage from "./Pages/whyVisionFuturePage";
import BlogPage from "./Pages/blogPage";
import Packages from "./Pages/packages";
import AnnualContracts from "./Pages/annualContracts.js"; */

import ScrollToTop from "./Components/utils/ScrollToTop";
/* import WhoAreWe from "./Pages/whoAreWe.js"; */

//blog pages

function App() {
  return (
    <div className="app">
      {/* المكونات المشتركة */}
      <ScrollToTop />
      <NavBar />

      {/* التوجيه */}
      <Routes>
        <Route path="/" element={<HomePage />} />
       {/*  <Route path="/whyVisionFuture" element={<WhyVisionFuturePage />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/whoAreWe" element={<WhoAreWe />} />
        <Route path="/annualContracts" element={<AnnualContracts />} /> */}
      </Routes>

      {/* المكونات المشتركة */}
       <Footer /> 
    </div>
  );
}

export default App;
