import './App.css';
import Login from './components/Login/Login';
import React, {useEffect, useState} from 'react';
import { getTokenFromUrl } from './components/Spotify/Spotify';
// import hash from 'string-hash';
import SpotifyWebApi from 'spotify-web-api-node';
import Player from './components/Player/Player';
import { useDataLayerValue } from './components/DataLayer/DataLayer';


const spotify = new SpotifyWebApi ();

function App() {
// const [token] = useState(null);
const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect (() => {
    const hash = getTokenFromUrl ();
    window.location.hash ="";
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token)
      dispatch ({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch ({
          type: "SET_USER",
          user: user,
        });
      });
    }

    console.log ("I have a token", hash);
  }, []);

  return (
    <div className="App">{token? ( <Player spotify={spotify}/> ):( <Login/>)} </div>
  );

}

export default App;