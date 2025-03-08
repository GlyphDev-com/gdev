import React from "react";
import Header from "../../components/common/header";
import Space from "../../components/common/space";
import Footer from "../../components/common/footer";

export default function Faq() {
  return (
    <>
      <Header />
      <Space height="76px" backgroundColor="#010A1C" />

      <section className="container wh-2 ">
        <article style={{ margin: "32px" }}>
          <p>
            Vous avez des questions concernant nos services de développement
            d'applications mobile/web et de pages web ? Nous avons rassemblé ici
            les réponses aux questions les plus courantes. Si vous ne trouvez
            pas ce que vous cherchez, n'hésitez pas à nous contacter
            directement.
          </p>
        </article>

        <section
        //   style={{ margin: "32px", padding: "32px", overflow: "scroll",display:"flex", flexDirection:"column", gap:"35px" }}
        className="d-flex flex-column m-4 gap-3 "
        >
          <article >
            <h1>Services et Expertise</h1>
            <div className="accordion" id="service">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#type"
                    aria-expanded="true"
                    aria-controls="type"
                  >
                    Quels types d’applications développez-vous ?
                  </button>
                </h2>
                <div
                  id="type"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#type"
                >
                  <div class="accordion-body">
                    Nous développons des applications mobiles pour iOS et
                    Android, des applications web et des pages web sur mesure,
                    adaptées aux besoins spécifiques de votre entreprise.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#compentences"
                    aria-expanded="false"
                    aria-controls="compentences"
                  >
                    Quelles sont vos principales compétences ?
                  </button>
                </h2>
                <div
                  id="compentences"
                  className="accordion-collapse collapse"
                  data-bs-parent="#service"
                >
                  <div class="accordion-body">
                    Nous sommes spécialisés dans le développement d’applications
                    mobiles natives, hybrides, ainsi que dans la création de
                    sites web interactifs et responsives en utilisant des
                    technologies comme React, Vue.js, Angular, etc.
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article>
            <h1>Développement et Processus</h1>
            <div className="accordion" id="developpement">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#dev"
                    aria-expanded="true"
                    aria-controls="dev"
                  >
                    Comment fonctionne le processus de développement d'une
                    application ?
                  </button>
                </h2>
                <div
                  id="dev"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#developpement"
                >
                  <div class="accordion-body">
                    Nous suivons une méthode agile, avec une première phase de
                    consultation pour comprendre vos besoins, puis des phases de
                    conception, de développement, de tests et de mise en
                    production. Nous vous tenons informé à chaque étape.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#processus"
                    aria-expanded="false"
                    aria-controls="processus"
                  >
                    Combien de temps faut-il pour développer une application ?
                  </button>
                </h2>
                <div
                  id="processus"
                  className="accordion-collapse collapse"
                  data-bs-parent="#developpement"
                >
                  <div class="accordion-body">
                    Le temps de développement dépend de la complexité de votre
                    projet. En moyenne, une application mobile peut prendre
                    entre 2 et 6 mois.
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article>
            <h1>Tarification</h1>
            <div className="accordion" id="tarification">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#tarif"
                    aria-expanded="true"
                    aria-controls="tarif"
                  >
                    Comment déterminez-vous vos tarifs ?
                  </button>
                </h2>
                <div
                  id="tarif"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#tarification"
                >
                  <div class="accordion-body">
                    Nos tarifs sont basés sur la complexité du projet, les
                    technologies nécessaires et le temps estimé pour la
                    réalisation. Nous proposons des devis personnalisés après
                    avoir évalué vos besoins.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#forfait"
                    aria-expanded="false"
                    aria-controls="forfait"
                  >
                    Proposez-vous des forfaits fixes ou des tarifs horaires ?
                  </button>
                </h2>
                <div
                  id="forfait"
                  className="accordion-collapse collapse"
                  data-bs-parent="#tarification"
                >
                  <div class="accordion-body">
                    Nous offrons les deux options. Selon la taille et la durée
                    de votre projet, nous vous proposerons un devis au forfait
                    ou un tarif horaire.
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article>
            <h1>Maintenance et Support</h1>
            <div className="accordion" id="maintenance">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#maintain"
                    aria-expanded="true"
                    aria-controls="maintain"
                  >
                    Offrez-vous un service de maintenance après la livraison ?
                  </button>
                </h2>
                <div
                  id="maintain"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#maintenance"
                >
                  <div class="accordion-body">
                    Oui, nous offrons des services de maintenance pour corriger
                    les bugs, effectuer des mises à jour ou ajouter de nouvelles
                    fonctionnalités.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#support"
                    aria-expanded="false"
                    aria-controls="support"
                  >
                    Comment gérez-vous le support après le lancement ?
                  </button>
                </h2>
                <div
                  id="support"
                  className="accordion-collapse collapse"
                  data-bs-parent="#maintenance"
                >
                  <div class="accordion-body">
                    Nous proposons une assistance technique continue, que ce
                    soit par email, téléphone ou chat en ligne. Nous assurons
                    aussi des mises à jour régulières pour garder vos
                    applications à jour.
                  </div>
                </div>
              </div>
            </div>
          </article>


          <article>
            <h1>Livraison et Tests</h1>
            <div className="accordion" id="livraison">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#how"
                    aria-expanded="true"
                    aria-controls="maintain"
                  >
                    Comment puis-je tester l’application avant la livraison ?
                  </button>
                </h2>
                <div
                  id="how"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#livraison"
                >
                  <div class="accordion-body">
                    Nous offrons des versions beta de l’application pour que vous puissiez tester les fonctionnalités avant la mise en ligne officielle. Nous effectuons aussi des tests utilisateurs pour garantir la qualité du produit.
                  </div>
                </div>
              </div>

              {/* <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#support"
                    aria-expanded="false"
                    aria-controls="support"
                  >
                    Comment gérez-vous le support après le lancement ?
                  </button>
                </h2>
                <div
                  id="support"
                  className="accordion-collapse collapse"
                  data-bs-parent="#maintenance"
                >
                  <div class="accordion-body">
                    Nous proposons une assistance technique continue, que ce
                    soit par email, téléphone ou chat en ligne. Nous assurons
                    aussi des mises à jour régulières pour garder vos
                    applications à jour.
                  </div>
                </div>
              </div> */}
            </div>
          </article>
        </section>
      </section>

      <Footer />
    </>
  );
}
