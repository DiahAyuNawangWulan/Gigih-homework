import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import dashboard from './dashboard';

const code = new URLSearchParams(windows.location.search).get('code')

function App() {
  return code? <dashboard code={code}/>: <Login/>
    
}

export default App;