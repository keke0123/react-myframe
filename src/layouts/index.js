import React, {useContext, createContext} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Home from "./components/home";
import './style.sc.scss';

function Layout(props, ref) {
    // console.log('props', props);
    return (
        <div>
            layout page
            <Router>
                <Switch>
                    <Route path={`${props.match.url}/home`} component={Home}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Layout;
