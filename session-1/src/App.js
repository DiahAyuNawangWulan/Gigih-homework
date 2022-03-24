import './App.css';
import data from './API.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="album" id="albumImage" src={data.album.images[0].url} alt="albumImage"/>
        <h1 className="songTitle">{data.name}</h1>
        <h2 className="songArtist">{data.artist[0].name}</h2>
        <a href="https://reactjs.org" className="playSong buttonTemplate"><span>&#x266A;</span>Select</a>
      </header>
    </div>
  );
}



export default App;
