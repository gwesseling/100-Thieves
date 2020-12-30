/* eslint-disable max-len */
import lol from "_ASSETS/image/lol.jpg";
import fortnite from "_ASSETS/image/fortnite.jpg";
import lola from "_ASSETS/image/lola.jpg";
import csgo from "_ASSETS/image/csgo.jpg";
import valorant from "_ASSETS/image/valorant.jpeg";

import {
    leaguePlayersMock,
    csPlayersMock,
    fortnitePlayersMock,
    lolaPlayersMock,
    valorantMock,
} from "_COMPONENTS/mocks/playersMock";

export const teamsMock = [
    {
        id: "0",
        name: "League of Legends",
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis volutpat, pretium urna in, tristique justo. Nam quam augue, posuere at ultrices sit amet, rutrum et quam. Nunc imperdiet euismod aliquam. In tincidunt eros ipsum, ut iaculis ante laoreet non. Nam malesuada tortor et ipsum eleifend, sagittis finibus metus mollis. Suspendisse ac fringilla quam. Sed et lobortis sapien. Aenean euismod in magna vitae consequat. Donec euismod at tortor quis mattis. In at felis nulla.",
        ],
        cover: lol,
        players: leaguePlayersMock,
    },
    {
        id: "1",
        name: "League of Legends Academy",
        cover: lola,
        players: lolaPlayersMock,
    },
    {
        id: "2",
        name: "Fortnite",
        cover: fortnite,
        players: fortnitePlayersMock,
    },
    {
        id: "3",
        name: "Counter Strike: Globale Offensive",
        cover: csgo,
        players: csPlayersMock,
    },
    {
        id: "4",
        name: "Valorant",
        cover: valorant,
        players: valorantMock,
        tournaments: [
            {
                id: "0",
                title: "Valorant First Strike",
                description: "a four-day, cut-throat tournament featuring the region’s top eight teams.",
                cover:
                    "https://liquipedia.net/commons/images/thumb/b/b3/Valorant_First_Strike.png/600px-Valorant_First_Strike.png",
                placement: "1st place",
            },
        ],
    },
];
