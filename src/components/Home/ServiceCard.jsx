import React from "react";
const ServiceCard = ({service}) => {
const {id, title, description, image} = service;
  return (
    <div
      className={`border-r-1 border-l-1 border-t-1 border-b-1 lift-1 br-2 ipad-width-400 mobile-w-100`}
      style={{
        flex: "0 0 auto",
        width: "600px",
        backgroundColor: " rgba(3, 1, 28)",
      }}
    >
      <div className="d-flex align-items-center justify-content-center p-5 position-relative br-2">
        <img
          src={image}
          className="height-400 ipad-hight-300 mobile-height-200"
          alt="Mobile App Development"
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 br-2"
          style={{
            background:
              "radial-gradient(circle, rgba(32, 56, 73, .2) 0%, rgb(3, 1, 28) 60%, rgba(3, 1, 28, 0.32) 100%)",
          }}
        ></div>
      </div>

      <div className="p-5 mobile-p-5">
        <h2 className="fw-bold gt-12 py-3 text-light">{title}</h2>
        <p className="gt-7 wh-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
