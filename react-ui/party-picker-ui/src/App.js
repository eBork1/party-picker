import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from './Header'
import Check from './Check';
import Logout from './Logout';
import Picker from './Picker';
import Connect from './Connect';
import Playlist from './Playlist';
import Navbar from './Navbar';

function App() {
    return (
        <div className="App">
        
            <Header />
            <Router>

                <Switch>
                    <Route exact path="/">
                        <Check />
                    </Route>
                    <Route path="/connect">
                        <Connect />
                    </Route>
                    <Route path="/picker">
                        <Picker />
                    </Route>
                    <Route path="/playlist">
                        <Playlist />
                    </Route>
                    
                </Switch>

            </Router>
            {localStorage.getItem("user_token") ?
                (<Logout />) :
                ("")}
        </div>
    );
}

export default App;
