import React from "react";
import * as THREE from "three";
import classes from "./modelViewer.module.css";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface Props {
  src: string;
}

function ModelViewer({ src }: Props) {
  function Model() {
    const { camera } = useThree();
    // const gltf = useLoader(GLTFLoader, "models/character0.glb");
    const gltf = useLoader(GLTFLoader, src);
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

  return (
    <Canvas className={classes.modelContainer}>
      <ambientLight intensity={0.5} color="white" />
      <directionalLight intensity={0.6} color="white" position={[5, 5, 5]} />
      <pointLight intensity={0.8} color="white" position={[-5, -5, -5]} />
      <Model />
      <OrbitControls
        enablePan={false}
        minDistance={9.5}
        maxDistance={10.5}
        zoomSpeed={0.3}
        zoom0={10}
        // args={[camera, document.documentElement]}
        enableRotate={false}
      />
    </Canvas>
  );
}

export default ModelViewer;
