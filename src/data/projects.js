import fireaul from "../assets/fireaul.png";
import aggieSections from "../assets/favicon.ico";
import {
  FIREAULDESCRIPTIONS,
  AGGIESECTIONDESCRIPTIONS,
} from "./projectDescs.js";

const PROJECTS = [
  {
    id: 1,
    title: "FireAUl",
    summary:
      "Assists Australians affected by the wildfires through crowdsourcing fire locations, emergency responders, and SOS alerts",
    link: "https://www.fireaul.online",
    image: fireaul,
    descriptions: FIREAULDESCRIPTIONS,
    date: "Winter 2020",
  },
  {
    id: 2,
    title: "AggieSections",
    summary:
      "Notifies a user when a course section of their choosing becomes open",
    link: "https://www.aggiesections.com",
    image: aggieSections,
    descriptions: AGGIESECTIONDESCRIPTIONS,
    date: "Winter 2020",
  },
];

export default PROJECTS;
