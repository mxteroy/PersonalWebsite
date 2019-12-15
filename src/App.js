import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './Socials';
import profile from './assets/pofile.jpg';
import Title from './Title';

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
            <div>
                <div class="bird-container bird-container--one">
                <div class="bird bird--one"></div>
                </div>
                <div class="bird-container bird-container--two">
                <div class="bird bird--two"></div>
                </div>
                <div class="bird-container bird-container--three">
                <div class="bird bird--three"></div>
                </div>
                <div class="bird-container bird-container--four">
                <div class="bird bird--four"></div>
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