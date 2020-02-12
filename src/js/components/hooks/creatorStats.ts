import React, {useState, useEffect} from 'react';
import request from '_LIBS/request';
import Config from "react-native-config";

export default function useCreatorStats(id: string) {
    const [videoCount, setVideoCount] = useState<number>(0);
    const [subCount, setSubCount] = useState<number>(0);
    const [viewCount, setViewCount] = useState<number>(0)

    // TODO: place url and api key in .env
    useEffect(() => {
        request(`${Config.YT_URL}/channels?part=statistics&id=${id}&key=${Config.YT_KEY}`)
        .then(({items}) => {
            const {statistics} = items[0];
            setViewCount(statistics.viewCount);
            setSubCount(statistics.subscriberCount);
            setVideoCount(statistics.videoCount);
        })
        .catch((err) => console.log(err));
    }, []);

    return {
        videoCount,
        subCount,
        viewCount
    }
}