import React from "react";
import FortniteButton from "../customs/FortniteButton";

function Cousrses() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <FortniteButton
        text="Fortnite Button"
        subtext="Fortnite"
        type="primary"
        color="yellow"
      />
    </div>
  );
}
