import logo from './logo.svg';
import shawn from './shawn.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PlayList Song</h1>
        <img src={shawn} className="App-logo" alt="shawn" />
        <p>Create Playlist</p>
        <p>
          Tittle : Imagination<br/>
          Artist : Shawn Mendes<br/>
        </p>
        <input
        type='submit'
        value='Search'
        />
        
      </header>
    </div>
  );
}



export default App;
