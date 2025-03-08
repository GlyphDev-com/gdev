import React from "react";
import Header from "../../components/common/header";
import Space from "../../components/common/space";
import Footer from "../../components/common/footer";
import { useTranslation } from "react-i18next";

export default function Faq() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Space height="76px" backgroundColor="#010A1C" />

      <section className="container wh-2 ">
        <article style={{ margin: "32px" }}>
          <p>{t("faqIntroduction")}</p>
        </article>

        <section
          //   style={{ margin: "32px", padding: "32px", overflow: "scroll",display:"flex", flexDirection:"column", gap:"35px" }}
          className="d-flex flex-column m-4 gap-3 "
        >
          <article>
            <h1>{t("faqServiceEtExpertise")}</h1>
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
                    {t("quelsType")}
                  </button>
                </h2>
                <div
                  id="type"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#type"
                >
                  <div class="accordion-body">
                    {t("quelsTypeRe")}
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
                    {t("quelsCompetences")}
                  </button>
                </h2>
                <div
                  id="compentences"
                  className="accordion-collapse collapse"
                  data-bs-parent="#service"
                >
                  <div class="accordion-body">
                    {t("quelsCompetencesRe")}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article>
            <h1>{t("faqDeveloppementEtProcessus")}</h1>
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
                    {t("CommentFonctionneLeProcessus")}
                  </button>
                </h2>
                <div
                  id="dev"
                  className="accordion-collapse collapse"
                  data-bs-parent="#developpement"
                >
                  <div class="accordion-body">
                    {t("CommentFonctionneLeProcessusRe")}
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
                    {t("combienDeTemps")}
                  </button>
                </h2>
                <div
                  id="processus"
                  className="accordion-collapse collapse"
                  data-bs-parent="#developpement"
                >
                  <div class="accordion-body">
                    {t("combienDeTempsRe")}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article>
            <h1>{t("faqTarification")}</h1>
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
                    {t("commentDeterminerLeTarif")}
                  </button>
                </h2>
                <div
                  id="tarif"
                  className="accordion-collapse collapse"
                  data-bs-parent="#tarification"
                >
                  <div class="accordion-body">
                    {t("commentDeterminerLeTarifRe")}
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
                    {t("proposezDesForfaits")}
                  </button>
                </h2>
                <div
                  id="forfait"
                  className="accordion-collapse collapse"
                  data-bs-parent="#tarification"
                >
                  <div class="accordion-body">
                    {t("proposezDesForfaitsRe")}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article>
            <h1>{t("faqMaintenanceEtSupport")}</h1>
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
                    {t("offrerUnService")}
                  </button>
                </h2>
                <div
                  id="maintain"
                  className="accordion-collapse collapse "
                  data-bs-parent="#maintenance"
                >
                  <div class="accordion-body">
                    {t("offrerUnServiceRe")}
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
                    {t("commentGererLeSupport")}
                  </button>
                </h2>
                <div
                  id="support"
                  className="accordion-collapse collapse"
                  data-bs-parent="#maintenance"
                >
                  <div class="accordion-body">
                    {t("commentGererLeSupportRe")}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article>
            <h1>{t("faqLivraisonEtTest")}</h1>
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
                    {t("commentPuisJeTester")}
                  </button>
                </h2>
                <div
                  id="how"
                  className="accordion-collapse collapse show "
                  data-bs-parent="#livraison"
                >
                  <div class="accordion-body">
                    {t("commentPuisJeTesterRe")}
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
