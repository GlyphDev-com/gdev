import React, {useState, useEffect} from "react";
import {TypeAnimation} from "react-type-animation";

const TypeWriter = ({sequence = [], speed = 150, wrapper = "span"}) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Delay showing the TypeAnimation
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 1000); // Delay for 3 seconds

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showAnimation && (
        <TypeAnimation
          sequence={sequence}
          wrapper={wrapper}
          speed={speed}
          repeat={Infinity}
        />
      )}
    </>
  );
};

export default TypeWriter;