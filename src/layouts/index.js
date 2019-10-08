import React, {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

function Layout(props, ref) {
    // const components = require.context('./components', false, /\.js$/);
    // console.log(components);
    // console.log(components.key());
    // const modules = components.key().reduce((modules, modulePath) => {
    //
    // }, {})

    // console.log('components', components);

    return (
        <div>
            layout page
            {/*<Router>*/}
            {/*    <Switch></Switch>*/}
            {/*</Router>*/}
        </div>
    )
}

export default Layout;
