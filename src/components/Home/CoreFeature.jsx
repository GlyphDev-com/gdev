import React from "react";
import style from "./coreFeature.module.css";

const CoreFeature = ({feature}) => {
  return (
    <div
      className={`col-lg-4 col-md-6`}
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-once="true"
      data-aos-delay={feature.aosDelay}
    >
      <div className={`${style.feature_wrapper_container}`}>
        <div className={`${style.feature_wrapper} `}>
          <div>
            <div
              className=" text-light d-flex align-items-center justify-content-center p-3 gt-20 rounded-circle"
              style={{
                width: "70px",
                height: "70px",
                backgroundColor: "#3399FF",
              }}
            >
              <span className={`${style.feature_icon}`}>{feature.icon}</span>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <span className="fw-bold text-light gt-10">{feature.name}</span>
          </div>
          <p className={`${style.feature_description} gt-6`}>
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;