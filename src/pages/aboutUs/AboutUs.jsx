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
    <div style={{ backgroundColor: "#010A1C", color: "#9FABC0" }}>
      <Header />
      <Space height="76px" backgroundColor="#010A1C" />

      <section className="container">
        {/* Section introduction */}
        <section>
          <p>
            Nous sommes <span>Gdev</span>, une équipe de <span>développeurs</span> et <span>designers</span> passionnés par la
            <span> création d'applications, de sites web</span>, et le partage de nos connaissances à travers des <span>formations</span>.
          </p>
        </section>

        {/* Vision et mission */}
        <section>
          <h2 className="text-white">Vision et mission</h2>
          <div>
            <p>
              Nous nous assurons d'apporter à chaque client une solution numérique adaptée à ses besoins grâce à notre expertise dans
              la réalisation d'interfaces intuitives et attractives, en utilisant les technologies les plus performantes du marché.
            </p>
          </div>
        </section>

        {/* Invitation à rejoindre les formations */}
        <section>
          <p>
            Venez prendre part à nos processus de conception et de réalisation à travers nos formations, et gagnez en compétences
            dans la création d'applications et de sites performants et fluides.
          </p>
        </section>

        {/* Services et fonctionnalités */}
        <section>
          <Services />
          <Features />
          <p className="d-flex justify-content-center mb-5">
            <button className="btn btn-success">Contactez-Nous</button>
          </p>
        </section>

        {/* Réalisations */}
        <section>
          <h2 className="d-flex justify-content-center mb-3 text-white">Réalisations</h2>
          <VirtualSchoolSection />
          <GdevFormValidatorSection />
        </section>
      </section>

      <Footer />
    </div>
  );
}
