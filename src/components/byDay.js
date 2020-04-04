import React from "react";
import "../css/style.css";

let ByDay = ({
  title1 = "Learn More",
  children1,
  className1 = "text-base md:text-xl",
  title2 = "Learn More",
  children2,
  className2 = "text-xl md:text-4xl "
}) => {
  return (
    <div className="flex flex-col h-56 md:h-96 justify-center items-center">
      <p className={className1}>{children1 ? children1 : title1}</p>
      <h2 className={className2}>{children2 ? children2 : title2}</h2>
    </div>
  );
};

export default ByDay;
