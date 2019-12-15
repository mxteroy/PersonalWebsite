import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
    render() {
        const  { title, image, description, link } = this.props.project;


        return (
            <div style={{ display: 'inline-block', margin: 10, width: 300 }}>
                <h3>{title}</h3>
                <img src={image} style={{ width: 200, height: 120 }}/>
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class Projects extends Component {
    render () {
        return (
            <div>
                <h2>
                    Highlighted Projects
                </h2>
                <div>
                    {
                        PROJECTS.map((PROJECT) => {
                            return (
                                <Project key={PROJECT.id} project={PROJECT}></Project>
                            )
                        })
                    } 
                </div>
            </div> 
        )
    }
}

export default Projects;