import ReactDOM from "react-dom/client";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faInfoCircle,
  faExclamationCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Lottie from "react-lottie";
import congratulationAnim from "../../assets/congrat.json";

 const defaultLottieOptions = {
   loop: true,
   autoplay: true,
   controls: false,
   animationData: congratulationAnim,
   rendererSettings: {
     preserveAspectRatio: "xMidYMid slice",
   },
 };

const styles = {
  floatingBox: {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    backgroundColor: "rgb(40 43 51 / 96%)",
    padding: "15px",
    borderRadius: "3px",
    zIndex: 999999999999999,
    width: "300px",
  },
};

const Toaster = ({
  type = "notification",
  duration = 3000,
  message = "",
  animateOnSuccess = false,
  notifOptions = {
    icon: "https://loremflickr.com/200/200/sport",
    image: "https://loremflickr.com/200/200/sport",
    title: "Software Engineer CIN-45",
    message:
      "Dr Blake Crouse has posted a new assignment for the Software Engineer due tomorrow. Please visit the website at https://loremflickr.com/200/200/sport",
    buttons: [
      {
        label: "View assignment",
        onclick: () => console.log("Action 1 clicked"),
      },
      {
        label: "Mark as read",
        onclick: () => console.log("Action 2 clicked"),
      },
    ],
  },
}) => {
  // Create a container div for the toast
  const container = document.createElement("div");
  document.body.appendChild(container);

  const removeNotification = () => {
    if (container.parentNode) {
      document.body.removeChild(container);
    }
  };

  // Set a timeout to automatically remove the notification
  setTimeout(removeNotification, duration);

  // Toast content function
  const toastCard = (type, message, notifOptions) => {
    switch (type) {
      case "successMessage":
        return (
          <div
            style={{...styles.floatingBox, borderTop: "4px solid green"}}
            className="d-flex flex-row align-items-center gt-4 gap-2 lift-3 notification primary-bg-color"
          >
            {animateOnSuccess ? (
              <div className="position-absolute top-50 start-50">
                <Lottie options={defaultLottieOptions}  />
              </div>
            ) : null}
            <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
            <span className="text-light">{message}</span>
          </div>
        );

      case "errorMessage":
        return (
          <div
            style={{...styles.floatingBox, borderTop: "4px solid red"}}
            className="d-flex flex-row align-items-center gap-2 gt-4 lift-3 notification"
          >
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-danger"
            />
            <span className="text-light">{message}</span>
          </div>
        );

      case "infoMessage":
        return (
          <div
            style={{...styles.floatingBox, borderTop: "4px solid blue"}}
            className="d-flex flex-row align-items-center gt-4 gap-2 lift-3 notification"
          >
            <FontAwesomeIcon icon={faInfoCircle} className="text-primary" />
            <span className="text-light">{message}</span>
          </div>
        );

      case "notification":
        return (
          <div
            style={{...styles.floatingBox}}
            className="d-flex flex-column gap-3 lift-2 width-400 notification border"
          >
            <div className="d-flex flex-row align-items-center justify-content-between">
              <div className="d-flex flex-row align-items-center gap-2">
                {notifOptions.icon ? (
                  <img
                    src={notifOptions.icon}
                    alt="icon"
                    className="rounded-circle"
                    style={{width: "25px", height: "25px"}}
                  />
                ) : null}
                <span className="gt-5 fw-bold text-primary line-count-1">
                  {notifOptions.title}
                </span>
              </div>

              <FontAwesomeIcon
                icon={faTimes}
                className="gt-6 cursor-ptr wh-2"
                onClick={removeNotification}
              />
            </div>
            <div className="d-flex flex-row gap-2">
              {notifOptions.image ? (
                <img
                  src={notifOptions.image}
                  className="rounded-circle"
                  style={{width: "50px", height: "50px"}}
                />
              ) : null}
              <div className="gt-5 wh-1 line-count-3">
                {notifOptions.message}
              </div>
            </div>
            {notifOptions.buttons ? (
              <div className="d-flex flex-row gap-3">
                {notifOptions.buttons.map((b, i) => (
                  <button
                    key={i}
                    className="btn btn-sm btn-primary"
                    onClick={b.onclick}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        );
      default:
        return null;
    }
  };

  // Use createRoot to render the toast component directly into the container
  const root = ReactDOM.createRoot(container);
  root.render(toastCard(type, message, notifOptions));

  // Clean up after the duration
  setTimeout(() => {
    root.unmount();
    removeNotification();
  }, duration);
};

export default Toaster;