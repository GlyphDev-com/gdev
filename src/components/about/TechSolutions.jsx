import React from "react";

const TechSolutions = () => {
  return (
    <div className="pt-5 bg-dark">
      <div className="container d-flex flex-column align-items-center">
        <div className="col-7 text-center d-flex flex-column gap-4 wh-2 mobile-w-100 ipad-w-100 mobile-py-10">
          <h2 className="fw-bold text-light">
            <span className="text-primary ">Technological</span> Solution
          </h2>
          <p>
            At the forefront of the latest trends and technological advances, we
            design and develop the best solutions for each of your needs:
            <span className="text-light fw-bold">
              {" "}
              connected objects, micro-geolocation, artificial intelligence,
              virtual reality
            </span>
            , etc.
          </p>
          <p>
            We favor the latest, most robust and efficient technologies such as
            <span className="text-light fw-bold">
              {" "}
              React Native, Node.js, Redux or Fire Base{" "}
            </span>
            for the development of your projects.
          </p>
        </div>
      </div>
      <div className="border-t-1 mt-4 border-secondary wh-2 mobile-d-none ipad-d-none">
        <div className="container d-flex flex-row">
          <div className="col-4 border-r-1 px-4 py-10  d-flex flex-column gap-4">
            <div className="bg-primary rounded-circle height-fit-content width-fit-content p-2">
              <div
                className="bg-primary rounded-circle border d-flex align-items-center justify-content-center"
                style={{height: "50px", width: "50px"}}
              >
                <i className="bi text-light bi-arrow-down-right"></i>
              </div>
            </div>
            <p style={{lineHeight: "2"}}>
              We like to be fully involved in projects by proposing the creation
              and development of{" "}
              <span className="text-light fw-bold">
                {" "}
                the UX (User experience){" "}
              </span>{" "}
              , then
              <span className="text-light fw-bold">
                {" "}
                the UI (User Interface) , Design{" "}
              </span>{" "}
              to ensure that the technical and commercial product design really
              meets the needs of the target audience.
            </p>
          </div>

          <div className="col-4 border-r-1 px-4 py-10  d-flex flex-column gap-4">
            <div className="bg-primary rounded-circle height-fit-content width-fit-content p-2">
              <div
                className="bg-primary rounded-circle border d-flex align-items-center justify-content-center"
                style={{height: "50px", width: "50px"}}
              >
                <i className="bi text-light bi-arrow-down-right"></i>
              </div>
            </div>
            <p style={{lineHeight: "2"}}>
              We believe that close{" "}
              <span className="text-light fw-bold"> collaboration </span> from
              the very beginning of an idea is the{" "}
              <span className="text-light fw-bold">key</span> to rapid and
              efficient
              <span className="text-light fw-bold"> development </span> ,
              ensuring the future success of your project. We make this our
              priority.
            </p>
          </div>

          <div className="col-4 px-4 py-10  d-flex flex-column gap-4">
            <div className="bg-primary rounded-circle height-fit-content width-fit-content p-2">
              <div
                className="bg-primary rounded-circle border d-flex align-items-center justify-content-center"
                style={{height: "50px", width: "50px"}}
              >
                <i className="bi text-light bi-arrow-down-right"></i>
              </div>
            </div>
            <p style={{lineHeight: "2"}}>
              This first step includes{" "}
              <span className="text-light fw-bold">
                {" "}
                defining the key features{" "}
              </span>{" "}
              of your project and the associated technical specifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSolutions;
