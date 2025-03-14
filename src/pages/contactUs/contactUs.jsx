import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import Space from "../../components/common/space";
import ContactUsForm from "../../components/contactUs/ContactUsForm";
import PrendreRendezVous from "../../components/contactUs/PrendreRendezVous";

export default function ContactUs() {
  return (
    <>
      <Header />
      <div
        className="overflow-hidden"
        style={{
          background:
            "radial-gradient(circle, rgba(32, 56, 73, .2) 0%, rgb(9, 7, 42) 50%, rgba(3, 1, 28, 0.32) 100%)",
        }}
      >
        <Space height="76px" backgroundColor="#010A1C" />

        <div className="text-center fw-bold gt-17 text-light my-5">
          Request an estimate for your project
        </div>
        <section className=" d-flex flex-column  gap-4 align-items-center justify-content-center overflow-hidden">
          <ContactUsForm />
          <PrendreRendezVous />
        </section>
        <Footer />
      </div>
    </>
  );
}
