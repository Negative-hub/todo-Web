import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import {Main} from "./pages/Main";
import {About} from './pages/About'
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {FireBaseState} from "./context/fireBase/FireBaseState";

function App() {
    return (
        <AlertState>
            <FireBaseState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container">
                        <Alert/>
                        <Switch>
                            <Route path='/' exact component={Main}/>
                            <Route path='/about' component={About}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </FireBaseState>
        </AlertState>
    );
}

export default App;