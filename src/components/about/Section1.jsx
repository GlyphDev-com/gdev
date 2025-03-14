import React from "react";
import {Link} from "react-router-dom";

const Section1 = () => {
  return (
    <div
      className="position-relative  mobile-h-fit-content ipad-h-fit-content"
      style={{
        height: "calc(100vh - 80px)",
        backgroundImage: "url('/miniLogo.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div
        className="container my-5 p-4 position-relative mobile-my-0 ipad-my-0"
        style={{zIndex: "1"}}
      >
        <p
          className="col-7 fw-bold text-light gt-20 mobile-w-100 ipad-w-100 mobile-gt-10"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
          data-aos-once="true"
        >
          We breathe innovation into every line of code, turning your ideas into{" "}
          <strong className="text-primary">digital solutions.</strong>
        </p>

        <div className="ms-auto  col-6 d-flex flex-column gap-3 mobile-w-75 ipad-w-50 ipad-py-5 mobile-py-5">
          <p
            className="col-10 gt-8 text-light mobile-w-100 ipad-w-100 mobile-gt-5"
            style={{lineHeight: "2"}}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="100"
            data-aos-once="true"
          >
            At Gdev, we turn your ideas into digital realities. From platforms
            to smart tools, we build seamless, high-performance solutions with
            you every step of the way.
          </p>
          <p
            className="col-9 gt-8 fw-bold wh-2 text-light mobile-gt-5"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="100"
            data-aos-once="true"
          >
            From design to delivery, we relentlessly bring your bold ambitions
            to life...
          </p>
        </div>
        <div className="w-100 d-flex gap-3 align-items-center justify-content-center mt-4">
          <div className="width-100 border-t-2 border-primary"></div>
          <i
            className="bi-caret-right-fill text-primary gt-20"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          ></i>
          <Link
            to="/contact"
            className="gt-4 fw-bold text-primary text-decoration-none"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="100"
            data-aos-once="true"
          >
            Work with Ggev, and let’s build the future of digital together!
          </Link>
        </div>
      </div>
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{backgroundColor: "rgba(3, 1, 28, 0.96)", zIndex: "0"}}
      ></div>
    </div>
  );
};

export default Section1;
