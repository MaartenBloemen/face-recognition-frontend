import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Preloader from "./preloader/Preloader";
import FaceRecognition from "./faceRecognition/FaceRecognition";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path='/loader' component={Preloader}/>
                    <Route path='/' component={FaceRecognition}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
