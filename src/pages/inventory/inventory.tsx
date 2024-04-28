import React, { useEffect, useRef, useState } from "react";
import classes from "./inventory.module.css";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import InventoryView from "../../components/inventory/inventoryView/inventoryView";
import InventoryNav from "../../components/inventory/inventoryNav/inventoryNav";
import InventoryModal from "../../components/inventory/inventoryModal";
import SavedCharacterView from "../../components/inventory/inventoryView/savedChracterView/savedCharacterView";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const saveX = gsap.utils.random(["-50%"], true);
const lokerX = gsap.utils.random([0], true);
// const randomX = gsap.utils.mapRange(100, 0, 0, 100);

export default function Inventory() {
  const navigate = useNavigate();
  const [title, setTitle] = useState(0);
  const [characterOptions, setCharacterOptions] = useState(false);
  const [pageMove, setMovePage] = useState(false);

  const [uid, setUid] = useState("");

  useEffect(() => {
    const getModel = async () => {
      auth.onAuthStateChanged(function (user) {
        if (user) {
          setUid(user.uid);
        } else {
          navigate("/regist/login");
        }
      });
    };
    getModel();
  }, [uid, navigate]);

  const handleMenuClick = (key: any) => {
    console.log(key);
    setTitle(key);
    setCharacterOptions(false);
  };

  const [endX, setEndX] = useState<any>();

  const boxRef = useRef<HTMLInputElement>(null);
  const container = useRef<HTMLInputElement>(null);
  useGSAP(
    () => {
      gsap.to(boxRef.current, {
        x: endX,
        duration: 0.3,
      });
    },
    { dependencies: [endX], scope: container }
  );

  return (
    <div ref={container}>
      <div className={classes.pages} ref={boxRef}>
        <div className={classes.inventoryContainer}>
          <InventoryNav menu={menu} onClick={handleMenuClick} />
          <InventoryView handleAdd={() => setEndX(saveX())} />
        </div>
        <div className={classes.savedCharacter}>
          <SavedCharacterView handlePrev={() => setEndX(lokerX())} />
        </div>
      </div>
    </div>
  );
}

const menu = [
  { id: 0, title: "CHARACTER", alarm: true },
  { id: 1, title: "EMOTES", alarm: true },
  { id: 2, title: "WRAPS", alarm: true },
  { id: 3, title: "LOBBY", alarm: true },
  { id: 4, title: "INSTRUMENTS", alarm: true },
  { id: 5, title: "CARS" },
  { id: 6, title: "JAM TRACKS", alarm: true },
];
