import React from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useAnimations } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function Model() {
  const { camera } = useThree();
  const gltf = useLoader(GLTFLoader, "models/character0.glb");
  const { animations, nodes } = gltf;
  const mixer = new THREE.AnimationMixer(nodes.Scene);

  const clip = animations[0];
  const action = mixer.clipAction(clip);
  useFrame((state, delta) => {
    mixer.update(delta);
  });
  action.play();
  action.loop = THREE.LoopRepeat;
  camera.position.set(0, 0, 10);

  //   camera.fov = 45; // Set the FOV (in degrees) for the zoom level

  camera.lookAt(0, 0, 0);
  return <primitive object={nodes.Scene} position={[0, -1, 8.2]} />;
}

interface Props {
  src: string;
}

function ModelViewer({ src }: Props) {
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
