import React, {useEffect, useState} from "react";
import useFetch from "react-fetch-hook";
import Config from "react-native-config";

export type VideoType = {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        thumbnails: {
            high: {
                url: string;
            };
        };
    };
};

/**
 * Fetch creator videos from YT API
 */
export default function useCreatorVideos(id: string, amount = 15) {
    const videoQuery = useFetch(
        // eslint-disable-next-line max-len
        `${Config.YT_URL}/search?part=snippet&channelId=${id}&maxResults=${amount}&order=date&type=video&key=${Config.YT_KEY}`,
    );

    return {
        videos: videoQuery?.data?.items,
    };
}
