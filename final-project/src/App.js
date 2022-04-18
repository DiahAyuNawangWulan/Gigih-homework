import './App.css';
import Login from './components/Login/Login';
import React, {useEffect, useState} from 'react';
import { getTokenFromUrl } from './components/Spotify/Spotify';
import hash from 'string-hash';

function App() {
const [token, setToken] = useState(null);

  useEffect (() => {
    const token = getTokenFromUrl ();
    window.location.hash ='';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }

    console.log ("I have a token", token);
  }, []);

  return (
    <div className="App">{token?(<h1>Hi Diah was here</h1>):(<Login/>)}
      </div>
  );
}

export default App;