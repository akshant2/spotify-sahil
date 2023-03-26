import React from "react";
import { Avatar, makeStyles } from "@material-ui/core";

// connecting to my spotify account
const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/dashboard";
const clientId = "2357d14568d846bab2d432e223c97871";

const scopes = ["streaming", "user-read-email", "user-read-private"];
// Using MUI to style my spotify logo
const useStyles = makeStyles({
  login: {
    display: "grid",
    placeItems: "center",
    height: "100vh",
    backgroundColor: "black",

    "& img": {
      width: "30%",
    },

    "& a": {
      padding: "20px",
      borderRadius: "99px",
      backgroundColor: "#1db954",
      fontWeight: 400,
      color: "white",
      textDecoration: "none",
    },

    "& a:hover": {
      backgroundColor: " white",
      borderColor: "#1db954",
      color: "#1db954",
    },
  },
});

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;

function Login() {
  const classes = useStyles();
  return (
    <div className={classes.login}>
      <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png" />
      <a href={loginUrl}>Login To Spotify</a>
    </div>
  );
}

export default Login;
