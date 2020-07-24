import Home from "_COMPONENTS/pages/Home";
import About from "_COMPONENTS/pages/About";
import Teams from "_COMPONENTS/pages/Teams";
import Creator from "_COMPONENTS/pages/Creator";
import Creators from "_COMPONENTS/pages/Creators";
import Players from "_COMPONENTS/pages/Players";
import Player from "_COMPONENTS/pages/Player";

export const ROUTES = [
    {
        title: "Home",
        component: Home,
    },
    {
        title: "About",
        component: About,
    },
    {
        title: "Teams",
        component: Teams,
    },
    {
        title: "Creators",
        component: Creators,
    },
    {
        title: "Creator",
        component: Creator,
        isHidden: true,
    },
    {
        title: "Players",
        component: Players,
    },
    {
        title: "Player",
        component: Player,
        isHidden: true,
    },
];
