import React from 'react';
import './App.css';
import AdminPanel from "./Container/AdminPanel/AdminPanel";
import SignIn from "./Container/SignBar/SignIn/SignIn";
// import history from "./history";
import {
    Switch,
    Route,
} from "react-router-dom";
import Account from "./Container/Account/Account";

function App() {
  return (
            <Switch>
                <Route path="/" component={SignIn}  exact />
                <Route  path="/admin" component={AdminPanel} />
                <Route  path="/account"  component={Account} />
            </Switch>
  );
}

export default App;
