import React from 'react';
import githubIcon from '../assets/github_icon.png';
import linkedinIcon from '../assets/linkedin_icon.png';
import {AiOutlineMail} from "react-icons/ai";
import {FaGithubAlt} from "react-icons/fa";
import {FiLinkedin} from "react-icons/fi";
import {FaMediumM} from "react-icons/fa";

const SOCIAL = [
    {
        id: 1,
        link: 'mailto:mxteroy@gmail.com',
        image: <AiOutlineMail/>
    },
    {
        id: 2,
        link: 'https://www.github.com/mxteroy',
        image: <FaGithubAlt/>
    },
    {
        id: 3,
        link: 'https://www.linkedin.com/in/james-eroy',
        image: <FiLinkedin/>
    },
    {
        id: 4,
        link: 'https://medium.com/@jamesmaxelleroy',
        image: <FaMediumM/>
    }
];

export default SOCIAL;