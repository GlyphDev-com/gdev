import style from "./servicesContactForm.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
//import gdev form validation

import { useEffect, useRef } from "react";
import React, { useState } from 'react';



export default function ServicesPublicSection({

  heading = "",
  paragraph = "",
  advertPoints = [],
}) {

const formElement = useRef();

let bulbAdvertAnimationStartTime = 200;
let textAdvertAnimationStartTime = 1400;
let advertAnimationDuration = 300;

  useEffect(() => {
    Aos.init({ duration: 100 });
    
  }, []);
 
  const bulbColors = [
    "#010C22, #B81EDF",
    "#010C22, #FF038B",
    "#010C22, #1E8EDF",
    "#010C22, #08FC4C",
  ];

  
  return (
    <section id={style.servicesPublicSection}>
      <div className={style.sec + " col-8"} id={style.left}>
        <div>
          <h1 className="h1">{heading}</h1>
          <p className="text-light">{paragraph}</p>
        </div>
        <div className="mt-5" id={style.advertPoints}>
          {advertPoints.map((point, index) => {
            let currentBulbDelay = bulbAdvertAnimationStartTime;
            bulbAdvertAnimationStartTime =
              currentBulbDelay + advertAnimationDuration;

            let currentTextDelay = textAdvertAnimationStartTime;
            textAdvertAnimationStartTime =
              currentTextDelay + advertAnimationDuration;
            return (
              <div key={index} className={style.actualAdvert}>
                <div
                  data-aos="fade-down"
                  data-aos-duration={advertAnimationDuration}
                  data-aos-delay={currentBulbDelay}
                  className={style.bulb}
                  style={{
                    background: `linear-gradient(to right, ${bulbColors[index]})`,
                  }}
                ></div>
                <span
                  data-aos="fade-right"
                  data-aos-duration={advertAnimationDuration}
                  data-aos-delay={currentTextDelay}
                  className="text-light"
                >
                  {point}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.sec} id={style.right}>
        <form ref={formElement} className={style.form}>
          <h2 className="text-light">Let's talk now</h2>
          <div className={style.field} id={style.name}>
            <div className={style.inputBox}>
              <label htmlFor="name" className="d-block text-light">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control mt-0"
                required
              />
            </div>

            <div className={style.inputBox}>
              <label htmlFor="email" className="d-block text-light">
                Contact *
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="form-control mt-0"
                required
              />
            </div>
          </div>

          <div className={style.field} id={style.budget}>
            <label htmlFor="budget" className="d-block text-light">
              What is your budget *
            </label>
            <input
              type="number"
              id="budget"
              name="budget"
              className="form-control mt-0"
              required
              gdev-props = '{"name": "budget", "type": "text", "minChar": "2"}'
            />
          </div>

          <div className={style.field} id={style.description}>
            <label htmlFor="description" className="d-block text-light">
              Tell us what you want *
            </label>
            <textarea
              type="textarea"
              id="description"
              name="description"
              className="form-control mt-0"
              required
            />
          </div>

          <div className={style.submitBtn + " mt-5"}>
            <button className="btn btn-primary" onClick={() => validateForm(formElement)}>
              Send Request
            </button>
          </div>
        </form>
      </div>
      <div id={style.absoluteBulb1} className={style.absoluteBulb}></div>
    </section>
  );

}

function validateForm(f){
  
  let validator = new GdevFormValidation(f.current, 'fr');
  validator.validate();
}