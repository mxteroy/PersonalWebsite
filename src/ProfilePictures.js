import React, { Component } from "react";
import profile from "./assets/profile.jpg";
import profile1 from "./assets/profile1.jpg";
import profile2 from "./assets/profile2.jpg";
import profile3 from "./assets/profile3.jpg";
import profile4 from "./assets/profile4.jpg";
import profile6 from "./assets/profile6.jpg";
import bitmoji from "./assets/bitmojicomp.JPG";
const PROFILEPICTURES = [bitmoji];

class ProfilePictures extends Component {
  state = { pictureIndex: 0, fadeIn: true };

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 4000);
    this.animateTitles();
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const pictureIndex =
        (this.state.pictureIndex + 1) % PROFILEPICTURES.length;

      this.setState({ pictureIndex, fadeIn: true });
      setTimeout(() => this.setState({ fadeIn: false }), 4000);
    }, 8000);
  };

  render() {
    const { fadeIn, pictureIndex } = this.state;
    const profilePicture = PROFILEPICTURES[pictureIndex];

    return (
      //   <img
      //     className={(fadeIn ? "fade-in" : "fade-out") + " profile"}
      //     src={profilePicture}
      //     alt="profile"
      //   />
      <img className="profile" src={profile6} alt="profile" />
    );
  }
}

export default ProfilePictures;
