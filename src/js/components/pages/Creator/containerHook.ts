import {creatorsMock} from "_COMPONENTS/mocks/creatorsMock";
import useFetch from "react-fetch-hook";
import Config from "react-native-config";

/**
 * Handle creator methods
 */
export default function useCreator(id: number = 0, amount: number = 15) {
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
