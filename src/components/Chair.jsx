import React, { useState } from "react";
import "./Chair.css";

export const Chair = ({ chair, indexChair }) => {
  const [hover, setHover] = useState(false);
  const showPerson = (employee) => {
    setHover(true);
  };
  const hidePerson = (employee) => {
    setHover(false);
  };
  return (
    <div
      onMouseEnter={() => showPerson(chair)}
      onMouseLeave={() => hidePerson(chair)}
    >
      <div
        className={`chair chair-${indexChair} ${
          chair !== null ? "chair-occupied" : ""
        }`}
      ></div>

      {chair !== null && (
        <div
          className={`employee-card employee-card-${indexChair} ${
            hover ? "employee-card-hover" : ""
          }`}
        >
          <p className="">name:{chair.name}</p>
          <p className="">jobTitle:{chair.jobTitle}</p>
          <p className="">team:{chair.team}</p>
          <p className="">currentProject:{chair.currentProject}</p>
        </div>
      )}
    </div>
  );
};
