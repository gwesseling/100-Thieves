import React, {ReactNode} from "react";
import Carousel from "_SHARED/Carousel";
import SocialMedia from "_COMPONENTS/SocialMedia";
import {LinkType} from "_HOOKS/socialMedia";

type Props = {
    style: {[key: string]: string};
    links: [LinkType];
};

/**
 * Renders a list with
 */
export default function SocialMediaList({style, links}: Props): ReactNode {
    return (
        <Carousel
            style={style}
            data={links}
            renderItem={({item}) => <SocialMedia title={item.title} tag={item.tag} type={item.type} link={item.link} />}
            keyExtractor={(item) => item.id}
        />
    );
}
