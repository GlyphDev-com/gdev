import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./card.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function CardView(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="slide-up"
      data-aos-duration="1500"
      className={`${style.cardHolder} ${
        props.reverse ? style.invertedCardHolder : ""
      }`}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <img src={props.imageSource} alt="flyers" />
      <div className={style.text}>
        <h1 className={style.cardTitle}>{props.cardTitle}</h1>

        <p className={style.cardDescription}>{props.cardDescription}</p>
      </div>
    </div>
  );
}

export function ElongatedCardView(props) {
  return (
    <div
      className={style.elongatedCard}
      style={{
        height: props.height,
        width: props.width,
        color: "white",
        background: props.background,
      }}
    >
      <div className={style.elongatedTop}>
        <h2 className={style.elongatedTitle}>{props.Title}</h2>
        <p className={style.elongatedDescription}>{props.Description}</p>
      </div>

      <img
        src={props.imageSource}
        alt="gdev"
        style={{
          height: props.imageHeight,
          width: "100%",
          borderRadius: props.imageRadius,
          boxShadow: `0 0 2000px 1px ${props.imageShadowColor}`,
        }}
      />
    </div>
  );
}

export function ActionCard(props) {
  return (
    <div
      className={style.actionCard}
      style={{
        display: "flex",
        height: props.height,
        width: props.width,
        flexDirection: "column",
        background:
          "linear-gradient(150deg, rgb(9, 27, 40), rgb(0, 7, 12) 90%)",
        padding: "20px",
        boxShadow: "-1px 0 2px 0 #898D98",
        gap: "15px",
        borderRadius: "10px",
        justifyContent: "space-between",
        flexShrink: "0",
      }}
    >
      <div className={style.actionCardHead}>
        <div className={style.actionCardIcon}>
          <FontAwesomeIcon
            icon={props.icon}
            className="display-5"
            style={{ color: props.iconColor }}
          />
        </div>

        <h2 className="text-light fw-bold">{props.title}</h2>
      </div>
      <p className="text-light">{props.description}</p>
      <span>
        <Link
          to={props.target}
          className={`btn btn-${props.buttonType}`}
          style={{ width: "fit-content" }}
        >
          Learn more
        </Link>
      </span>
    </div>
  );
}