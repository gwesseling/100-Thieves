/* eslint-disable max-len */
/* eslint-disable max-lines */
import ssumday from "_ASSETS/image/league/ssumday.jpeg";
import meteos from "_ASSETS/image/league/meteos.jpg";
import cody from "_ASSETS/image/league/cody.jpg";
import ryoma from "_ASSETS/image/league/ryoma.jpg";
import stunt from "_ASSETS/image/league/stunt.jpg";
import chris from "_ASSETS/image/league/chris.jpg";
import zikz from "_ASSETS/image/league/zikz.jpg";

import azr from "_ASSETS/image/cs/azr.jpg";
import jks from "_ASSETS/image/cs/jks.jpg";
import jkaem from "_ASSETS/image/cs/jkaem.jpeg";
import liazz from "_ASSETS/image/cs/liazz.jpg";
import gratisfaction from "_ASSETS/image/cs/gratisfaction.jpg";
import kassad from "_ASSETS/image/cs/kassad.jpg";

import elevate from "_ASSETS/image/fortnite/elevate.jpg";
import ceice from "_ASSETS/image/fortnite/ceice.png";
import kyzui from "_ASSETS/image/fortnite/kyzui.jpg";
import klass from "_ASSETS/image/fortnite/klass.jpeg";
import arkhram from "_ASSETS/image/fortnite/arkhram.jpg";

import fakegod from "_ASSETS/image/lola/fakegod.jpg";
import soligo from "_ASSETS/image/lola/soligo.jpg";
import prismal from "_ASSETS/image/lola/prismal.jpg";
import kelsey from "_ASSETS/image/lola/kelsey.jpg";

import hiko from "_ASSETS/image/valorant/hiko.jpg";
import steel from "_ASSETS/image/valorant/steel.jpg";
import nitro from "_ASSETS/image/valorant/nitro.jpg";
import dicey from "_ASSETS/image/valorant/dicey.jpg";

import def from "_ASSETS/image/logo.png";

import {SOCIAL_MEDIA_TYPES} from "_HOOKS/socialMedia";

export const leaguePlayersMock = [
    {
        id: "0",
        name: "Ssumday",
        tag: "Top Laner",
        cover: ssumday,
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis volutpat, pretium urna in, tristique justo. Nam quam augue, posuere at ultrices sit amet, rutrum et quam. Nunc imperdiet euismod aliquam. In tincidunt eros ipsum, ut iaculis ante laoreet non. Nam malesuada tortor et ipsum eleifend, sagittis finibus metus mollis. Suspendisse ac fringilla quam. Sed et lobortis sapien. Aenean euismod in magna vitae consequat. Donec euismod at tortor quis mattis. In at felis nulla.",
        ],
        links: [
            {
                id: "1",
                title: "Ssumday",
                type: SOCIAL_MEDIA_TYPES.youtube,
                link: "https://www.youtube.com/ssumday",
            },
            {
                id: "2",
                title: "100T Ssumday",
                type: SOCIAL_MEDIA_TYPES.twitter,
                link: "https://twitter.com/ssumday",
            },
            {
                id: "3",
                title: "ssumday",
                type: SOCIAL_MEDIA_TYPES.instagram,
                link: "https://www.instagram.com/ssumday/",
            },
            {
                id: "4",
                title: "ssumday",
                type: SOCIAL_MEDIA_TYPES.twitch,
                link: "https://www.twitch.tv/ssumday",
            },
        ],
        stats: {
            games: 20,
            kills: 64,
            deaths: 15,
        },
        games: [
            {
                id: "0",
                team: "https://cdn.pandascore.co/images/team/image/125738/dignitas-fe.png",
                opponent: "https://cdn.pandascore.co/images/team/image/125745/carnage-fe.png",
                stats: {
                    kills: 5,
                    assists: 3,
                    deaths: 1,
                },
            },
            {
                id: "1",
                team: "https://cdn.pandascore.co/images/team/image/125738/dignitas-fe.png",
                opponent: "https://cdn.pandascore.co/images/team/image/125745/carnage-fe.png",
                stats: {
                    kills: 6,
                    assists: 6,
                    deaths: 4,
                },
            },
        ],
    },
    {
        id: "1",
        name: "Meteos",
        tag: "Jungler",
        cover: meteos,
    },
    {
        id: "2",
        name: "Cody Sun",
        tag: "Bot Laner",
        cover: cody,
    },
    {
        id: "3",
        name: "Ryoma",
        tag: "Mid Laner",
        cover: ryoma,
    },
    {
        id: "4",
        name: "Stunt",
        tag: "Support",
        cover: stunt,
    },
    {
        id: "5",
        name: "Chris",
        tag: "General Manager",
        cover: chris,
    },
    {
        id: "6",
        name: "Tony",
        tag: "Head Coach",
        cover: zikz,
    },
    {
        id: "7",
        name: "Joseph",
        tag: "Strategic Coach",
        cover: def,
    },
    {
        id: "8",
        name: "Nathan",
        tag: "Head Analyst",
        cover: def,
    },
];

export const csPlayersMock = [
    {
        id: "9",
        name: "AZR",
        cover: azr,
    },
    {
        id: "10",
        name: "jks",
        cover: jks,
    },
    {
        id: "11",
        name: "jkaem",
        cover: jkaem,
    },
    {
        id: "12",
        name: "Liazz",
        cover: liazz,
    },
    {
        id: "13",
        name: "Gratisfaction",
        cover: gratisfaction,
    },
    {
        id: "14",
        name: "kassad",
        tag: "Head Coach",
        cover: kassad,
    },
    {
        id: "15",
        name: "Chris",
        tag: "Manager",
        cover: def,
    },
];

export const fortnitePlayersMock = [
    {
        id: "16",
        name: "Elevate",
        cover: elevate,
    },
    {
        id: "17",
        name: "Ceice",
        cover: ceice,
    },
    {
        id: "18",
        name: "Kyzui",
        cover: kyzui,
    },
    {
        id: "19",
        name: "Klass",
        cover: klass,
    },
    {
        id: "20",
        name: "Arkhram",
        cover: arkhram,
    },
    {
        id: "21",
        name: "Falconer",
        cover: def,
    },
    {
        id: "22",
        name: "Grandma",
        cover: def,
    },
];

export const lolaPlayersMock = [
    {
        id: "23",
        name: "Fakegod",
        tag: "Top Laner",
        cover: fakegod,
    },
    {
        id: "24",
        name: "Soligo",
        tag: "Mid Laner",
        cover: soligo,
    },
    {
        id: "25",
        name: "Prismal",
        tag: "Bot Laner",
        cover: prismal,
    },
    {
        id: "26",
        name: "Breezyyy",
        tag: "Support",
        cover: def,
    },
    {
        id: "27",
        name: "Contractz",
        tag: "Jungler",
        cover: def,
    },
    {
        id: "28",
        name: "Kelsey",
        tag: "Head Coach",
        cover: kelsey,
    },
];

export const valorantMock = [
    {
        id: "29",
        name: "Hiko",
        cover: hiko,
    },
    {
        id: "30",
        name: "Nitro",
        cover: nitro,
    },
    {
        id: "31",
        name: "Steel",
        cover: steel,
    },
    {
        id: "32",
        name: "Dicey",
        cover: dicey,
    },
    {
        id: "33",
        name: "Asuna",
        cover: def,
    },
    {
        id: "34",
        name: "Frost",
        cover: def,
    },
];

export const playersMock = [
    ...leaguePlayersMock,
    ...lolaPlayersMock,
    ...fortnitePlayersMock,
    ...csPlayersMock,
    ...valorantMock,
];
