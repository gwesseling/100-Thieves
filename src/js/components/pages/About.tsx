import React, {ReactNode} from "react";
import {View, Image, Text} from "react-native";
import styles from "_STYLES/pages/about";
import stylevars from "_STYLES/stylevars";
import LinearGradient from "react-native-linear-gradient";
import Topbar from "_SHARED/Topbar";
import Content from "_SHARED/Content";
import headerImage from "_ASSETS/image/header.jpg";
import {sectionsMock} from "_COMPONENTS/mocks/aboutMock";

/**
 * About page
 */
function About(): ReactNode {
    return (
        <Content style={styles.page}>
            <Topbar float />
            <View style={styles.header}>
                <Image style={styles.headerImage} source={headerImage} />

                <LinearGradient
                    style={styles.headerOverlay}
                    colors={[stylevars.primaryColor, "transparent", "transparent", stylevars.primaryColor]}
                    locations={[0, 0.5, 0.8, 1]}
                />
            </View>

            {sectionsMock.map(({title, content}, i) => (
                <View style={styles.section} key={i}>
                    <Text style={styles.sectionHeader}>{title}</Text>
                    <View style={styles.sectionTextContainer}>
                        {content.map((text, i) => (
                            <Text style={styles.sectionText} key={i}>
                                {text}
                            </Text>
                        ))}
                    </View>
                </View>
            ))}
        </Content>
    );
}

export default About;
