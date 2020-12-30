import React from "react";
import useFetch from "react-fetch-hook";
import Config from "react-native-config";

type ReturnHook = {
    isLoading: boolean;
    stats: {
        subscriberCount: number;
        videoCount: number;
        viewCount: number;
    };
};

/**
 * Fetch creator stats from YT API
 */
export default function useCreatorStats(id: string): ReturnHook {
    const {data, isLoading} = useFetch(`${Config.YT_URL}/channels?part=statistics&id=${id}&key=${Config.YT_KEY}`);
    const statistics = data?.items[0].statistics || {};

    return {
        isLoading,
        stats: statistics,
    };
}
