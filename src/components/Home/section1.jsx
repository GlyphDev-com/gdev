import "aos/dist/aos.css";
import "./section1.css";
import back from "../../assets/bag1.png";
import {Link} from "react-router-dom";
import React from "react";
import TypeWriter from "../common/typeWriter";
import Space from "./../common/space";
import { useTranslation } from "react-i18next";

export default function Section1() {

  const {t }=useTranslation()

  return (
    <section
      className="section1 d-flex"
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "90vh",
      }}
    >
      <div
        className="w-100 d-flex flex-column align-items-center flex-grow-1 hero_advert_section"
        style={{
          background:
            "linear-gradient(120deg, rgb(11, 13, 23) 40%, rgb(20 22 41 / 4%) 150%)",
        }}
      >
        <Space height="60px" />
        <div className="flex-grow-1 w-100 d-flex mobile-d-block align-items-center justify-content-center">
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-once="true"
            className="container my-3 mobile-my-10"
          >
            <div
              className="text-white hero_advert_text "
              style={{fontWeight: "900", lineHeight: "1.1"}}
            >
              <span>{t("buildYour")}</span>
              <br />
              <span style={{color: "#3399FF"}} className="line-count-1">
                {
                  <TypeWriter
                    sequence={[
                      t("customSoftware"),
                      5000,

                      t("aiSolution"),
                      5000,
                      t("digitalTool"),
                      5000,
                      t("virtualSkul"),
                      5000,
                      t("CreativeDesign"),
                      5000,
                    ]}
                  />
                }
              </span>
              <span>{t("whereIdea")}</span>
            </div>
            <p
              className="gt-5 my-4 col-10 advert_sublet mobile-w-100"
              style={{color: "hsl(216deg 15.38% 74.51%)"}}
            >
              {t("elevateYourBusiness")} <br /> {t("turnYourIdeas")}
            </p>

            <div className="d-flex flex-row gap-2 mobile-flex-column">
              <Link
                to="services/mobile"
                className="d-flex align-items-center btn btn-primary mobile-my-2 mobile-w-100 justify-content-center  gt-4 fw-bold p-2 width-fit-content"
              >
                <span>{t("letsTalk")}</span>
                <i className="bi bi-chevron-right"></i>
              </Link>
              <Link
                to="services/mobile"
                className="d-flex align-items-center btn border-r-1 border-l-1 border-color-jira text-light mobile-my-2 mobile-w-100 justify-content-center  gt-4 fw-bold p-2 width-fit-content"
              >
                <span>{t("whatsapUs")}</span>
                <i className="bi bi-chevron-right text-light"></i>
              </Link>
            </div>
            <div
              className="mt-3 width-fit-content d-flex flex-row gap-2 align-items-center justify-content-center mobile-flex-column"
              style={{color: "hsl(216deg 15.38% 74.51%)"}}
            >
              <span className="gt-3 text-center">
              {t("dontMiss")}
              </span>
              <i
                className="bi bi-chevron-double-down bottom_scroller glowing-chevron cursor-ptr"
                style={{
                  color: "#3399FF",
                  
                }}
                onClick={(e)=>{
                  //soft scroll to #socials
                  e.preventDefault();
                  window.scrollTo({
                    top: document.getElementById("socials").offsetTop,
                    behavior: "smooth",
                  });
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}