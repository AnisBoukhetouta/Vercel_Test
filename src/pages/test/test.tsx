import React from "react";
import classes from "./test.module.css";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import axios from "axios";

const test = () => {
  const [fetchedData, setFetchedData] = React.useState([]);
  const handleClick = async () => {
    try {
      const getAllFiles = await axios
        .get("http://localhost:5000/files")
        .then((response) => {
          console.log("RESULT~~~~~~", response.data);
          setFetchedData(response.data);
          console.log("FetchedData~~~~~~", response.data);
        })
        .catch((error) => console.log(error));
    } catch (e) {
      console.log(e);
    }
    console.log("clicked");
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        paddingTop: "4rem",
      }}
      className={classes.testContainer}
    >
      <Button onClick={handleClick}>GET Button</Button>
      <img
        className={classes.image}
        alt="testimg"
        src="http://localhost:5000/uploads/Title/portraitFile.jpeg"
      />
    </Container>
  );
};

export default test;
