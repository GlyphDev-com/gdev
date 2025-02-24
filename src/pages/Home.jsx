import Header from "../components/common/header.jsx";
import Section1 from "../components/Home/section1.jsx";
import Section2 from "../components/Home/section2.jsx";
import Section3 from "../components/Home/section3.jsx";

import Footer from "../components/common/footer.jsx";
import VirtualSchoolSection from "../components/Home/virtual_school_section.jsx";
import GdevFormValidatorSection from "../components/Home/form_validator_section.jsx";
import {useEffect} from "react";
import Features  from "../components/Home/Features.jsx";
import Partners from "../components/Home/Partners.jsx";
import Services from "../components/Home/Services.jsx";


export default function Home() {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, []);
  return (
    <div style={{backgroundColor: "rgb(3, 1, 28)", overflowX:"hidden"}} >
      <Header />
      <Section1 />
      <Partners/>
      <Section2 />
      <VirtualSchoolSection />
      <GdevFormValidatorSection />
      <Features />
      <Services/>
      <Section3 />
      <Footer />
    </div>
  );
}