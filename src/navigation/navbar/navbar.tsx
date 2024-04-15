import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import Navlinks from "../navlinks/navlinks";
import { auth } from "../../firebase";
import SearchButton from "../../components/menu/searchButton";
import LanguageButton from "../../components/menu/languageButton";
import LoginButton from "../../components/menu/loginButton";
import Line from "../../components/menu/line";
import DownloadButton from "../../components/menu/dowloadButton";
import EpicButton from "../../components/menu/epicButton";
import SearchInput from "../../components/menu/searchInput";
import { NavLink } from "react-router-dom";

const navbar = (props) => {
  const [uid, setUid] = useState("");
  const [search, setSearch] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      user && setUid(user.uid);
    });
  }, []);

  return (
    <header className={classes.navbar}>
      <nav className={classes.tool}>
        <EpicButton />
        <Line />
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h1 className={classes.title}>LexSCHOOL</h1>
        </NavLink>
        <Navlinks />
      </nav>
      <nav className={classes.tools}>
        {search ? (
          <button
            className={classes.searchButton}
            onClick={() => {
              setSearch(false);
            }}
          >
            <SearchButton />
          </button>
        ) : (
          <SearchInput handleClick={() => setSearch(true)} />
        )}
        <Line />
        <LanguageButton />
        <LoginButton uid={uid} />
        <DownloadButton />
      </nav>
    </header>
  );
};

export default navbar;
