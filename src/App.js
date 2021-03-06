import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Layout from "./layouts";

function App() {
    // console.log(process.env);
    return (
        <div className="App">
            App Page
            <Router>
                <Switch>
                    <Redirect exact from={'/'} to={'/main'}/>
                    <Route path={`/main`} component={Layout}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
