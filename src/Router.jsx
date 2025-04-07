import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx";
import ContactUs from "./pages/contactUs/contactUs.jsx";
import Faq from "./pages/FAQ/Faq.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import LanguageSwitcher from "./components/common/languageSwitcher.jsx";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/FAQ" element={<Faq />} />
      </Routes>
      <div
      className="position-fixed me-3 mobile-d-flex ipad-d-flex align-items-center justify-content-center rounded-circle lifth-2 bg-primary"
      style={{
        display: "none",
        right: "0",
        top: "calc(100% - 100px)",
        zIndex: "1",
        height: "50px",
        width: "50px",
      }}
    >
      <LanguageSwitcher className={"mobile-p-3 ipad-p-3 border-0 text-light"} />
    </div>
    </BrowserRouter>
  );
}
