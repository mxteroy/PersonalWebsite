import React from 'react';
import facebook from '../assets/facebook.png';
import tamucsce from '../assets/tamucsce.png';
import schwab from '../assets/schwab.jpg';
import tamuanth from '../assets/tamuanth.png';
import panw from '../assets/panw.png';
import {FACEBOOK, PANW, INFORMATIONINNOVATIONLAB, CHARLESSCHWAB, ANTHROPOLOGY} from './experienceDescs.js';

const EXPERIENCES = [
    {
        id: 1,
        title: 'Facebook',
        summary: <span><strong>Software Engineer Intern</strong> in Menlo Park, California</span>,
        link: '',
        image: facebook,
        descriptions: FACEBOOK,
        date: "Fall 2020"
    },
    {
        id: 2,
        title: 'Palo Alto Networks',
        summary: <span><strong>Software Engineer in Test Intern</strong> in Santa Clara, California</span>,
        link: '',
        image: panw,
        descriptions: PANW,
        date: "Summer 2020"
    },
    {
        id: 3,
        title: 'Charles Schwab Co.',
        summary: <span><strong>Frontend Developer Intern</strong> in Austin, Texas</span>,
        link: '',
        image: schwab,
        descriptions: CHARLESSCHWAB,
        date: "Summer 2019"
    },
    {
        id: 4,
        title: 'TAMU Anthropology',
        summary: <span><strong>Undergraduate Researcher</strong> in College Station, Texas</span>,
        link: '',
        image: tamuanth,
        descriptions: ANTHROPOLOGY,
        date: "Fall 2018 - Summer 2019"
    }
];

export default EXPERIENCES;