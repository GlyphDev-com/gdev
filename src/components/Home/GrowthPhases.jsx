import React from "react";
const GrowthPhases = ({phase, index}) => {
  const direction = index % 2 !== 0 ? "flex-row" : "flex-row-reverse";
  return (
    <div
      className={`d-flex   justify-content-center w-100 ${direction} growthphase mobile-flex-column ipad-flex-column`}
    >
      <div
        className="col-4 pe-4 left-side mobile-w-100 ipad-w-100"
        style={{
          scale: "0",
          transition: "all 1s",
          opacity: "0",
        }}
      >
        <div className={`d-flex flex-row align-items-center gap-2`}>
          <div
            className="d-flex align-items-center justify-content-center border-r-3 border-b-3 border-color-jira rounded-circle flex-shrink-0"
            style={{height: "30px", width: "30px"}}
          >
            <span className="fw-bold text-light">{index + 1}</span>
          </div>
          <h4 style={{color: "#3399FF"}} className="gt-6 fw-bold">
            {phase.step}
          </h4>
        </div>

        <p className="gt-9 text-light fw-bold">{phase.title}</p>
      </div>

      <div
        className="lineContainer d-flex flex-column align-items-center  mobile-d-none ipad-d-none"
        data-linenum={phase.id}
        style={{margin: "0 100px"}}
      >
        <div
          id={phase.iconId}
          className="indicatorIcon d-flex align-items-center justify-content-center"
        >
          {phase.icon}
        </div>
        <div className="line" id={phase.id}></div>
      </div>

      <div
        className="col-3 wh-2 right-side mobile-w-100 ipad-w-100"
        style={{
          scale: "0",
          transition: "all 1s",
          opacity: "0",
        }}
      >
        <div>{phase.description}</div>
        <div className="mb-5 position-relative">
          <img src={phase.image} className="height-300 mobile-w-100 ipad-w-100" />
          <div
            className="w-100 h-100 top-0 left-0 m-0 position-absolute"
            style={{
              background:
                "linear-gradient(to right, #03011c, transparent, #03011c)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GrowthPhases;
