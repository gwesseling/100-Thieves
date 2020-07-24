import React, {useEffect, useState} from "react";
import useFetch from "react-fetch-hook";
import Config from "react-native-config";

/**
 * Fetch creator videos from YT API
 */
export default function useCreatorVideos(id: string, amount: number = 15) {
    const videoQuery = useFetch(
        // eslint-disable-next-line max-len
        `${Config.YT_URL}/search?part=snippet&channelId=${id}&maxResults=${amount}&order=date&type=video&key=${Config.YT_KEY}`,
    );

    return {
        videoQuery,
        videos: videoQuery?.data?.items,
    };
}
