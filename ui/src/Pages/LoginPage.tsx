import React from "react";
import { Button } from "@material-ui/core";

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private%20playlist-read-collaborative%20user-top-read`;

function LoginPage() {
  return (
    <div className="h-screen bg-black">
      <div className="justify-center mt-6">
        <img
          className="justify-center w-96 h-full"
          src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"
        />
        <Button className="w-96 px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-blue-400 bg-black">
          <a className="text-white" href={AUTH_URL}>
            Login To Spotify
          </a>
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
