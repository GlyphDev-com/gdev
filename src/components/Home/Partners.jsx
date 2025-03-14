import React from "react";
import vsLogo from "../../assets/vs_logo.png";
import parrain from "../../assets/parrain.png";
import styles from "./Partners.module.css"; // Renamed 'style' to 'styles' to avoid conflicts

const Partners = ({
  className = "",
  fixed = false,
  logoClass = "",
  nameClass = "",
  logoStyle = {height: "50px"},
  children = [],
  style = {
    color: "white",
    boxShadow:
      "2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.2)",
    background: "linear-gradient(to right, #000000, #0c0c69)",
  },
}) => {
  const partners = [
    {
      name: "Virtual school",
      logo: vsLogo, // Corrected import usage
    },
    {name: "SPD TECH", logo: null},
    {name: "PaleS", logo: null},
    {name: "Parrain", logo: parrain},
    {name: "CodeMe", logo: null},
    {name: "LNing", logo: null},
    {name: "lida", logo: null},
    {name: "TechTrailBlazers", logo: null},
    {name: "OFIS", logo: null},
  ];

  if (fixed) {
    const filteredPartners = partners.filter((partner) =>
      children.find(
        (child) => partner.name.toLowerCase() === child.toLowerCase()
      )
    );

    return (
      <div className={`w-100 d-flex flex-row align-items-center ${className}`}>
        {filteredPartners.map((partner, i) => (
          <span
            key={i}
            style={{fontWeight: "900", fontFamily: "Georgia"}}
            className={`${nameClass}`}
          >
            {partner.logo ? (
              <img
                src={partner.logo}
                alt={partner.name}
                className={logoClass}
                style={logoStyle}
              />
            ) : (
              partner.name
            )}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`w-100 partners ${styles.partners} ${className}`}
      style={style}
    >
      <div className="marquee d-flex align-items-center">
        <div className="marquee-slide">
          {partners.map((partner, i) => (
            <span
              key={i}
              style={{fontWeight: "900", fontFamily: "Georgia"}}
              className={`${nameClass}`}
            >
              {partner.logo ? (
                <img
                  className={logoClass}
                  src={partner.logo}
                  alt={partner.name}
                  style={logoStyle}
                />
              ) : (
                partner.name
              )}
            </span>
          ))}
        </div>
        <div className="marquee-slide">
          {partners.map((partner, i) => (
            <span
              key={i}
              style={{fontWeight: "900", fontFamily: "Verdana"}}
              className={`${nameClass}`}
            >
              {partner.logo ? (
                <img
                  className={logoClass}
                  src={partner.logo}
                  alt={partner.name}
                  style={logoStyle}
                />
              ) : (
                partner.name
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
