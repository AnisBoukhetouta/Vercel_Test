import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./inventory.module.css";
import { Canvas } from "@react-three/fiber";
import Model from "../../components/model/model";
import axios from "axios";
import { auth } from "../../firebase";
import { OrbitControls } from "@react-three/drei";
import { UserCharacter } from "../../components/userCharacter";
import { useNavigate } from "react-router-dom";

export default function Inventory() {
  const navigate = useNavigate();
  const [uid, setUid] = useState("");
  const [characterUrl, setCharacterUrl] = useState("");

  useEffect(() => {
    const getModel = async () => {
      auth.onAuthStateChanged(function (user) {
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~", user?.uid);
        if (user) {
          setUid(user.uid);
        } else {
          navigate("/login");
        }
      });
      try {
        if (uid) {
          await axios
            .get(`http://grat.fun/api/pwniq/characterFiles?uid=${uid}`)
            .then((response) => {
              const { destination, fileName } = response.data;
              console.log("FetchedModel~~~~~~", response.data);
              setCharacterUrl(
                `http://grat.fun/api/pwniq/${destination}/${fileName}`
              );
            });
        }
      } catch (e) {
        console.log(e);
      }
    };
    getModel();
  });

  return (
    <div className={classes.inventoryMain}>
      <Container className={classes.inventoryContainer}>
        <Canvas
          camera={{ position: [1, 1, 5], fov: 50 }}
          className={classes.modelBox}
          style={{
            position: "relative",
            // backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "Top",
          }}
          shadows
        >
          <OrbitControls
            minAzimuthAngle={0.2}
            maxAzimuthAngle={0.2}
            minPolarAngle={1.34}
            maxPolarAngle={1.34}
            minDistance={7}
            maxDistance={7}
          />
          <ambientLight />
          <directionalLight
            position={[-5, 5, 5]}
            castShadow
            shadow-mapSize={1024}
          />
          <group position={[1, -0.5, 3.5]}>
            {characterUrl && <UserCharacter character={characterUrl} />}
          </group>
          <mesh
            rotation={[-0.5 * Math.PI, 0, 0]}
            position={[0, -1, 0]}
            receiveShadow
          >
            <planeGeometry args={[10, 10, 1, 1]} />
            <shadowMaterial transparent opacity={0.2} />
          </mesh>
        </Canvas>
      </Container>
    </div>
  );
}
