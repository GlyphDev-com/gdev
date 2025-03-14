import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@gdev-org/gdev_form_validator";
import "./utils/i18n/index.js";
import Router from "./Router.jsx";

// Import statement
import "./index.css";
import LanguageSwitcher from "./components/common/languageSwitcher.jsx";
//import the router

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Router />
    <div
      className="position-fixed me-3 mobile-d-flex ipad-d-flex align-items-center justify-content-center rounded-circle lifth-2 bg-primary"
      style={{
        display: "none",
        right: "0",
        top: "calc(100% - 100px)",
        zIndex: "1",
        height: "50px",
        width: "50px",
      }}
    >
      <LanguageSwitcher className={"mobile-p-3 ipad-p-3 border-0 text-light"} />
    </div>
  </>
);
