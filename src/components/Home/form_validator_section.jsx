import React from "react";
import sampleCode from "../../assets/gd_form_validator_code.png";
import { useTranslation } from "react-i18next";
import { formvalidatorDocumentationURL } from "../../config";
const GdevFormValidatorSection = () => {
  const {t}= useTranslation()
  return (
    <>
      <section className="w-100 ">
        <div className="w-100 d-flex flex-row gap-5 align-items-center container tablet-w-100 ipad-w-100 mobil-w-100 mobile-flex-column ipad-flex-column justify-content-center moblie-my-3">
          <div
            className="custom-section text-white col-6 ipad-w-100 mobile-w-100"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div className="width-fit-content my-3">
              <span className="fw-bold gt-4 " style={{color: " #3399FF"}}>
                {t("dataSanitization")}
              </span>
            </div>
            <h1 className="display-4 mb-4" style={{fontWeight: "900"}}>
            {t("effortless")}
            <br />
              <span style={{color: "#3399FF"}}>{t("formValidation")}</span>
              <br />
              {t("withNoJavascript")}
            </h1>
            <p className="lead gt-5 text-secondary">
              {t("forgetWritingJavascript")}
              <span translate="no"> gdev_form_validator</span>, <br />
              {t("youCanImplement")}
            </p>
            <div className="my-4 d-flex flex-row gap-3 mobile-flex-column">
              <a
                href={formvalidatorDocumentationURL}
                className="btn btn-primary btn-lg gt-4 me-2 "
                target="_blank"
              >
                <span>Documentation</span>{" "}
                <i className="bi bi-chevron-right"></i>
              </a>
              <button
                className="btn btn-outline-success text-light btn-lg gt-4"
                onClick={async () => {
                  const fileUrl =
                    "https://cdn.jsdelivr.net/npm/@gdev-org/gdev_form_validator@latest/dist/gdev_form_validator.js";

                  try {
                    const response = await fetch(fileUrl);
                    const blob = await response.blob();
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.setAttribute("download", "gdev_form_validator.js");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(link.href);
                  } catch (error) {
                    console.error("Error downloading file:", error);
                  }
                }}
              >
                <span>{t("downloadNow")}</span>{" "}
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
            <i className="gt-3 text-secondary fw-bold">
              $ npm i @gdev-org/gdev_form_validator
            </i>
          </div>

          <div
            className="col-5 border-l-2 border-r-2 border-t-2 border-b-2 br-2 ipad-w-100 mobile-w-100"
            style={{borderColor: "rgb(32, 35, 38)"}}
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div className="w-100">
              <img
                src={sampleCode}
                className="w-100 height-400 b-t-r-2 b-t-l-2"
              />
            </div>
            <div className="bg-black p-3 b-b-l-2 b-b-r-2">
              <div>
                <span className="lead fw-bold text-light gt-5">Live Demo</span>
              </div>
              <div>
                <span className="gt-5 text-secondary">
                  {t("viewAliveDemo")}
                </span>
              </div>
              <div className="mt-2">
                <button type="button" className="btn btn-primary gt-4">
                  <span>Live Demo</span>
                  <i className="bi bi-play"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-8 mobile-my-10" style={{color: "rgb(32, 35, 38)"}} />
    </>
  );
};

export default GdevFormValidatorSection;
