import axios from "axios";
import "./App.css";
import React, { useState, useCallback, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const apiKey = "1pigYzAdHBepN1i5E1ga2Jdug12i4Mu3Ph8PYp15";

const apiUrl = "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/";

const jwtToken = "mockToken";

const authAxios = axios.create({
  
  baseURL: apiUrl,
  headers: {
    "x-api-key": `${apiKey}`,
    Authorization: `Bearer ${jwtToken}`,
  },
});


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function App() {
  const [customerInfo, setCustomerInfo] = useState({
    custID: "mockID",
    firstName: "mockFirstName",
    lastName: "mockLastName",
    nric: "mockNric",
    gender: "mockGender",
    age: "mockAge",
    phoneNumber: "mockPhoneNumber",
    email: "mockEmail",
    address: "mockAddress",
  });
  const [errorInfo, setErrorInfo] = useState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const login = useCallback(async () => {
    try {
      //call the api

      const result = await authAxios.post(`/techtrek2020/login`, {
        username: { username },
        password: { password },
      });

      setCustomerInfo(result.data);
    } catch (error) {
      //catch any errors
      setErrorInfo(error.message);
    }
  }, []);

  const submitHandler = () => {
    login();
  };

  return (
    <div className="App">
      <button onClick={() => login()}> Login </button>

      <div>
        {Object.entries(customerInfo).map((info) => {
          return <ul key={info[1]}>{`${info[0]} : ${info[1]}`}</ul>;
        })}
      </div>
      <p>{errorInfo}</p>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              submitHandler();
            }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="./Register" variant="body2">
                  {"Register"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default App;
