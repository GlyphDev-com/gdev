import style from "./counterBanner.module.css";
import { useEffect, useState, useRef } from "react";

export  default function CounterBanner(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [CurrentCount, setCurrentCount] = useState({
    currentCount1: 0,
    currentCount2: 0,
    currentCount3: 0,
  });
  const elementRef = useRef(null);

  function count() {
    setInterval(() => {
      if (CurrentCount.currentCount1 < props.end1) {
        let temp1 = CurrentCount.currentCount1+=10;
        setCurrentCount({
          ...CurrentCount,

          currentCount1: temp1,
        });
      }

      if (CurrentCount.currentCount2 < props.end2) {
        let temp2 = CurrentCount.currentCount2+=10;
        setCurrentCount({
          ...CurrentCount,

          currentCount2: temp2,
        });
      }

      if (CurrentCount.currentCount3 < props.end3) {
        let temp3 = CurrentCount.currentCount3+=10;
        setCurrentCount({
          ...CurrentCount,

          currentCount3: temp3,
        });
      }
    }, 50);
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        count();
        observer.unobserve(currentElement);
      }
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      className={style.CounterBanner}
      ref={elementRef}
      style={{
        height: props.height,
        padding: props.padding,
        backgroundColor: props.background,
      }}
    >
      {
        <>
          <div className={style.CounterLabel}>
            <h1 className="text-light">{`${CurrentCount.currentCount1}+`}</h1>
            <p className="text-light">{props.label1}</p>
          </div>

          <div className={style.CounterLabel}>
            <h1 className="text-light">{`${CurrentCount.currentCount2}+`}</h1>
            <p className="text-light">{props.label2}</p>
          </div>

          <div className={style.CounterLabel}>
            <h1 className="text-light">{`${CurrentCount.currentCount3}+`}</h1>
            <p className="text-light ">{props.label3}</p>
          </div>
        </>
      }
    </div>
  );
}