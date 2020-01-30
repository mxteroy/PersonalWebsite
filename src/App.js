import React, { Component } from 'react';
import SocialProfiles from './Socials';
import Title from './Title';
import MyNavbar from './MyNavbar.js';
import ProfilePictures from './ProfilePictures.js';
import BirdsAndClouds from './BirdsAndClouds.js';
import Sections from './Sections.js';

import PROJECTS from './data/projects';
import EXPERIENCES from './data/experiences';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class App extends Component{

    constructor() {
        super();
        this.state = { displayBio: false };
        console.log('component this', this);

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {

        return (
            <div className="container">
                <BirdsAndClouds/>
                <MyNavbar/>
                <Router>
                    <Switch>
                        <Route path="/resume">
                            <Sections section="Experiences" contents={EXPERIENCES}/>
                            <Sections section="Most Recent Projects" contents={PROJECTS}/>
                        </Route>
                        <Route path="/notes">
                            <p> Notes</p>
                        </Route>
                        <Route path="/">
                            <ProfilePictures/>
                            <hr />
                            <p>Find that passion and let it kill you. Let it take over your life.</p>
                            <hr />
                            <p>My name is James Eroy</p>
                            <Title/>                
                            <SocialProfiles />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;