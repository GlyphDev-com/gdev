import React from "react";
import Header from "../../components/common/header";
import Space from "../../components/common/space";
import Footer from "../../components/common/footer";
import Services from "../../components/Home/Services";
import VirtualSchoolSection from "../../components/Home/virtual_school_section";
import GdevFormValidatorSection from "../../components/Home/form_validator_section";
import Features from "../../components/Home/Features";

export default function AboutUs() {
  return (
    <div  style={{backgroundColor:"#010A1C", color: "white"}}>
      <Header />
      <Space height="76px" backgroundColor="#010A1C" />
      <section className="container">
        <section>
          Nous sommes <span>Gdev</span>, une equipe de <span>developpeurs</span>  et <span>disigner</span> engages et
          passionnes par la <span>creation d'applications ,sites web</span> et le partage des notions de ces creations, <span>formations</span>.
        </section>
        <section>
          <h2>Vision et mission</h2>
          <div>
            <p>
              Nous nous rassurons d'apporter a chaque client une solution
              numerique adaptees a ses besoins grace a notre savoir faire dans
              la realisation d'interfaces intuitives, attractives, et ainsi que
              l'utilisation des technologies qui font leur preuves sur le marche
              actuel.
            </p>
          </div>
        </section>
        <section>
          Venez prendre part a nos nos processus de conception et de realisation
          a travers nos formations, et gagner en comptences dans la creation
          d'applications et sites performants et fluides.
        </section>
        <section>
          <Services />
          <Features/>
          <p className="d-flex justify-content-center mb-5">
            
          <button className="btn btn-success ">Contactez-Nous</button>
          </p>
        </section>
        <section>
            <h2 className="d-flex justify-content-center mb-3">Realisations</h2>
        <VirtualSchoolSection />
        <GdevFormValidatorSection />
        </section>
      </section>
      <Footer />
    </div>
  );
}
