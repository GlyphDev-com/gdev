//import bootstrap

import "./header.css";
import gdevLogo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import SEOHelmet from "./helmet";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "./languageSwitcher";
//create header component
function Header() {
  const [sideNav, setSideNav] = useState(false);

  const {t} = useTranslation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "instant"});
  }, []);
  return (
    <>
      <SEOHelmet
        title="gdev"
        favicon={"image/svg+xml /icon.svg"}
        ogTitle={"Innovate with gdev - Mobile, Web, Design, and AI Solutions"}
        ogDescription={
          "Meet gdev, a team of passionate innovators delivering cutting-edge mobile apps, websites, designs, and AI solutions. Explore our open-source packages and let's shape the future of tech together!"
        }
        ogImage={
          "https://i.postimg.cc/v86cQ8Mr/removal-ai-68a74532-f4d0-4b18-87c3-ffe7a11deffe-screenshot-2024-06-20-075650-19-Z4-RR.png"
        }
        ogUrl={"https://gdev.com"}
        themeColor={"#0f1214"}
      />
      <nav
        className="header py-2 fixed-top p-x-100 mobile-px-2 border-b-1 d-flex flex-row align-items-center justify-content-between"
        style={{borderColor: "rgb(32, 35, 38)"}}
      >
        <Link to="/" className="nav-link " id="page" aria-current="page">
          <img className="img-responsive" id="logo" src={gdevLogo} alt="logo" />
        </Link>

        <i
          className="bi bi-list text-light fw-bold gt-20 cursor-ptr desktop-d-none laptop-d-none"
          onClick={() => {
            setSideNav("showSideNav");
          }}
        ></i>
        <div className="d-flex flex-row align-items-center gap-5">
          <div
            className={`d-flex flex-row align-items- gap-3 tablet-d-none ipad-d-none mobile-d-none ${sideNav}`}
          >
            <div className="w-100 my-2  d-none tablet-d-block ipad-d-block mobile-d-block">
              <i
                className="bi bi-chevron-right text-light cursor-ptr gt-12 rounded-circle d-flex align-items-center justify-content-center border-b-2 border-l-2 sideCloser border-color-jira"
                onClick={() => setSideNav("hideSideNav")}
              ></i>
            </div>

            <Link
              className="text-decoration-none wh-2 tablet-px-4 ipad-px-4 mobile-px-4 gt-4 fw-bold  p-2 br-2 hover-bg-secondary tablet-m-0 ipad-m-0 mobile-m-0"
              aria-current="page"
              to="/"
            >
              {t("home")}
            </Link>
            

            <Link
              className="text-decoration-none wh-2 tablet-px-4 ipad-px-4 mobile-px-4 gt-4 fw-bold  p-2 br-2 hover-bg-secondary tablet-m-0 ipad-m-0 mobile-m-0"
              aria-current="page"
              to="/contact"
            >
              {t("ContactUs")}
            </Link>
            <Link
              className="text-decoration-none wh-2 tablet-px-4 ipad-px-4 mobile-px-4 gt-4 fw-bold p-2 br-2 hover-bg-secondary"
              aria-current="page"
              to="/about-us"
            >
              {t("AboutUs")}
            </Link>
            <Link
            className="text-decoration-none wh-2 tablet-px-4 ipad-px-4 mobile-px-4 gt-4 fw-bold  p-2 br-2 hover-bg-secondary tablet-m-0 ipad-m-0 mobile-m-0"
            aria-current="page"
            to="/FAQ"
          >
                        {/* {t("ContactUs")} */}
                        FAQ
          </Link>
            <a
              className="text-decoration-none wh-2 gt-4 tablet-px-4 ipad-px-4 mobile-px-4 fw-bold p-2 br-2 hover-bg-secondary me-5 tablet-m-0 ipad-m-0 mobile-m-0"
              href="http://localhost:5000/"
              translate="no"
              target="_blank"
            >
              gdev_form_validator
            </a>

            <a
              target="_blank"
              href="/myvirtualschool/signin/trainee/gdev university/YUEIU-RT-YIOJOIT8ORE[]THTOIJ8H_87623FECWUDVSYRTFDT7W6EFKSDYS80W43"
              className="btn btn-success gt-4 fw-bold flex-shrink-0 tablet-mx-4 ipad-mx-4 mobile-mx-4"
            >
              {t("startLearning")} ?
            </a>
            <a
              href="/myvirtualschool/create"
              target="_blank"
              className="btn bg-light vs_create_hero_btn  gt-4 fw-bold flex-shrink-0 tablet-mx-4 ipad-mx-4 mobile-mx-4"
              style={{textDecoration: "none"}}
            >
              {t("CreateASkul")}
            </a>
          </div>
          <LanguageSwitcher />
        </div>
      </nav>
    </>
  );
}

export default Header;
