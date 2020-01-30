import React from 'react';
import githubIcon from '../assets/github_icon.png';
import linkedinIcon from '../assets/linkedin_icon.png';
import {MdEmail} from "react-icons/md";
import {TiSocialGithub} from "react-icons/ti";
import {FiLinkedin} from "react-icons/fi";
const SOCIAL = [
    {
        id: 1,
        link: 'mailto:mxteroy@gmail.com',
        image: <MdEmail/>
    },
    {
        id: 2,
        link: 'https://www.github.com/mxteroy',
        image: <TiSocialGithub/>
    },
    {
        id: 3,
        link: 'https://www.linkedin.com/in/james-eroy',
        image: <FiLinkedin/>
    }
];

export default SOCIAL;