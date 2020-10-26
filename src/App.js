import React from 'react';
import './App.css';
// import {
//     Router,
//     Switch,
//     Route,
//     Link,
//     withRouter
// } from "react-router-dom";
import { Router, Route, BrowserRouter, HashRouter, Switch } from 'react-router-dom'

import Home from './view/home/Home'
import About from './view/home/About'
import User from './view/user/User'
import Login from './view/login/Login';


// class App extends React.Component {
//     render() {
//         return (
//             <BrowserRouter>
//                 <Route path="/" component={Home} />
//                 <Route path="/login" component={Login}></Route>
//                 <Route path="/user" component={User} />
//             </BrowserRouter>
//         );
//     }
// }

// export default App;
const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/user" component={User} />
            <Route exact path="/about" component={About} />
        </Switch>
    </BrowserRouter>
);


export default App;