import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import ServicesPublicSection from "../../components/common/servicesContactForm";


import Space from "../../components/common/space";
import Section2 from "../../components/Services/design/section2.jsx";

export default function Design() {
 
  return (
    <>
      <Header />
      <Space height="76px" backgroundColor="#010A1C" />
      <ServicesPublicSection
        heading="Create advertising posters for your companies with Glyphdev "
        paragraph="We transform y We turn your ideas into professional and attractive flyers that drive growth and user satisfaction.our ideas into intuitive and engaging mobile apps that drive growth and user satisfaction"
        advertPoints={[
          "On time delivery",
          "professionnal",
          "with perfect color code",
        ]}
      />

      <Section2 />

      <Footer />
    </>
  );
}