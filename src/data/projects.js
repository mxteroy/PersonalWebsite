import fireaul from '../assets/fireaul.png';
import aggieSections from '../assets/favicon.ico';
import bestDarnTacos from '../assets/tacos.jpg';
import {FIREAULDESCRIPTIONS, AGGIESECTIONDESCRIPTIONS, BESTDARNTACODESCRIPTIONS} from './projectDescs.js';

const PROJECTS = [
    {
        id: 1,
        title: 'FireAUl.online',
        summary: 'Assists Australians affected by the wildfires though crowdsourcing fire locations, emergency responders, and SOS alerts',
        link: 'https://www.fireaul.online',
        image: fireaul,
        descriptions: FIREAULDESCRIPTIONS,
        date: "Winter 2020"
    },
    {
        id: 2,
        title: 'AggieSections.com',
        summary: 'Notifies a user when a course section of their choosing becomes open',
        link: 'https://www.aggiesections.com',
        image: aggieSections,
        descriptions: AGGIESECTIONDESCRIPTIONS,
        date: "Winter 2020"
    },
    {
        id: 3,
        title: 'Best Darn Tacos',
        summary: 'An application to output the best taco restaurants based on user inputs and past behaviors',
        link: 'https://github.com/15Dkatz/example',
        image: bestDarnTacos,
        descriptions: BESTDARNTACODESCRIPTIONS,
        date: "Fall 2019"
    }
];

export default PROJECTS;