import React, { useEffect, useState } from "react";
import classes from "./inventory.module.css";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import InventoryShow from "../../components/inventory/inventoryShow/inventoryShow";
import InventoryNav from "../../components/inventory/inventoryNav/inventoryNav";

export default function Inventory() {
  const navigate = useNavigate();
  const [title, setTitle] = useState(0);
  const [characterOptions, setCharacterOptions] = useState(false);

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
    setTitle(key);
    setCharacterOptions(false);
  };

  return (
    <div className={classes.inventoryMain}>
      <InventoryNav menu={menu} onClick={handleMenuClick} />
      <InventoryShow
        characterOptions={characterOptions}
        menu={menu}
        title={title}
        setCharacterOptions={() => setCharacterOptions(true)}
      />
    </div>
  );
}

const menu = [
  { id: 0, title: "CHARACTER" },
  { id: 1, title: "EMOTES" },
  { id: 2, title: "WRAPS" },
  { id: 3, title: "LOBBY" },
  { id: 4, title: "INSTRUMENTS" },
  { id: 5, title: "CARS" },
  { id: 6, title: "JAM TRACKS" },
];
