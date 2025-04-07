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

  </>
);
