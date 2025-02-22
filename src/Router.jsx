import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx";
import MobileServices from "./pages/services/mobile.jsx";
import WebServices from "./pages/services/web.jsx";
import DesignServices from "./pages/services/design.jsx";
import ContactUs from "./pages/contactUs/contactUs.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/mobile" element={<MobileServices />} />
        <Route path="/services/web" element={<WebServices />} />
        <Route path="/services/design" element={<DesignServices />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}
