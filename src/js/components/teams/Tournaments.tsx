import React, {ReactNode} from "react";
import Carousel from "_SHARED/Carousel";
import Prize from "_COMPONENTS/teams/Prize";
import styles from "_STYLES/pages/teams";

type Props = {
    tournaments: [
        {
            id: string;
            title: string;
            description: string;
            cover: string;
            placement: string;
        },
    ];
};

const carouselStyling = {
    containerStyle: styles.tournamentCarousel,
    titleStyle: styles.tournamentTitle,
};

/**
 * Team tournaments
 */
export default function Tournaments({tournaments}: Props): ReactNode {
    return (
        <Carousel
            style={carouselStyling}
            title="Tournaments"
            data={tournaments}
            renderItem={({item}) => <Prize {...item} />}
            keyExtractor={(item) => item.id}
            snapToAlignment={"start"}
            snapToInterval={215}
            decelerationRate={"fast"}
        />
    );
}
