import React from "react";
import data from "../../API";

const SongTitle= ()=> {
    return(
<div className="App">
        <header className="App-header">
          <img className="album" id="albumImage" src={data.album.images[0].url} alt="albumImage"/>
          <h1 className="songTitle">{data.name}</h1>
          <h2 className="songArtist">{data.artists[0].name}</h2>
          <a href="https://reactjs.org" className="playSong buttonTemplate"><span>&#x266A;</span>Select</a>
        </header>
      </div>
    );
};

export default SongTitle;