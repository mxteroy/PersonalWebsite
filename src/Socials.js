import React, { Component } from 'react';
import SOCIALS from './data/socialProfiles';

class SocialProfile extends Component {
    render() {
        const {link, image} = this.props.project;

        return (
            <div style={ {display: "inline-block", margin: 10, width: 50} }>
                <a href={link} target="_blank" alt={link}>
                    {image}
                </a>
            </div>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <div>
                    {
                        SOCIALS.map((SOCIAL) => {
                            return (
                                <SocialProfile key={SOCIAL.id} project={SOCIAL}></SocialProfile>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
};

export default SocialProfiles;