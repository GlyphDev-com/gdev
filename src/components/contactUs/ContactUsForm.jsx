import React from "react";

export default function ContactUsForm() {
  return (
    <div className="text-white">
      <form
        id="myForm"
        lang="en"
        className="width-700 mobile-w-100 ipad-w-100"
        form_validator_design="ifta-label"
        response_exclude='["pToggle"]'
      >
        <div className="d-flex gap-2 flex-wrap w-100 my-2">
          <div className="gdev-field-wrapper flex-grow-1  flex-shrink-0">
            <div className="capsule">
              <label htmlFor="nom">Nom ou societe</label>
              <input
                type="text"
                className=" border-t-0  border-l-0 border-r-0 br-0 border-secondary text-light mt-4"
                id="nom"
                placeholder="Kenfack Nkrumah"
                name="nom"
                gdev_props='{"name":"nom","type":"text", "minWord": "2"}'
              />
            </div>
            
          </div>

          <div className="gdev-field-wrapper flex-grow-1  flex-shrink-0">
            <div className="capsule">
              <label htmlFor="mail">Adress e-mail</label>
              <input
                type="email"
                className=" border-t-0  border-l-0 border-r-0 br-0 border-secondary mt-4 text-light"
                placeholder="Nkrumah@mail.com"
                id="mail"
                name="mail"
                gdev_props='{"name":"mail","type":"password", "securityLevel": "s3"}'
              />
            </div>
            
          </div>
        </div>

        <div className="d-flex gap-2 flex-wrap w-100 my-4">
          <div className="gdev-field-wrapper flex-grow-1">
            <div className="capsule">
              <label htmlFor="tel">Numero de telephone</label>
              <input
                type="tel"
                className=" border-t-0  border-l-0 border-r-0 br-0 border-secondary mt-4 text-light"
                id="tel"
                placeholder="+23765498xxxx"
                name="tel"
                gdev_props='{"name":"tel","type":"text", "minWord": "2"}'
              />
            </div>
          </div>

          <div className="gdev-field-wrapper flex-grow-1">
            <div className="capsule">
              <label htmlFor="budget">Budget (fcfa)</label>
              <input
                type="number"
                className=" border-t-0  border-l-0 border-r-0 br-0 border-secondary mt-4 text-light"
                placeholder="800000"
                id="budget"
                name="budget"
                gdev_props='{"name":"budget","type":"number", "min": "7"}'
              />
            </div>
          </div>
        </div>

        <div className="gdev-field-wrapper my-4">
          <div className="capsule">
            <label htmlFor="entreprise">Entreprise</label>
            <input
              type="text"
              placeholder="Societe Nkrumah"
              className=" border-t-0  border-l-0 border-r-0 br-0 border-secondary text-light mt-4"
              id="entreprise"
              name="entreprise"
              gdev_props='{"name":"entreprise","type":"password", "securityLevel": "s3"}'
            />
          </div>
          <span class="gdev-error"></span>
        </div>

        <div className="gdev-field-wrapper my-4">
          <div className="capsule">
            <label htmlFor="message">Message</label>
            <textarea
              type="text "
              placeholder="Bonjour, nous sommes interesser par votre service de creation d'application web.Merci de nous recontacter pour une une discussion plus eloborer a ce sujet "
              id="message"
              className="py-4 height-150 border-t-0  border-l-0 border-r-0 br-0 border-secondary sb-i text-light mt-4"
              name="message"
              gdev_props='{"name":"message","type":"password", "securityLevel": "s3"}'
            />
          </div>
          <span class="gdev-error"></span>
        </div>

        <div className="mt-3 d-flex justify-content-center">
          <button type="submit" className="btn lift-3 btn-primary px-4 rounded-pill">
            Envoyer ma demande
          </button>
        </div>
      </form>
    </div>
  );
}
