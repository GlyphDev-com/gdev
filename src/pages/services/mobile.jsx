//import the header
import Header from "../../components/common/header";
//import the footer
import Footer from "../../components/common/footer";
//import the servicesPublicSection
import ServicesPublicSection from "../../components/common/servicesContactForm";

//import the card view

import Section2 from "../../components/Services/mobile/section2.jsx";


//import space from spacer component

import Space from '../../components/common/space'

export default function Mobile() {
  
  return (
    <div
      style={{
        backgroundColor: "#010c22",
      }}
    >
      <Header />
      <Space height="76px" backgroundColor="#010A1C" />
      <ServicesPublicSection
        heading="Craft Powerful Mobile Apps with Gdev pen_spark"
        paragraph="We transform your ideas into intuitive and engaging mobile apps that drive growth and user satisfaction.
pen_spark."
        advertPoints={[
          "On-time delivery",
          "Highly-Scalable apps",
          "Cross-platform apps",
          "App maintenance and support",
        ]}
      />

      <Section2 />

      <Footer />
    </div>
  );
}