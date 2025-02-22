import style from "./contactUs.module.css" ;
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import Space from "../../components/common/space";

export default function ContactUs() {
    return (
      <>
        <Header />
        <Space height="76px" backgroundColor="#010A1C" />
        <section className={style.sec}>
          <div className={style.first}>
            <div
              id={style.part2}
              className="d-flex align-items-center justify-content-center"
              //   style={{
              //     backgroundImage:
              //       "radial-gradient(circle, rgb(48, 133, 245), rgb(0, 0, 0))",
              //   }}
            >
              <div className={style.messageFormContactUs}>
                {" "}
                <p>
                  innovate with us.
                  <br /> Contact GDEV for Mobile, Web and Design solutions{" "}
                </p>
              </div>
            </div>
            <div className={style.formContener}>
              <form className={style.contactForm}>
                <h1 className="text-light text-center col-12">Contact Us</h1>
                <div className={style.inputbox}>
                  <label htmlFor="email" className="text-light">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                </div>

                <div className={style.inputbox}>
                  <label htmlFor="firstName" className="text-light">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                  />
                </div>

                <div className={style.inputbox}>
                  <label htmlFor="lastName" className="text-light">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastname"
                    className="form-control"
                  />
                </div>

                <div className={style.inputbox}>
                  <label htmlFor="question" className="text-light">
                    Ask Our Question
                  </label>
                  <textarea
                    type="text"
                    id="question"
                    name="question"
                    className="form-control"
                  />
                </div>

                <div className={style.submitBtn}>
                  <button type="submit" className="btn btn-primary mt-4 col-5">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
}