import React from 'react'

const WhoWeAre = () => {
  return (
    <div className="py-5" style={{backgroundColor: " black"}}>
      <div className="container d-flex flex-column align-items-center py-5">
        <h2 className="text-light fw-bold  my-4">Who We Are</h2>
        <div className="gt-9 d-flex flex-column gap-3 col-9 text-start wh-3 mobile-w-100 ipad-w-100 mobilt-gt-7">
          <p
            className="text-lighter"
            style={{textAlign: "justify", lineHeight: "40px"}}
          >
            Gdev is a{" "}
            <span className="text-light">young and dynamic startup</span>, based
            in Cameroon, specialized in creating{" "}
            <span className="text-light">smart and flexible digital tools</span>
            , designed to simplify developers' lives and enhance user
            experiences.
          </p>
          <p
            className="text-lighter"
            style={{textAlign: "justify", lineHeight: "40px"}}
          >
            We are a team of <span className="text-light">developers</span>,{" "}
            <span className="text-light">designers</span>, and{" "}
            <span className="text-light">project managers</span>, all experts,
            passionate about our craft, and proud of the mobile applications we
            create for our clients.
          </p>

          <p
            className="text-lighter"
            style={{textAlign: "justify", lineHeight: "40px"}}
          >
            Whether you’re a <span className="text-light">growing startup</span>{" "}
            or an <span className="text-light">established company</span>{" "}
            looking to optimize your processes, Gdev is here to{" "}
            <span className="text-light">turn your ideas</span> into concrete,
            high-performance, and tailor-made solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre