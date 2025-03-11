import React from "react";
import Partners from "../Home/Partners";
import { useTranslation } from "react-i18next";

export default function PrendreRendezVous() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="left">
        <div className="title">
          <p className="fs-3">
            Obtenez un rendez-vous avec un Chef de projet de Gdev.
          </p>
          <p>
            Via WhatsApp.
            <a
              href="https://whatsapp.com/channel/0029Vb2tRgJBfxoDP6K2Di1S"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex bg-success align-items-center btn border-r-1 border-l-1 border-color-jira text-light mobile-my-2 mobile-w-100 justify-content-center  gt-4 fw-bold p-2 width-fit-content"
              aria-label="Contactez-nous sur WhatsApp"
            >
              <span>{t("whatsapUs")}</span>
              <i className="bi bi-chevron-right text-light"></i>
            </a>
          </p>
        </div>
        <div className="contain">
          {/* Bloc 1: Entretien Téléphonique */}
          <div className="bloc1">
            <div className="entete fs-5">
              <span className="icon mx-2">
                <i className="bi bi-telephone-fill"></i>
              </span>
              Entretien téléphonique
            </div>
            <div className="content">
              <p>
                Lors de notre entretien téléphonique, après avoir présenté votre
                produit et votre plan de développement à notre chef de projet,
                il vous donnera un aperçu des enjeux majeurs, des principes
                fondamentaux du processus de création de votre application, des
                erreurs courantes à éviter, ainsi qu'une estimation du temps et
                des coûts associés à sa réalisation.
              </p>
            </div>
          </div>

          {/* Bloc 2: Préparer l'entretien */}
          <div className="bloc2">
            <div className="entete fs-5">
              <span className="icon mx-2">
                <i className="bi bi-clock-fill"></i>
              </span>
              Bien préparer mon entretien
            </div>
            <div className="content">
              <p>
                Avant notre rencontre, veillez à préparer autant de détails que
                possible sur votre projet afin que nous puissions vous apporter
                l'aide la plus pertinente. Pour vous y aider, posez-vous les
                questions suivantes.
              </p>
              <ul>
                <li>À quel public mon produit/service est-il destiné ?</li>
                <li>Quelles sont les problématiques auxquelles il répond ?</li>
                <li>Quelles fonctionnalités pourrais-je inclure ?</li>
                <li>Comment mon projet se présenterait-il visuellement ?</li>
                <li>
                  Quelle est la contrainte de temps à laquelle je peux me
                  soumettre ?
                </li>
              </ul>
              <p>
                Si vous n'avez pas encore tous les détails concernant votre
                projet, n'hésitez pas à nous en faire part au début de votre
                rendez-vous.
              </p>
            </div>
          </div>

          {/* Bloc 3: Témoignages */}
          <div className="bloc3 d-flex justify-content-center align-items-center gap-4">
            <div className="aimePar">
              A aimé par plus de 10 startups et entreprises.
            </div>
            <div className="DefilerStartup w-75">
              <Partners />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
