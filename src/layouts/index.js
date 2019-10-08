import React, {useContext, createContext} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Home from "./components/home";
import './style.sc.scss';

// components 의 file 들을 가져와서 router 에 맵핑해준다.
const modulesFiles = require.context('./components', false, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    // console.log('array', array);
    console.log('modules', modules);
    console.log('modulePath', modulePath);
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modulesFiles(modulePath).default;
    // modules.path = moduleName;
    // modules.component = value;
    modules.push({path: moduleName, component: value});
    return modules;
}, []);

// console.log(modules);
// console.log('home', Home);

function Layout(props, ref) {
    // router 를 이런식으로 사용할수도 있고, 위와 같이 모듈을 받아서 맵핑해서 사용할수도 있다.
    // const routes = [{
    //     path: 'home',
    //     component: Home
    // }];
    const routeComponents = modules.map(({path, component}, key) => <Route exact path={props.match.url+'/'+path} component={component} key={key} />);
    return (
        <div>
            layout page
            <Router>
                <Switch>
                    {/*<Route path={`${props.match.url}/home`} component={Home}/>*/}
                    {routeComponents}
                </Switch>
            </Router>
        </div>
    )
}

export default Layout;
