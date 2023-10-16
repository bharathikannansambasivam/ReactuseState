import React, { useState } from "react";

const UseStateDemo = (props) => {
  let { plantdetails } = props;

  let { height, plantName, icon } = plantdetails;

  const [incHeight, setHeight] = useState(height);
  function handleClick() {
    setHeight(incHeight + 1);
  }
  console.log(incHeight);
  let message = "I Need Some Water🥹";
  if (incHeight >= 70 && incHeight < 80) {
    message = "You're growing well!🥺";
  } else if (incHeight >= 80 && incHeight < 90) {
    message = "Looking good!🤩";
  } else if (incHeight >= 90 && incHeight < 100) {
    message = "Keep it up!🥳";
  } else if (incHeight >= 100 && incHeight < 110) {
    message = "Great progress!😍";
  } else if (incHeight >= 110) {
    message = "THANKS FOR HELPING ME🌻";
  }
  return (
    <div className="flex flex-col items-center mt-10">
      <h1>HEY I'M {plantName}</h1>

      <span style={{ fontSize: `${incHeight}px` }}>{icon}</span>
      <div>
        <button
          style={{
            backgroundColor: "#4CAF50",
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            transitionDuration: "0.4s",
            cursor: "pointer",
            borderRadius: "12px",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
          }}
          onClick={handleClick}
        >
          GIVE SOME WATER💧
        </button>
      </div>
      {message && (
        <p className="text-4xl mt-10 border bg-sky-300 p-2 rounded-sm">
          {message}
        </p>
      )}

      {incHeight > 150 && <p>THANKS</p>}
    </div>
  );
};

export default UseStateDemo;
