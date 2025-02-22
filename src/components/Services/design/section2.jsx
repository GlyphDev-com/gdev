

import hlgg from "../../../assets/hlgg.jpg";
import vetements from "../../../assets/vetements.jpg";
import style from "./section2.module.css";
import CardView from "../../public/card";
import formation from "../../../assets/formation.jpg";
import cake from "../../../assets/cake.jpg";
import francine from "../../../assets/francine.jpg";


export default function Section2() {
  
  return (
    <section className={style.section2}
      style={{
        background: "#010C22",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px",
        gap: "100px",
      }}
    >
      <h1 className="m-5 text-light display-1" id={style.heading}> Completed Design project</h1>
      <CardView
        imageSource={formation}
        cardTitle="Training Center"
        cardDescription="Our design expertise extends to a wide range of materials, including effective recruitment flyers. 
        This flyer for le parrain Academique is a prime example of how we combine creativity with strategic thinking to create designs that convert. From concept to completion, 
        we'll work closely with you to develop materials that perfectly align with your brand and goals."
        reverse={true}
      />

      <CardView
        imageSource={cake}
        cardTitle="Smile Cake"
        cardDescription="Specializing in custom cakes, we create designs that are as delicious as they are beautiful. 
        This Smile Cake flyer is proof.We blend flavors and visuals to create unforgettable taste experiences. Trust us to turn your ideas into reality. "
        reverse={false}
      />
      <CardView
        imageSource={francine}
        cardTitle="Fast Food "
        cardDescription="We know that great food starts with great design. 
        This flyer is a testament to our ability to create visually appealing materials that drive sales. 
        From menu design to in-store graphics, we can help you build a brand that's as irresistible as your food"
        reverse={true}
      />
      <CardView
        imageSource={hlgg}
        cardTitle="Event Planning "
        cardDescription="First impressions matter. 
        Our flyer designs for the event planning industry are crafted to captivate and inform. 
        We understand the unique challenges of this sector, 
        and we'll create designs that reflect your brand's personality and elevate your events."
        reverse={true}
      />
      <CardView
        imageSource={vetements}
        cardTitle="Fashion for Every Occasion"
        cardDescription="We know that fashion is all about making a statement. 
        This flyer is a testament to our ability to create visually appealing materials that capture the essence of your brand.
         From concept to completion, we work closely with our clients to develop designs that align with their unique style and target audience."
        reverse={false}
      />
    </section>
  );
}