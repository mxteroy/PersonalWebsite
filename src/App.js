import React, { Component } from 'react';
import SocialProfiles from './Socials';
import profile from './assets/pofile.jpg';
import Title from './Title';
import './bird.css';
import './clouds.css';

class App extends Component{
    state = { displayBio: false };

    // constructor() {
    //     super();
    //     this.state = { displayBio: false };
    //     console.log('component this', this);

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {

        return (
            <div className="container">
                <div class="bird-container bird-container--one">
                    <div class="bird bird--one"></div>
                </div>
                <div class="bird-container bird-container--two">
                    <div class="bird bird--two"></div>
                </div>
                

                <div id="background-wrap">
                    <div class="x1">
                        <div class="cloud"></div>
                    </div>

                    <div class="x2">
                        <div class="cloud"></div>
                    </div>

                    <div class="x3">
                        <div class="cloud"></div>
                    </div>

                    {/* <div class="x4">
                        <div class="cloud"></div>
                    </div>

                    <div class="x5">
                        <div class="cloud"></div>
                    </div> */}
                </div>
                
                <img src={profile} className="profile" alt="profile"/>
                <h1>Hello!</h1>
                <p>My name is James Eroy</p>
                <Title/>
                <p>Find that passion and let it kill you. Let it take over your life.</p>
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
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;