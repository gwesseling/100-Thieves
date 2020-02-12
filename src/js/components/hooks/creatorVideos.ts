import React, {useEffect, useState} from 'react';
import request from '_LIBS/request';
import Config from "react-native-config";

export default function useCreatorVideos(id: string) {
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        request(`${Config.YT_URL}/search?part=snippet&channelId=${id}&maxResults=10&order=date&type=video&key=${Config.YT_KEY}`)
        .then(({items}) => setVideos(items))
        .catch((err) => console.log(err));
    }, []);

    return {
        videos,
    }
}