

import "aos/dist/aos.css";
import "./section3.css";

export default function Section3() {
  return (
    <div id="section3">
      
      <div className="left"></div>
      <form id="form" className="" data-aos="fade-in" data-aos-duration="3000">
        <span className="text-light">Nom</span>
        <br />
        <input
          type="text"
          placeholder="Enter your name"
          className="nom form-control"
        />
        <br />
        <span className="text-light">email or telephone</span>
        <br />
        <input
          type="email"
          placeholder="Enter your email address"
          className="mail form-control "
        />
        <br />
        <span className="text-light">Que veulez-vous ?</span>
        <br />
        <textarea
          placeholder="saisissez votre text ici"
          className="Text form-control"
        />
        <br />
        <button type="submit" value="Soumettre" className="btn btn-success">
          Soumettre
        </button>
        <br />
      </form>
    </div>
  );
}