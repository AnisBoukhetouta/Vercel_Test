import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // Import updateProfile
import { auth } from "../../firebase";
import classes from "./auth.module.css";
import {
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import axios from "axios";

const Signup = () => {
  const userInfoUrl = process.env.USER_INFO;
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [able, setAble] = useState(false);

  const onSignUp = async (e) => {
    e.preventDefault();

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        password
      );
      const user = userCredential.user;

      // Update the user's profile with the userName
      await updateProfile(user, {
        displayName: userName,
      });

      // Extract user information
      const {
        uid,
        email,
        metadata: { creationTime, lastSignInTime },
        providerId,
        stsTokenManager: { accessToken, refreshToken },
        displayName, // Retrieve displayName
      } = user;

      // Construct user info object
      const userInfo = {
        email,
        creationTime,
        lastSignInTime,
        uid,
        providerId,
        accessToken,
        refreshToken,
        userName: displayName, // Use displayName as userName
      };

      // Post user info to your backend
      const response = userInfoUrl && (await axios.post(userInfoUrl, userInfo));
      response && console.log("RESPONSE", response.data);

      // Navigate to login page upon successful sign-up
      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle error codes/messages here
    }
  };

  useEffect(() => {
    if (userName.length && userEmail.length && password.length) {
      setAble(true);
    } else setAble(false);
  }, [userEmail, password]);

  return (
    <div className={classes.authMain}>
      <Container className={classes.formContainer}>
        <img src="/logo.svg" />
        <p className={classes.formLabel}>Sign Up</p>
        <form className={classes.form}>
          <TextField
            type="userName"
            fullWidth
            style={{
              backgroundColor: "#00000000",
              color: "rgb(255, 255, 255)",
              borderRadius: "5px",
            }}
            label="User Name"
            variant="filled"
            placeholder="User Name"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <TextField
            type="email"
            fullWidth
            style={{
              backgroundColor: "#00000000",
              color: "rgb(255, 255, 255)",
              borderRadius: "5px",
            }}
            label="Email Address"
            variant="filled"
            placeholder="Email address"
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <TextField
            type="password"
            fullWidth
            style={{
              backgroundColor: "#00000000",
              color: "rgb(255, 255, 255)",
              borderRadius: "5px",
            }}
            label="Password"
            variant="filled"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            onClick={onSignUp}
            variant="contained"
            fullWidth
            disabled={!able}
            sx={{ cursor: "pointer" }}
          >
            Sign Up
          </Button>
          <Divider className={classes.divider}>or continue with</Divider>
          <Button
            className={classes.socialButtons}
            variant="contained"
            fullWidth
            startIcon={
              <Google sx={{ width: 30, height: 30, marginRight: 1 }} />
            }
          >
            With Google
          </Button>
          <p className={classes.divider}>
            By singning in or signing up, you agree with our <br />
            <NavLink
              className={classes.fontStyle}
              target="blank"
              to="/Privacy Policy"
            >
              Privacy Policy
            </NavLink>
          </p>
        </form>
        <Typography sx={{ marginTop: 2 }} className={classes.divider}>
          Already have an account?{" "}
          <NavLink to="/login" className={classes.fontStyle}>
            Sign in
          </NavLink>
        </Typography>
      </Container>
    </div>
  );
};

export default Signup;
