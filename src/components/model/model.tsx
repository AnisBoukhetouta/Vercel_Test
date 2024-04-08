import { OrbitControls } from "@react-three/drei";
import React from "react";
import { Soldier } from "../Soldier";
import { Soldierc } from "../Soldierc";
import { Human } from "../Human";

export default function Model() {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      />
      {/* <group position={[1, -1.5, 2]}> */}
      {/* <group position={[1, -1.5, 2]} scale={[0.02, 0.02, 0.02]}> */}
      <group position={[1, -1.5, 2]} scale={[2.3, 2.3, 2.3]}>
        {/* <Soldier /> */}
        {/* <Soldierc /> */}
        <Human />
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
}
