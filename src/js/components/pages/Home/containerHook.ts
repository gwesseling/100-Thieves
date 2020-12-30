import {useState} from "react";
import {useWindowDimensions} from "react-native";

type ReturnType = {
    selected: number;
    onScrollEnd: (event: React.UIEvent<HTMLElement>) => void;
};

/**
 * Home container
 */
export default function useHome(): ReturnType {
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
