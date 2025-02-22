import React from "react";
import CoreFeature from "./CoreFeature";

const Features = () => {
  const features = [
    {
      name: "Software Development",
      description:
        "Create efficient, scalable software with tools like GDev Form Validator. We support developers at every stage, from prototyping to deployment, with robust and easy-to-integrate solutions.",
      icon: <i className="bi bi-mortarboard"></i>,
      aosDelay: 0,
    },
    {
      name: "Training",
      description:
        "Empower individuals with personalized and collaborative learning experiences through GDev Virtual School. From coding bootcamps to skill-based workshops, we provide a platform for impactful education.",
      icon: <i className="bi bi-code-slash"></i>,
      aosDelay: 500,
    },
    {
      name: "UI/UX Design",
      description:
        "Deliver visually stunning and user-friendly designs with GDev's focus on seamless user interfaces and experiences. We ensure every tool and platform is crafted with precision and usability in mind.",
      icon: <i className="bi bi-palette"></i>,
      aosDelay: 1000
    },
  ];
  return (
    <>
      {" "}
      <section
        className="container "
        style={{backgroundColor: "#03011c"}}
        data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <div className="pb-5">
          <div className="d-flex align-items-center justify-content-center">
            <span className="fw-bold gt-5 " style={{color: "#3399FF"}}>
              CORE FEATURES
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <span className="fw-bold gt-13 text-light">Standout Features</span>
          </div>
        </div>
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <CoreFeature key={index} feature={feature} />
          ))}
        </div>
      </section>
      <hr className="my-8 mobile-my-10" style={{color: "rgb(32, 35, 38)"}} />
    </>
  );
};

export default Features;