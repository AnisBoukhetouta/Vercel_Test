import React from "react";
import ModelViewer from "../components/modelViewer/modelViewer";

export default function Practice() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <ModelViewer src="/models/character0.glb" />
    </div>
  );
}
