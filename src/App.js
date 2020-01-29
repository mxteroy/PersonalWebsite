import React, { Component } from 'react';
import SocialProfiles from './Socials';
import Title from './Title';
import './styles/bird.css';
import './styles/clouds.css';
import MyNavbar from './MyNavbar.js';
import ProfilePictures from './ProfilePictures.js';

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
                <MyNavbar/>
                <div className="bird-container bird-container--one">
                    <div className="bird bird--one"></div>
                </div>
                <div className="bird-container bird-container--two">
                    <div className="bird bird--two"></div>
                </div>
                

                <div id="background-wrap">
                    <div className="x1">
                        <div className="cloud"></div>
                    </div>

                    <div className="x2">
                        <div className="cloud"></div>
                    </div>

                    <div className="x3">
                        <div className="cloud"></div>
                    </div>

                </div>
                
                <ProfilePictures/>
                <hr />
                <p>Find that passion and let it kill you. Let it take over your life.</p>
                <hr />
                <p>My name is James Eroy</p>
                <Title/>
                {/* {
                    !this.state.displayBio ? 
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                    </div> : (
                    <div>
                        <p>My favorite language is English</p>
                        <p>Besides coding, I also love to play music</p>
                        <button onClick={this.toggleDisplayBio}>Show Less</button>
                    </div>
                    )
                }
                <hr />
                <Projects /> */}
                
                <SocialProfiles />
                
            </div>
        )
    }
}

export default App;