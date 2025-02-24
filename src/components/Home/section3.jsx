import "aos/dist/aos.css";
import "./section3.css";

export default function Section3() {
  return (
    <div id="section3">
      <div className="left "></div>
      <form
        id="contactForm"
        form_validator_design="ifta-label"
        className="br-2 my-2"
        data-aos="fade-in"
        data-aos-duration="3000"
        style={{backgroundColor: "#ffffff"}}
      >
        <div className="p-2">
          <div className="gdev-field-wrapper">
            <div className="capsule">
              <label htmlFor="fullname">Your name</label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your name"
                name="fullname"
                gdev_props='{"name":"fullname","type":"text", "required": "true", "minWord": "1@@invalid name."}'
              />
            </div>
          </div>

          <div className="gdev-field-wrapper">
            <div className="capsule">
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                id="phone"
                name="email"
                gdev_props='{"name":"phone","type":"tel", "required": "true", "country": "any"}'
              />
            </div>
          </div>

          <div className="gdev-field-wrapper">
            <div className="capsule">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                placeholder="Enter your email"
                id="email"
                name="email"
                gdev_props='{"name":"email","type":"email", "provider": "any", "required": "true"}'
              />
            </div>
          </div>

          <div className="gdev-field-wrapper">
            <div className="capsule">
              <label htmlFor="budget">Budget(cfa)</label>
              <input
                type="number"
                placeholder="What's your budget?"
                id="budget"
                name="budget"
                gdev_props='{"name":"budget","type":"number", "min": "0@@invalid budget"}'
              />
            </div>
          </div>

          <div className="gdev-field-wrapper">
            <div className="capsule">
              <label htmlFor="desc">What do you want?</label>
              <textarea
                type="text"
                id="desc"
                className="py-4"
                style={{resize: "none", height: "150px"}}
                placeholder="I want an e-commerce website with payment intergration..."
                name="desc"
                gdev_props='{"name":"desc","type":"text", "maxWord": "40@@description is too long.", "required": "true"}'
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-4 py-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
