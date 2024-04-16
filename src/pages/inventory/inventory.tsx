import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./inventory.module.css";
import { Canvas } from "@react-three/fiber";
import axios from "axios";
import { auth } from "../../firebase";
import { OrbitControls } from "@react-three/drei";
import { UserCharacter } from "../../components/userCharacter";
import { useNavigate } from "react-router-dom";

export default function Inventory() {
  const navigate = useNavigate();
  const [characterName, setCharacterName] = useState(0);
  const [title, setTitle] = useState(0);

  const baseUrl = import.meta.env.VITE_APP_BASE;
  const getCharacterFile = import.meta.env.VITE_GET_CHARACTER_FILE;
  const [uid, setUid] = useState("");
  const [fetchedCharacters, setFetchedCharacters] = useState([]);

  useEffect(() => {
    const getModel = async () => {
      auth.onAuthStateChanged(function (user) {
        if (user) {
          setUid(user.uid);
        } else {
          navigate("/login");
        }
      });
      try {
        if (uid) {
          const response = await axios.get(`${getCharacterFile}?uid=${uid}`);
          console.log("FetchedModel~~~~~~", response.data);
          setFetchedCharacters(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getModel();
  }, [uid, navigate]);

  return (
    <>
      <div className={classes.inventoryMain}>
        <div className={classes.inventoryMenu}>
          <div className={classes.inventoryMenuBody}>
            {menu.map((item, key) => (
              <button
                className={classes.inventoryMenuButton}
                key={item.id}
                onClick={() => setTitle(key)}
              >
                <div className={classes.buttonIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path
                      fill="white"
                      d="M16.429 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM4.774 22.502C4.104 20.257 5.784 18 8.127 18h6.604c2.342 0 4.024 2.257 3.353 4.502L17.04 26H5.82l-1.045-3.498ZM24.429 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4.878 13h5.911l1.507-2.876c1.22-2.33-.47-5.124-3.1-5.124h-5.43a3.62 3.62 0 0 0-.422.024c2.248.264 3.702 2.62 2.824 4.79L19.551 26Z"
                    ></path>
                  </svg>
                </div>
                <div className={classes.buttonTitle}>{item.title}</div>
              </button>
            ))}
          </div>
        </div>
        <div className={classes.inventoryBody}>
          <div className={classes.character}>
            <div className={classes.characterBody}>
              <div className={classes.characterBodyTitle}>
                {menu[title].title}
              </div>
              <div className={classes.characterBodysmallTitle}>
                {charactor[characterName].title}
              </div>
              <div className={classes.characterBodyCards}>
                {charactor.map((item, key) => (
                  <div
                    className={classes.card}
                    key={item.id}
                    onClick={() => setCharacterName(key)}
                  >
                    <img
                      src={item.image}
                      alt="character"
                      className={classes.cardImg}
                    />
                    <div className={classes.colorFlow} />
                  </div>
                ))}
              </div>

              <button className={`${classes.buttons} ${classes.saveButton}`}>
                SAVE CHARACTOR
              </button>
              <button className={`${classes.buttons} ${classes.optionButton}`}>
                OPTIONS
              </button>
            </div>
            <div className={classes.characterDispaly}></div>
          </div>
          <div className={`${classes["bar--secondary"]} ${classes.bar}`}></div>
          {/* charactor save */}
          <div className={classes.character}>
            <div className={classes.characterBody}>
              <div className={classes.characterBodyTitle}>
                {" "}
                SAVED CHARACTOR{" "}
              </div>
              <div className={classes.characterCards}>
                <div className={classes.cardBody}>
                  {charactorSave.map((item, index) => (
                    <div
                      className={`${classes.card} ${classes.characterCard} `}
                    >
                      <img
                        src={item.image}
                        alt="character"
                        className={classes.cardImg}
                      />
                      <div
                        className={`${classes.buttonTitle} ${classes.characterText}`}
                      >
                        Title
                      </div>
                      <div className={classes.colorFlow} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={classes.characterDispaly}></div>
            <div className={classes.characterElement}>
              {charactor.map((item, index) => (
                <div
                  className={`${classes.card} ${classes.characterElementWidth} `}
                >
                  <img
                    src={item.image}
                    alt="character"
                    className={classes.cardImg}
                  />
                  <div className={classes.colorFlow} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const menu = [
  { id: 0, title: "CHARACTOR" },
  { id: 1, title: "EMOTE" },
  { id: 2, title: "WRAPS" },
  { id: 3, title: "LOBBY" },
  { id: 4, title: "INSTRUMENT" },
  { id: 5, title: "CARS" },
  { id: 6, title: "JAMTRACS" },
];

const charactor = [
  { id: 0, title: "OUTFIT", image: "./images/inventory/charactor.png" },
  { id: 1, title: "BACKBLING", image: "./images/inventory/charactor.png" },
  { id: 2, title: "PICKAXE", image: "./images/inventory/charactor.png" },
  { id: 3, title: "GLIDER", image: "./images/inventory/charactor.png" },
  { id: 4, title: "CONTRAIL", image: "./images/inventory/charactor.png" },
  { id: 5, title: "AURA", image: "./images/inventory/charactor.png" },
];

const charactorSave = [
  { id: 0, image: "./images/inventory/charactor.png" },
  { id: 1, image: "./images/inventory/charactor.png" },
  { id: 2, image: "./images/inventory/charactor.png" },
  { id: 3, image: "./images/inventory/charactor.png" },
  { id: 4, image: "./images/inventory/charactor.png" },
  { id: 5, image: "./images/inventory/charactor.png" },
  { id: 6, image: "./images/inventory/charactor.png" },
  { id: 7, image: "./images/inventory/charactor.png" },
  { id: 8, image: "./images/inventory/charactor.png" },
  { id: 9, image: "./images/inventory/charactor.png" },
  { id: 10, image: "./images/inventory/charactor.png" },
  { id: 11, image: "./images/inventory/charactor.png" },
];

{
  /* {fetchedCharacters.map((character) => {
          let { destination, fileName } = character;
          return (
            <Container key={fileName} className={classes.inventoryContainer}>
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
                <group position={[0.8, 0, 3.5]}>
                  <UserCharacter
                    key={fileName}
                    character={`${baseUrl}/${destination}/${fileName}`}
                  />
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
          );
        })} */
}
