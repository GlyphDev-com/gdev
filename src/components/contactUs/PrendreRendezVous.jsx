import React from "react";
import Partners from "../Home/Partners";
import {useTranslation} from "react-i18next";
import customer_service from "../../assets/customer_service.svg";

export default function PrendreRendezVous() {
  const {t} = useTranslation();

  return (
    <div className="bg-black w-100 mt-5 pt-5">
      <div className="container tablet-w-100 d-flex flex-row gap-5 align-items-end justify-content-between mobile-flex-column ipad-flex-column">
        <div className="left mx-3 col-6  ipad-w-100 ipad-m-0 mobile-w-100 mobile-m-0">
          <div className="title">
            <p
              className="gt-20 fw-bold mobile-text-center mobile-gt-10"
              style={{color: "rgb(51, 153, 255)"}}
            >
              Obtenez un rendez-vous avec un Chef de projet de Gdev.
            </p>
            <p className="gt-5 text-light fw-bold">
              <span >Via WhatsApp.</span>
              <a
                href="https://whatsapp.com/channel/0029Vb2tRgJBfxoDP6K2Di1S"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex bg-success align-items-center btn  text-light mobile-my-3 mobile-w-100 ipad-my-2 ipad-w-100 justify-content-center  gt-4 fw-bold p-2 width-fit-content"
                aria-label="Contactez-nous sur WhatsApp"
              >
                <span>{t("whatsapUs")}</span>
                <i className="bi bi-chevron-right text-light"></i>
              </a>
            </p>
          </div>
          <div>
            {/* Bloc 1: Entretien Téléphonique */}
            <div className="bloc1 my-4">
              <div className="entete fw-bold  text-white mb-2">
                <span className="icon mx-2">
                  <i className="bi bi-telephone"></i>
                </span>
                Entretien téléphonique
              </div>
              <div className="content">
                <p className="gt-5 wh-2 text-justify">
                  Lors de notre entretien téléphonique, après avoir présenté
                  votre produit et votre plan de développement à notre chef de
                  projet, il vous donnera un aperçu des enjeux majeurs, des
                  principes fondamentaux du processus de création de votre
                  application, des erreurs courantes à éviter, ainsi qu'une
                  estimation du temps et des coûts associés à sa réalisation.
                </p>
              </div>
            </div>

            {/* Bloc 2: Préparer l'entretien */}
            <div className="bloc2 my-4">
              <div className="entete fw-bold text-white mb-2">
                <span className="icon mx-2">
                  <i className="bi bi-clock"></i>
                </span>
                Bien préparer mon entretien
              </div>
              <div className="content">
                <p className="gt-5 wh-2 text-justify">
                  Avant notre rencontre, veillez à préparer autant de détails
                  que possible sur votre projet afin que nous puissions vous
                  apporter l'aide la plus pertinente. Pour vous y aider,
                  posez-vous les questions suivantes.
                </p>
                <ul className="wh-2">
                  <li>À quel public mon produit/service est-il destiné ?</li>
                  <li>
                    Quelles sont les problématiques auxquelles il répond ?
                  </li>
                </ul>
              </div>
            </div>

            {/* Bloc 3: Témoignages */}
            <div className="bloc3 d-flex my-5 align-items-center gap-4 mobile-flex-column ipad-flex-column">
              <div className="aimePar col-4 mobile-w-100 ipad-w-100 wh-2">
                Reconnu par plus de 10+ startups et entreprises.
              </div>
              <Partners
                style={{
                  color: "white w-100",
                }}
                className={"border-0 lift-0 gap-4 justify-content-center"}
                fixed={true}
                children={["virtual school", "SPD TECH", "parrain", "CodeMe"]}
                logoStyle={{height: "25px"}}
                nameClass={"wh-2"}
              />
            </div>
          </div>
        </div>

        <img
          src={customer_service}
          className="width-500 mx-3 mobile-w-100 ipad-w-100"
        />
      </div>
    </div>
  );
}
