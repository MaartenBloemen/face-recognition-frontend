import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Preloader from "./preloader/Preloader";
import FaceRecognition from "./faceRecognition/FaceRecognition";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Login from "./login/Login";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path='/loader' component={Preloader}/>
                    <Route path='/login' component={Login}/>
                    <PrivateRoute path='/' component={FaceRecognition}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
