import React from "react";
import useFetch from "react-fetch-hook";
import Config from "react-native-config";

/**
 * Fetch creator stats from YT API
 */
export default function useCreatorStats(id: string) {
    const {data, isLoading} = useFetch(`${Config.YT_URL}/channels?part=statistics&id=${id}&key=${Config.YT_KEY}`, [id]);
    const statistics = data?.items[0].statistics ?? {};

    return {
        isLoading,
        stats: statistics,
    };
}
