import React from "react";

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private%20playlist-read-collaborative%20user-top-read`;

function LoginPage() {
  return (
    <div>
      <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png" />
      <a href={AUTH_URL}>Login To Spotify</a>
    </div>
  );
}

export default LoginPage;
