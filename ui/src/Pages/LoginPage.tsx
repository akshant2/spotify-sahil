import React from "react";
import { Button } from "@material-ui/core";

const AUTH_URI = process.env.REACT_APP_AUTH_URL;

function LoginPage() {
  return (
    <div className="h-screen bg-black">
      <div className="flex flex-col items-center justify-center mt-6">
        <img
          className="w-96 h-full"
          src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"
        />
        <Button className="w-96 px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-blue-400 bg-black">
          <a className="text-white" href={AUTH_URI}>
            Login To Spotify
          </a>
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
