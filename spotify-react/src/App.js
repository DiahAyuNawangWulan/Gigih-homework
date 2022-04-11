import "./index.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import CreatePlayList from "./page/createPlaylist";
import Login from "./page/login";
import {useSelector} from "react-redux";

function App() {
  const isLogin = useSelector(state => state.auth.isLogin);

  return (
    <Router>
      
    
    <Switch>
      <Route path={"/create-playlist"}>
        {isLogin ? (
          <CreatePlayList />
        ):(
          <Redirect to={"/"}/>
      )}
      </Route>
      <Route path={"/"} >
        <Login/>
      </Route>
    </Switch>
    
  </Router>
  );
}

export default App;