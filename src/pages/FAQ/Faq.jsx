import React from "react";
import Header from "../../components/common/header";
import Space from "../../components/common/space";
import Footer from "../../components/common/footer";
import {useTranslation} from "react-i18next";

export default function Faq() {
  const {t} = useTranslation();

  return (
    <>
      <Header />
      <Space height="76px" backgroundColor="#010A1C" />

      <section className="container wh-2 my-4" style={{overflow: "hidden"}}>
        <article className="mobile-m-0" style={{margin: "32px"}}>
          <p>{t("faqIntroduction")}</p>
        </article>

        <section className="d-flex flex-column m-4 gap-3 mobile-m-0 ipad-m-0">
          <article>
            <h1 className="text-light">{t("faqServiceEtExpertise")}</h1>
            <div className="accordion" id="service">
              <div className="accordion-item ">
                <h2 className="accordion-header">
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
                  <div className="accordion-body">{t("quelsTypeRe")}</div>
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
                  <div className="accordion-body">
                    {t("quelsCompetencesRe")}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article>
            <h1 className="text-light">{t("faqDeveloppementEtProcessus")}</h1>
            <div className="accordion" id="developpement">
              <div className="accordion-item">
                <h2 className="accordion-header">
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
                  <div className="accordion-body">
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
                  <div className="accordion-body">{t("combienDeTempsRe")}</div>
                </div>
              </div>
            </div>
          </article>

          <article>
            <h1 className="text-light">{t("faqTarification")}</h1>
            <div className="accordion" id="tarification">
              <div className="accordion-item">
                <h2 className="accordion-header">
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
                  <div className="accordion-body">
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
                  <div className="accordion-body">
                    {t("proposezDesForfaitsRe")}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article>
            <h1 className="text-light">{t("faqMaintenanceEtSupport")}</h1>
            <div className="accordion" id="maintenance">
              <div className="accordion-item">
                <h2 className="accordion-header">
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
                  <div className="accordion-body">{t("offrerUnServiceRe")}</div>
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
            <h1 className="text-light">{t("faqLivraisonEtTest")}</h1>
            <div className="accordion" id="livraison">
              <div className="accordion-item">
                <h2 className="accordion-header">
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
                  <div class="accordion-body">{t("commentPuisJeTesterRe")}</div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </section>

      <Footer />
    </>
  );
}
