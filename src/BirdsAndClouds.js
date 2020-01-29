import './styles/bird.css';
import './styles/clouds.css';
import React, { Component } from 'react';

class BirdsAndClouds extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default BirdsAndClouds;