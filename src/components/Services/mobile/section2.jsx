import CardView from "../../public/card.jsx";

//import images
import solace from "../../../assets/solace.png";
import interncam from "../../../assets/internsCam.png";
import style from "./section2.module.css";

export default function Section2() {
  return (
    <section
      className={style.section2}
      style={{
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px",
        gap: "100px",
      }}
    >
      <h1 className="m-5 text-light  display-1" id={style.heading}>
        Completed Mobile Apps Projects
      </h1>
      <CardView
        imageSource={solace}
        cardTitle="Solace"
        cardDescription="A modern weather forecast app using AI predicts precise weather based on your location. Customize units, forecast distance, and more to suit your preferences."
        reverse={false}
      />

      <CardView
        imageSource={interncam}
        cardTitle="Internscam"
        cardDescription="Internscam app connects students with accurate job recommendations using machine learning. Users can generate resumes with a click and convert documents for easy submission."
        cardDirection="row-inverted"
        reverse={true}
      />
    </section>
  );
}