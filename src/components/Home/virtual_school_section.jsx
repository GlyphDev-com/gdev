import React from "react";
import style from "./vs_.module.css";
import vsImgShowcase from "../../assets/vsImgShowcase.svg";

const VirtualSchoolSection = () => {
  return (
    <>
      <section
        className="w-100 overflow-hidden"
        data-aos="fade-down"
        data-aos-duration="3000"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <div className="pb-5">
          <div className="d-flex align-items-center justify-content-center">
            <span className="fw-bold gt-4 " style={{color: "#3399FF"}}>
              VIRTUAL SCHOOL
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-center fw-bold gt-13 flex-column mobile-px-2">
            <span className="text-light text-center">
              Create a Virtual School that Stands Out
            </span>
            <span className="text-center" style={{color: "#3399FF"}}>
              Build. Teach. Empower.
            </span>
            <span className="gt-5 text-secondary text-center">
              From custom courses to seamless management tools, Gdev Virtual
              School brings your teaching vision to life.
            </span>
          </div>
        </div>
        <div
          className="h-100 mx-5 br-4 p-5 position-relative tablet-mx-0 tablet-px-3 ipad-mx-0 ipad-px-3 mobile-mx-0 mobile-px-3 ipad-height-400"
          style={{
            background:
              "radial-gradient(circle at top,rgb(38, 62, 82),rgb(17, 30, 49), #000000)",
          }}
          data-aos="fade-left"
          data-aos-duration="3000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <img
            src={vsImgShowcase}
            className="w-100 ipad-height-300 ipad-w-fit-content mobile-height-300 mobile-w-fit-content"
          />
          <i
            className={`bi bi-stars gt-20 text-white position-absolute top-0 start-0 m-5 ${style.stars} ipad-m-2 mobile-m-2`}
          ></i>
          <div
            className={`position-absolute top-0 end-0  ${style.create_school_button_container} ipad-m-2 mobile-m-2`}
          >
            <a
              href="/myvirtualschool/create"
              className="text-decoration-none"
              target="_black"
            >
              <div
                className={`w-100 h-100 position-relative cursor-ptr d-flex align-items-center justify-content-center ${style.create_school_wrapper} `}
              >
                <span className="gt-5  text-white cursor-ptr">
                  Create Virtual School
                </span>
                <i
                  className="bi bi-cursor position-absolute"
                  style={{bottom: "-20px", left: "-15px", color: "#7777eb"}}
                ></i>
              </div>
            </a>
          </div>
        </div>
      </section>
      <hr className="my-8 mobile-my-10" style={{color: "rgb(32, 35, 38)"}} />
    </>
  );
};

export default VirtualSchoolSection;