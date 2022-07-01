import { React, useEffect } from "react";

const Welcome = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className="preloader container">
      <div className="decorate">
        <div className="small-full"></div>
        <div className="small-border"></div>
        <div className="big-border"></div>
        <div className="big-full"></div>
      </div>

      <div className="content">
        <p>WELCOME</p>
        <div className="button">Let's start</div>
      </div>
    </div>
  );
};

export default Welcome;
