import React from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import BlueFlame from "./BlueFlame"

export default function Nebul() {
  return (
    <Canvas>
      <OrbitControls />
      <PerspectiveCamera makeDefault fov={75} position={[0, 5, -30]} />
      <BlueFlame />
    </Canvas>
  );
}
