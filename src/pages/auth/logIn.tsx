import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./auth.module.css";
import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import {
  Apple,
  Facebook,
  Google,
  Instagram,
  LinkedIn,
  Stream,
} from "@mui/icons-material";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [able, setAble] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  useEffect(() => {
    if (email.length && password.length) {
      setAble(true);
    } else setAble(false);
  }, [email, password]);

  return (
    <div className={classes.authMain}>
      <Container className={classes.formContainer}>
        <img src="/logo.svg" />
        <p className={classes.formLabel}>Sign In or Sign Up</p>
        <form className={classes.form}>
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
            onChange={(e) => setEmail(e.target.value)}
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
            onClick={onLogin}
            variant="contained"
            fullWidth
            disabled={!able}
            sx={{ cursor: "pointer" }}
          >
            CONTINUE
          </Button>
          <Divider className={classes.divider}>or continue with</Divider>
          <Grid>
            <Button
              className={classes.socialButtons}
              variant="contained"
              startIcon={<Google sx={{ width: 50, height: 50 }} />}
            ></Button>
            <Button
              className={classes.socialButtons}
              variant="contained"
              startIcon={<Stream sx={{ width: 50, height: 50 }} />}
            ></Button>
            <Button
              className={classes.socialButtons}
              variant="contained"
              startIcon={<Facebook sx={{ width: 50, height: 50 }} />}
            ></Button>
            <Button
              className={classes.socialButtons}
              variant="contained"
              startIcon={<Apple sx={{ width: 50, height: 50 }} />}
            ></Button>
            <Button
              className={classes.socialButtons}
              variant="contained"
              startIcon={<LinkedIn sx={{ width: 50, height: 50 }} />}
            ></Button>
            <Button
              className={classes.socialButtons}
              variant="contained"
              startIcon={<Instagram sx={{ width: 50, height: 50 }} />}
            ></Button>
          </Grid>
          <Typography className={classes.divider}>
            By singning in or signing up, you agree with our <br />
            <NavLink
              className={classes.fontStyle}
              to="https://www.epicgames.com/site/en-US/privacypolicy?lang=en-US"
            >
              Privacy Policy
            </NavLink>
          </Typography>
        </form>
        {/* <section>
          <div>
            <p className={classes.fontStyle}> FocusApp </p>

            <form>
              <div>
                <label className={classes.fontStyle} htmlFor="email-address">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className={classes.fontStyle} htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <button onClick={onLogin}>Login</button>
              </div>
            </form>

            <p className={classes.fontStyle}>
              No account yet? <NavLink to="/signup">Sign up</NavLink>
            </p>
          </div>
        </section> */}
      </Container>
    </div>
  );
};

export default Login;
