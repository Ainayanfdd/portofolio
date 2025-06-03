import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <span style={{ color: "#7096D1" }}>
      <Typewriter
        options={{
          strings: ["UIUX Designer", "Front-end Developer", "Graphic Design"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </span>
  );
}

export default Type;
