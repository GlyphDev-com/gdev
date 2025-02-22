import gdevLogo from "../../assets/logo.svg";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import {
  faTiktok,
  faWhatsapp,
  faTelegram,
  faFacebook,
  faUpwork,
  faLinkedin,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

export default function Footer() {
  const icons = [
    <FontAwesomeIcon
      key="tiktok"
      className="socialMedia"
      style={{ color: "rgb(0, 0, 90)" }}
      icon={faTiktok}
    />,
    <FontAwesomeIcon
      key="whatsapp"
      className="socialMedia text-success"
      icon={faWhatsapp}
    />,
    <FontAwesomeIcon
      key="telegram"
      className="socialMedia text-info"
      icon={faTelegram}
    />,
    <FontAwesomeIcon
      key="facebook"
      className="socialMedia text-primary"
      icon={faFacebook}
    />,
    <FontAwesomeIcon
      key="upwork"
      className="socialMedia text-success"
      icon={faUpwork}
    />,
    <FontAwesomeIcon
      key="linkedin"
      className="socialMedia text-info"
      icon={faLinkedin}
    />,
    <FontAwesomeIcon
      key="github"
      style={{ color: "rgb(0, 0, 100)" }}
      className="socialMedia"
      icon={faGithub}
    />,
    <FontAwesomeIcon
      key="youtube"
      className="socialMedia text-danger"
      icon={faYoutube}
    />,
  ];

  const borderStyles = [
    {
      background: "linear-gradient(to bottom, rgb(203, 8, 122), blue)",
      borderRadius: "50%",
    },

    {
      background:
        "linear-gradient(to right, rgb(11, 225, 132), rgb(203, 8, 122))",
      borderRadius: "50%",
    },

    {
      background: "linear-gradient(to bottom, cyan, purple)",
      borderRadius: "50%",
    },

    {
      background: "linear-gradient(to left, lime, blue)",
      borderRadius: "50%",
    },

    {
      background: "linear-gradient(to top, pink, green)",
      borderRadius: "50%",
    },

    {
      background: "linear-gradient(to right, violet, cyan)",
      borderRadius: "50%",
    },

    {
      background: "linear-gradient(to left, maroon, blue)",
      borderRadius: "50%",
    },
    {
      background: "linear-gradient(to bottom, purple, aqua)",
      borderRadius: "50%",
    },
  ];
  const halfLength = Math.floor(icons.length / 2); // Pre-calculate half length
  const animationDirections = ["fade-up", "fade-down"]; // Pre-define directions

  // Pre-calculate an array of delays
  const iconDelays = [3500, 2500, 1500, 500, 0, 1000, 2000, 3000];
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <footer>
      <div className="socialMediaSection" id="socials">
        {icons.map((icon, index) => (
          <div
            style={borderStyles[index]}
            key={icon.props.icon.iconName}
            data-aos={
              index < halfLength
                ? animationDirections[0]
                : animationDirections[1]
            }
            data-aos-delay={iconDelays[index]}
            className={index === 0 ? "delayedIcon" : ""} // Alternate direction every other icon
          >
            <div className="socialIconHolder">{icon}</div>
          </div>
        ))}
      </div>
      <div id="footerSection2">
        <div id="footerSection2Left" data-aos="fade-up">
          <img
            src={gdevLogo}
            alt="Gdev"
            className="tablet-height-100 mobile-height-100"
          />
          <p className="text-white">
            Bridge the Tech Gap. Start Your Journey Today.
          </p>
        </div>

        <div id="footerSection2Right">
          <ul>
            <li>Company</li>

            <Link className="text-decoration-none gt-2" to={"/contact"}>
              <li className="text-white">About</li>
            </Link>
            <Link className="text-decoration-none gt-2" to={"/contact"}>
              <li className="text-white">Contact us</li>
            </Link>
          </ul>

          <ul>
            <li>Services</li>

            <Link className="text-decoration-none gt-2" to={"/services/design"}>
              <li className="text-white">Design</li>
            </Link>
            <Link className="text-decoration-none gt-2" to={"/services/web"}>
              <li className="text-white">Web Development</li>
            </Link>
            <Link className="text-decoration-none gt-2" to={"/services/mobile"}>
              <li className="text-white">Mobile Development</li>
            </Link>
          </ul>

          <ul>
            <li>Trainings</li>

            <li>Design</li>
            <li>Mobile Development</li>
            <li>Web Development</li>
            <li>Programming Basics</li>
          </ul>
        </div>
      </div>
      <hr />
      <div id="footerSection3">
        <p className="text-white">&copy; 2024 Gdev. All rights reserved.</p>
        <p className="footerSection3Right d-flex flex-row justify-content-center text-white gap-5">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Cookie Policy</li>
        </p>
      </div>
    </footer>
  );
}