import React from "react";
import Header from "../../components/common/header";
import Space from "../../components/common/space";
import Footer from "../../components/common/footer";
import Services from "../../components/Home/Services";
import VirtualSchoolSection from "../../components/Home/virtual_school_section";
import GdevFormValidatorSection from "../../components/Home/form_validator_section";
import Features from "../../components/Home/Features";
import Section1 from "../../components/about/Section1";
import ContactUsForm from "../../components/contactUs/ContactUsForm";
import WhoWeAre from "../../components/about/WhoWeAre";
import VisionAndMission from "../../components/about/VisionAndMission";
import TechSolutions from "../../components/about/TechSolutions";

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <Space height="70px" backgroundColor="#010A1C" />
        <Section1 />
        <div className="container d-flex flex-column justify-content-center align-items-center my-5">
          <div className="text-center fw-bold gt-17 text-light my-5 mobile-gt-9">
            Request an estimate for your project
          </div>
          <ContactUsForm />
        </div>
        <WhoWeAre />
        <VisionAndMission />
        <TechSolutions />
        <Footer />
      </div>
    </>
  );
}
