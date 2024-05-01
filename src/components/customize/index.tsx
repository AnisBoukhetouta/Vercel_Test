import React from "react";
import classes from "./index.module.css";
import Button from "./Button";
import CustomizButton from "./CustomizButton";
import FortGameCards from "../fortGameCards/fortGameCards";
import axios from "axios";
import AppConstants from "../../AppConstants";
import { Game } from "../../@types/dataTypes";

const CustomizeForm = () => {
  const [fetchedData, setFetchedData] = React.useState<Game[]>([]);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        await axios
          .get(AppConstants.getFilesUrl)
          .then((response) => {
            setFetchedData((prevState) => {
              return [...prevState, ...response.data.map((data) => data)];
            });
            console.log("FetchedData~~~~~~", response.data);
          })
          .catch((error) => console.log(error));
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);

  return (
    <div className={classes.customize}>
      <Button />
      <CustomizButton />
      <div className={classes.customizeBody}>
        <div className={classes.newCourses}>
          <span className={classes.cardText}>New Courses</span>
          <div className={classes.cardRow}>
            <FortGameCards gameDatas={fetchedData} />
          </div>
        </div>
        <div className={classes.newCourses}>
          <span className={classes.cardText}>Popular Courses</span>
          <div className={classes.cardRow}>
            <FortGameCards gameDatas={fetchedData} />
          </div>
        </div>
        <div className={classes.newCourses}>
          <span className={classes.cardText}>Trending Courses</span>
          <div className={classes.cardRow}>
            <FortGameCards gameDatas={fetchedData} />
          </div>
        </div>
      </div>
    </div>
  );
};

const blueColor = {
  color: "vignetteBgBlue",
};
const yellowColor = {
  color: "yellow",
};

const newcourses = [
  { id: 1, color: "red" },
  { id: 2, color: "red" },
  { id: 3, color: "red" },
  { id: 4, color: "red" },
  { id: 5, color: "red" },
  { id: 6, color: "red" },
];
export default CustomizeForm;
