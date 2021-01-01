import {creatorsMock} from "_COMPONENTS/mocks/creatorsMock";
import useFetch from "react-fetch-hook";
import Config from "react-native-config";
import {SOCIAL_MEDIA_TYPES} from "_HOOKS/socialMedia";

export type LinkType = {
    id: string;
    title: string;
    link: string;
    type: SOCIAL_MEDIA_TYPES;
};

/**
 * Handle creator methods
 */
export default function useCreator(id = 0, amount = 15) {
    const {name, tag, cover, about, links, channelID} = creatorsMock[id];

    return {
        name,
        tag,
        cover,
        about,
        links,
        channelID,
    };
}
