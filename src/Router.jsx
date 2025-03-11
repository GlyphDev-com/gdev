import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx";
import ContactUs from "./pages/contactUs/contactUs.jsx";
import Faq from "./pages/FAQ/Faq.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/FAQ" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}
