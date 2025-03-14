import "./section2.css";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";


export default function Section2() {
  const {t} = useTranslation();

  useEffect(() => {
    const targetElement = document.getElementById("section2-1"); // Replace with the actual target element ID

    const options = {
      root: null, // Observe relative to viewport
      threshold: 1.0, // Trigger callback when 100% of target is visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // This function will trigger when the target element is in the viewport
    function handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const path = document.querySelector("#logoSvg path");

          // Ensure that the path exists
          if (path) {
            const length = path.getTotalLength(); // Get total length of the path

            path.style.strokeDasharray = `${length}`;
            path.style.strokeDashoffset = `${length}`; // Start fully hidden

            // Animate the path after a small delay
            setTimeout(() => {
              document.getElementById("logoSvg").style.opacity = "1";
              path.style.transition = "stroke-dashoffset 10s linear";
              path.style.strokeDashoffset = "0"; // Animate to fully drawn
            }, 500);
          }

          // Stop observing after the animation starts
          observer.unobserve(targetElement);
        }
      });
    }

    // Start observing the target element
    observer.observe(targetElement);

    // Cleanup observer when the component unmounts or dependencies change
    return () => {
      observer.disconnect();
    };
  }, []);

 

  return (
    <>
      <section id="section2">
        <div id="section2-1">
          <div id="section2-1-text-area" className="col-7">
            <h1 className="fw-bold">
              {t("codeLikeABoss")} <br /> {t("masterTechSkills")}
            </h1>
            <br />
            <p className="gt-5 text-secondary">{t("stuckInTech")}</p>
            <p>
              <button className="btn btn-primary text-light">
                {t("enrollNow")}
              </button>
            </p>
          </div>
          <svg
            id="logoSvg"
            width="458"
            height="458"
            viewBox="0 0 458 458"
            fill="none"
          >
            <defs>
              <filter id="glow-filter">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />{" "}
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                <feColorMatrix
                  values="0 0 0 0 1 0 0 0 0 0.8 0 0 0 0 0.5"
                  result="colorized"
                />{" "}
              </filter>

              <linearGradient
                id="paint0_linear_796_6"
                x1="229"
                y1="3"
                x2="229"
                y2="455"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#03011C" />
                <stop offset="0.5" stopColor="#2393A2" />
                <stop offset="1" stopColor="#F01FCF" />
              </linearGradient>
            </defs>
            <path
              d="M111.5 154.5V424C152.73 448.226 180.637 455.335 240 455C397.156 425.084 449.374 374.539 456 203C430.904 73.1133 386.134 27.13 240 3C90.784 25.6929 12.1845 94.568 2 219.5C57.8722 99.0615 112.782 69.1389 240 62.5C334.61 83.4188 365.504 116.719 393 203C379.904 337.186 335.528 368.933 229.5 394V214M111.5 154.5L229.5 92L347 154.5M111.5 154.5L229.5 214M347 154.5V305.5L229.5 363.5M347 154.5L229.5 214"
              stroke="url(#paint0_linear_796_6)"
              strokeWidth="1"
              filter="url(#glow-filter)"
            />
          </svg>
        </div>
      </section>
      <hr className="my-8 mobile-my-10" style={{color: "rgb(32, 35, 38)"}} />
    </>
  );
}
