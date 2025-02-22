import React from 'react'
import vsLogo from "../../assets/vs_logo.png";
import style from "./Partners.module.css"
const Partners = () => {
  return (
    <div
      className={`w-100 partners ${style.partners}`}
      style={{
        color: "white",
        boxShadow:
          "2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.2)",
        background: "linear-gradient(to right, #000000, #0c0c69)",
      }}
    >
      <div className="marquee d-flex align-items-center">
        <div className="marquee-slide">
          <span>
            {" "}
            <img src={vsLogo} alt="" style={{height: "50px"}} />
          </span>
          <span
            style={{fontWeight: "900", fontFamily: "sans-serif"}}
            className="text-light"
          >
            {" "}
            SPD TECH
          </span>

          <span
            style={{fontWeight: "900", fontFamily: "cursive"}}
            className="text-light"
          >
            {" "}
            PaleS
          </span>
          <span
            style={{fontWeight: "900", fontFamily: "Verdana"}}
            className="text-light"
          >
            {" "}
            CodeMe
          </span>

          <span
            style={{fontWeight: "900", fontFamily: "Tahoma"}}
            className="text-light"
          >
            {" "}
            LNing
          </span>

          <span
            style={{fontWeight: "900", fontFamily: "Georgia"}}
            className="text-light gt-15"
          >
            {" "}
            sm
          </span>

          <span
            style={{fontWeight: "900", fontFamily: "cursive"}}
            className="text-light"
          >
            {" "}
            lida
          </span>

          <span
            style={{fontWeight: "900", fontFamily: "Georgia"}}
            className="text-light"
          >
            {" "}
            TechTrailBlazers
          </span>

          <span style={{fontWeight: "900", fontFamily: "monospace"}}>
            {" "}
            OFIS
          </span>
        </div>
        <div className="marquee-slide">
          <span>
            {" "}
            <img src={vsLogo} alt="" style={{height: "50px"}} />
          </span>
          <span
            style={{fontWeight: "900", fontFamily: "sans-serif"}}
            className="text-light"
          >
            {" "}
            SPD TECH
          </span>

          <span
            style={{fontWeight: "900", fontFamily: "cursive"}}
            className="text-light"
          >
            {" "}
            PaleS
          </span>
          <span
            style={{fontWeight: "900", fontFamily: "Verdana"}}
            className="text-light"
          >
            {" "}
            CodeMe
          </span>

          <span
            style={{fontWeight: "900", fontFamily: "Tahoma"}}
            className="text-light"
          >
            {" "}
            LNing
          </span>

          <span
            style={{fontWeight: "900", fontFamily: "Georgia"}}
            className="text-light gt-15"
          >
            {" "}
            sm
          </span>

          <span
            style={{fontWeight: "900", fontFamily: "cursive"}}
            className="text-light"
          >
            {" "}
            lida
          </span>

          <span
            style={{fontWeight: "900", fontFamily: "Georgia"}}
            className="text-light"
          >
            {" "}
            TechTrailBlazers
          </span>

          <span style={{fontWeight: "900", fontFamily: "monospace"}}>
            {" "}
            OFIS
          </span>
        </div>
      </div>
    </div>
  );
}


export default Partners;