import {useState} from "react";
import {useWindowDimensions} from "react-native";

/**
 * Home container
 */
export default function useHome() {
    const [selected, setSelected] = useState<number>(0);
    const {height} = useWindowDimensions();

    /**
     * On scroll end (scroll stops moving)
     */
    function onScrollEnd({nativeEvent}) {
        const card = Math.floor(nativeEvent.contentOffset.y / height);
        setSelected(card);
    }

    return {
        selected,
        onScrollEnd,
    };
}
