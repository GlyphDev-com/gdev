import "aos/dist/aos.css";
import "./section3.css";
import { useTranslation } from "react-i18next";

export default function Section3() {
const {t} = useTranslation()

  return (
    <div id="section3">
      <div className="left "></div>
      <form
        id="contactForm"
        form_validator_design="ifta-label"
        className="br-2 my-2"
        data-aos="fade-in"
        data-aos-duration="3000"
        style={{backgroundColor: "#ffffff"}}
      >
        <div className="p-2">
          <div className="gdev-field-wrapper">
            <div className="capsule">
              <label htmlFor="fullname">{t("yourName")}</label>
              <input
                type="text"
                id="fullname"
                placeholder={t("enterYourName")}
                name="fullname"
                gdev_props='{"name":"fullname","type":"text", "required": "true", "minWord": "1@@invalid name."}'
              />
            </div>
          </div>

          <div className="gdev-field-wrapper">
            <div className="capsule">
              <label htmlFor="phone">{t("phoneNumber")}</label>
              <input
                type="tel"
                placeholder={t("enterYourPhoneNumber")}
                id="phone"
                name="email"
                gdev_props='{"name":"phone","type":"tel", "required": "true", "country": "any"}'
              />
            </div>
          </div>

          <div className="gdev-field-wrapper">
            <div className="capsule">
              <label htmlFor="email">{t("emailAddress")}</label>
              <input
                type="text"
                placeholder={t("EnterYourEmail")}
                id="email"
                name="email"
                gdev_props='{"name":"email","type":"email", "provider": "any", "required": "true"}'
              />
            </div>
          </div>

          <div className="gdev-field-wrapper">
            <div className="capsule">
              <label htmlFor="budget">Budget(cfa)</label>
              <input
                type="number"
                placeholder={t("whatsYourBudget")}
                id="budget"
                name="budget"
                gdev_props='{"name":"budget","type":"number", "min": "0@@invalid budget"}'
              />
            </div>
          </div>

          <div className="gdev-field-wrapper">
            <div className="capsule">
              <label htmlFor="desc">{t("whatDoYouWant")}</label>
              <textarea
                type="text"
                id="desc"
                className="py-4"
                style={{resize: "none", height: "150px"}}
                placeholder={t("iWantAnEcommerce")}
                name="desc"
                gdev_props='{"name":"desc","type":"text", "maxWord": "40@@description is too long.", "required": "true"}'
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-4 py-2">
          {t("submit")}
          </button>
        </div>
      </form>
    </div>
  );
}
