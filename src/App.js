import "./App.css";
import Home from "./Screens/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login, logout, selectUser } from "./features/counter/userSlice";
// import { useEffect } from "react";
// import { auth } from "./Requesting API/firebase";
import Profile from "./Screens/Profile";

function App() {


  return (
    <div className="app">
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
