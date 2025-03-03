import React from "react";
import style from "./Services.module.css";
import ServiceCard from "./ServiceCard";
import internsCam from "../../assets/internsCam.png";
import web from "../../assets/web.png";
import aiGirl from "../../assets/AiFemale.png";
import { useTranslation } from "react-i18next";
const Services = () => {

  const {t} = useTranslation()

  const data = [
    {
      id: 1,
      title: t("mobileDev"),
      description: t("atGdevWeBuild"),
        // "At gdev, we build powerful, user-friendly mobile apps for iOS and Android. Our team focuses on performance, sleek design, and features that make a difference — turning ideas into seamless digital experiences.",
      image: internsCam,
    },

    {
      id: 2,
      title: t("webDev"),
      description: t("weCreateFast"),
        // "We create fast, responsive web solutions tailored to your needs. Our developers and designers work together to build platforms that are visually stunning, scalable, and optimized for performance.",
      image: web,
    },

    {
      id: 3,
      title: t("artificialIntelligence"),
      description: t("transformYourBusiness"),
        // "Transform your business with AI-driven solutions built by GDev. We design intelligent systems that automate workflows, analyze data, and deliver personalized experiences — unlocking new possibilities.",
      image: aiGirl,
    },
  ];
  return (
    <>
      <section
        className="container"
        style={{
          background:
            "radial-gradient(circle, rgba(26,47,62,1) 0%, rgba(3,1,28,1) 40%, rgba(3,1,28,1) 100%)",
        }}
        data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <div className="pb-5">
          <div className="d-flex align-items-center justify-content-center">
            <span className="fw-bold gt-4 " style={{color: "#3399FF"}}>
              {t("ourServices")}
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-center fw-bold gt-13 flex-column mobile-px-2">
            <span className="text-light text-center">{t("whatDoWeOffer")}</span>
            <span className="gt-5 text-secondary text-center">
              {t("turningIdeasIntoReality")}
            </span>
          </div>
        </div>
        <div className={`${style.carousel_container} sb-i`}>
          <div className={`${style.carousel} sb-i`}>
            {data.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className={`${style.fade_overla}`}></div>
        </div>
      </section>
      <hr className="my-8 mobile-my-10" style={{color: "rgb(32, 35, 38)"}} />
    </>
  );
};

export default Services;
