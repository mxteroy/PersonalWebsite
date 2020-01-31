import React from 'react';
import facebook from '../assets/facebook.png';
import tamucsce from '../assets/tamucsce.png';
import schwab from '../assets/schwab.jpg';
import tamuanth from '../assets/tamuanth.png';
import {FACEBOOK, INFORMATIONINNOVATIONLAB, CHARLESSCHWAB, ANTHROPOLOGY} from './experienceDescs.js';

const EXPERIENCES = [
    {
        id: 1,
        title: 'Facebook',
        summary: <span><strong>Software Engineer Intern</strong> in Menlo Park, California</span>,
        link: 'https://www.fireaul.online',
        image: facebook,
        descriptions: FACEBOOK,
        date: "Summer 2020"
    },
    {
        id: 2,
        title: 'Information Innovation Lab',
        summary: <span><strong>Undergraduate Researcher</strong> in College Station, Texas</span>,
        link: 'https://www.aggiesections.com',
        image: tamucsce,
        descriptions: INFORMATIONINNOVATIONLAB,
        date: "Fall 2020 - Present"
    },
    {
        id: 3,
        title: 'Charles Schwab Co.',
        summary: <span><strong>Software Engineer Intern</strong> in Austin, Texas</span>,
        link: 'https://github.com/15Dkatz/example',
        image: schwab,
        descriptions: CHARLESSCHWAB,
        date: "Summer 2019"
    },
    {
        id: 4,
        title: 'TAMU Anthropology',
        summary: <span><strong>Undergraduate Researcher</strong> in College Station, Texas</span>,
        link: 'https://github.com/15Dkatz/example',
        image: tamuanth,
        descriptions: ANTHROPOLOGY,
        date: "Fall 2018 - Summer 2019"
    }
];

export default EXPERIENCES;