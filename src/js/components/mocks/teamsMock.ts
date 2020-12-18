import lol from "_ASSETS/image/lol.jpg";
import fortnite from "_ASSETS/image/fortnite.jpg";
import lola from "_ASSETS/image/lola.jpg";
import csgo from "_ASSETS/image/csgo.jpg";
import {leaguePlayersMock, csPlayersMock, fortnitePlayersMock, lolaPlayersMock} from "_COMPONENTS/mocks/playersMock";

export const teamsMock = [
    {
        name: "League of Legends",
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis volutpat, pretium urna in, tristique justo. Nam quam augue, posuere at ultrices sit amet, rutrum et quam. Nunc imperdiet euismod aliquam. In tincidunt eros ipsum, ut iaculis ante laoreet non. Nam malesuada tortor et ipsum eleifend, sagittis finibus metus mollis. Suspendisse ac fringilla quam. Sed et lobortis sapien. Aenean euismod in magna vitae consequat. Donec euismod at tortor quis mattis. In at felis nulla.",
        ],
        cover: lol,
        players: leaguePlayersMock,
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
        name: "Fortnite",
        cover: fortnite,
        players: fortnitePlayersMock,
    },
    {
        name: "League of Legends Academy",
        cover: lola,
        players: lolaPlayersMock,
    },
    {
        name: "Counter Strike: Globale Offensive",
        cover: csgo,
        players: csPlayersMock,
    },
];
