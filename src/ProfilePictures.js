import React, { Component } from 'react';
import profile from './assets/profile.jpg';
import profile1 from './assets/profile1.jpg';
import profile2 from './assets/profile2.jpg';
import profile3 from './assets/profile3.jpg';
import profile4 from './assets/profile4.jpg';

const PROFILEPICTURES = [
    profile, profile1, profile2, profile3, profile4
];

class ProfilePictures extends Component {
    state = { pictureIndex: 0};

    componentDidMount () {
        this.animateTitles();
    }

    componentWillUnmount () {
        clearInterval(this.titleInterval);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const pictureIndex = (this.state.pictureIndex + 1) % PROFILEPICTURES.length;

            this.setState({ pictureIndex});
        }, 10000);
    }

    render() {
        const {pictureIndex} = this.state;
        const profilePicture = PROFILEPICTURES[pictureIndex];

        return (
            <img className="w3-animate-fading profile" src={profilePicture} alt="profile"/>
        )
    }
}

export default ProfilePictures;