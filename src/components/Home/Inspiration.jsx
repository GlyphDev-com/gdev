import React, {useEffect, useState} from "react";
import GrowthPhases from "./GrowthPhases";
import "./section2.css";
import productivity from "../../assets/productivity.svg";
import training from "../../assets/training.svg";
import useObserver from "../../hooks/useObserver";
const Inspiration = () => {
  const handleIntersect = (entry) => {
    const target = entry.target;
    let lineId = `${target
      .querySelector(".lineContainer")
      .getAttribute("data-linenum")}`;
    let icon = target
      .querySelector(".lineContainer")
      .querySelector(".indicatorIcon");
    const left = target.querySelector(".left-side");
    const right = target.querySelector(".right-side");
    document.getElementById(lineId).style.height = "100%";
    icon.style.scale = "1";
    left.style.scale = "1";
    right.style.scale = "1";
    left.style.opacity = "1";
    right.style.opacity = "1";
  };
  useEffect(() => {
    const elements = document.querySelectorAll(".growthphase");
    //console.log(elements);
    const {observer} = useObserver({
      components: elements,
      threshold: 0.4,
      onVisible: handleIntersect,
    });
    observer.observe();
    return () => {
      observer.disconnect();
    };
  });

  const phases = [
    {
      id: "line2",
      step: "Ideas",
      title: "Shape Your Vision and Define Your Path",
      description:
        "Every groundbreaking project starts with a spark. We help you turn that spark into a blazing vision — refining your concepts, unlocking creativity, and crafting a roadmap to bring your boldest ideas to life",
      icon: <i className="bi bi-lightbulb i border-0"></i>,
      iconId: "icon2",
      image: null,
    },
    {
      id: "line3",
      step: "Productivity",
      title: "Build with Precision and Efficiency",
      description:
        "Watch your vision take shape. Our tools and guidance empower you to build faster, optimize workflows, and focus on what truly matters — turning ambitious concepts into powerful, polished solutions.",
      icon: <i className="bi bi-lightning i border-0"></i>,
      iconId: "icon3",
      image: productivity,
    },
    {
      id: "line4",
      step: "Training",
      title: "Learn, Adapt, and Stay Ahead",
      description:
        "The tech world evolves at lightning speed, and we make sure you do too. Access hands-on training, sharpen your skills, and gain the confidence to tackle any challenge that comes your way.",
      icon: <i className="bi bi-mortarboard i border-0"></i>,
      iconId: "icon4",
      image: training,
    },
    {
      id: "line5",
      step: "Community",
      title: "Connect, Collaborate, and Grow Together",
      description:
        "Success doesn’t happen in isolation. Connect with like-minded creators, share knowledge, and collaborate with innovators worldwide. Because the best ideas grow stronger when nurtured by a vibrant community.",
      icon: <i className="bi bi-people i border-0"></i>,
      iconId: "icon5",
      image: null,
    },
  ];

  return (
    <>
      <section className="container">
        <div className="pb-5 mb-5">
          <div className="d-flex align-items-center justify-content-center">
            <span className="fw-bold gt-6" style={{color: "#3399FF"}}>
              FROM INSPIRATION TO GROWTH
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-center text-center">
            <span className="fw-bold gt-13 text-light">
              The gdev Path to Build, Learn, and Thrive
            </span>
          </div>
        </div>
        <div id="d-flex flex-column">
          {phases.map((phase, i) => (
            <GrowthPhases key={i} phase={phase} index={i} />
          ))}
        </div>
      </section>
      <hr className="my-8 mobile-my-10" style={{color: "rgb(32, 35, 38)"}} />
    </>
  );
};

export default Inspiration;
