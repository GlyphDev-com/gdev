import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx";
import ContactUs from "./pages/contactUs/contactUs.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}
