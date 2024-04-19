import React from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useAnimations } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function Model() {
  const { camera } = useThree();
  const gltf = useLoader(GLTFLoader, "models/character.glb");
  const { animations, nodes } = gltf;
  const { actions } = useAnimations(animations, nodes);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~", nodes);
  actions.animationName?.play();
  camera.position.set(0, 0, 10); // Increase or decrease the z-coordinate for zooming

  // Adjust camera field of view (optional)
  //   camera.fov = 45; // Set the FOV (in degrees) for the zoom level

  camera.lookAt(0, 0, 0); // Look at the center of the scene
  return <primitive object={nodes.scene} position={[0, -1, 8.2]} />;
}

function ModelViewer() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={1} />
      <directionalLight
        intensity={0.8}
        position={[0, 0, 0]}
        // position={[300, 300, 400]}
        // angle={0.2}
        // penumbra={1}
      />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}

export default ModelViewer;
