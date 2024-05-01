import React from "react";
import classes from "./courses.module.css";
import Button from "../../components/customize/Button";
import CustomizButton from "../../components/customize/CustomizButton";
import FortGameCards from "../../components/fortGameCards/fortGameCards";
import axios from "axios";
import AppConstants from "../../AppConstants";
import { Game } from "../../@types/dataTypes";

interface Props {
  onSet?: (e: Game) => void;
}

const Courses = ({ onSet }: Props) => {
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
    <div className={classes.center}>
      <div className={classes.customize}>
        <Button />
        <CustomizButton />
        <div className={classes.customizeBody}>
          <div className={classes.newCourses}>
            <span className={classes.cardText}>New Courses</span>
            <div className={classes.cardRow}>
              <FortGameCards onSet={onSet} gameDatas={fetchedData} />
            </div>
          </div>
          <div className={classes.newCourses}>
            <span className={classes.cardText}>Popular Courses</span>
            <div className={classes.cardRow}>
              <FortGameCards onSet={onSet} gameDatas={fetchedData} />
            </div>
          </div>
          <div className={classes.newCourses}>
            <span className={classes.cardText}>Trending Courses</span>
            <div className={classes.cardRow}>
              <FortGameCards onSet={onSet} gameDatas={fetchedData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
