import Header from "../../components/public/header.jsx";
import Footer from "../../components/public/footer.jsx";
import Space from "../../components/public/space.jsx";
import Service from "../../components/public/servicesContactForm.jsx";
import Section2 from "../../../src/components/Services/web/section2";
export default function Web() {
 
  return (
    <>
      <Header />
      <Space height="76px" backgroundColor="#010A1C" />
      <Service
        heading="Bienvenue chez  GDev votre allié pour une présence numérique personnalisée et efficace."
        paragraph="Nous concevons des sites web qui vont au-delà des attentes, mettant en valeur votre marque de manière distinctive et originale."
        advertPoints={[
          "Delai de livraison court",
          "Modification du site web Facile",
          "Accessible depuis n'importe quel navigateur",
          "suivie et maintenance du site web",
        ]}
      />

      <Section2 />
      <Footer />
    </>
  );
}