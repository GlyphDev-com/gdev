import React from 'react'

const VisionAndMission = () => {
  return (
    <div className="py-5">
      <div className="container d-flex flex-row gap-5 mobile-flex-column ipad-flex-column">
        <div className="col-6 mobile-w-100 ipad-w-100">
          <div className="d-flex align-items-center gap-3">
            <span className="display-3 text-primary fw-bolder">01</span>
            <span className="fw-bolder text-light gt-13 ">Vision</span>
          </div>
          <p className="gt-8 wh-3 text-justify">
            At Gdev, we envision a world where technology drives accessible
            growth for everyone. Our goal is to be a key player in digital
            innovation, providing powerful, intuitive tools that help developers
            and businesses reach their full potential. We are committed to
            inspiring, learning continuously, and shaping a positive digital
            future.
          </p>
        </div>

        <div className="col-6 mobile-w-100">
          <div className="d-flex align-items-center gap-3">
            <span className="display-3 text-primary fw-bolder">02</span>
            <span className="fw-bolder text-light gt-13">Mission</span>
          </div>
          <p className="gt-8 wh-3 text-justify">
            Our mission is to empower developers and businesses by creating
            smart, flexible, and easy-to-use digital solutions. We strive to
            simplify complex processes, foster innovation, and deliver impactful
            technology that transforms ideas into reality. By collaborating
            closely with our clients, we ensure every solution is crafted to
            meet their evolving needs and drive lasting success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VisionAndMission