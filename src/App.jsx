import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/utils/navBar";
import Footer from "./Components/utils/footer";
import HomePage from "./Pages/homePage.jsx";
import Packages from "./Pages/packages.jsx";
import ScrollToTop from "./Components/utils/ScrollToTop";
import AnnualContracts from "./Pages/annualContracts";
import NotFoundPage from './Pages/notFoundPage.jsx'




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
        <Route path="/packages" element={<Packages />} />
        <Route path="/annualContracts" element={<AnnualContracts />} />
        <Route path="/*" element={<NotFoundPage />} />
        {/*  <Route path="/whyVisionFuture" element={<WhyVisionFuturePage />} />
      
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/whoAreWe" element={<WhoAreWe />} />
       */}
      </Routes>

      {/* المكونات المشتركة */}
      <Footer />
    </div>
  );
}

export default App;
