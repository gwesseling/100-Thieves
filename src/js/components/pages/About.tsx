import React, {ReactNode, Fragment} from 'react';
import {View, Image, Text} from 'react-native';
import styles from '_STYLES/pages/about';
import stylesvars from '_STYLES/stylevars';
import LinearGradient from 'react-native-linear-gradient';
import Topbar from '_SHARED/Topbar';
import Content from '_SHARED/Content';

import headerImage from '_ASSETS/image/header.jpg';

function About(): ReactNode {

    return (
        <Fragment>
            <Content>
                <Topbar float />
                <View style={styles.header}>
                    <Image style={styles.headerImage} source={headerImage} />
                    <LinearGradient style={styles.headerOverlay} colors={[stylesvars.primaryColor, 'transparent', 'transparent', stylesvars.primaryColor]} locations={[0, 0.5, 0.8, 1]} />
                </View>
                <View style={styles.section}>
                        <Text style={styles.sectionHeader}>100 thieves</Text>
                        <Text style={[styles.sectionText, styles.sectionTextContainer]}>100 Thieves ("Hundred Thieves") is a
                            premium lifestyle brand and gaming 
                            organization. Built at the intersection 
                            of competitive gaming, entertainment,
                            and apparel, 100 Thieves was 
                            founded in 2017 by Matthew 
                            "Nadeshot" Haag, the former OpTic 
                            Gaming Call of Duty captain, 
                            X Games gold medalist, and 2014 
                            Esports Athlete of the Year. After 
                            retiring from competitive play, 
                            Matt founded 100 Thieves as a 
                            creative outlet for his entrepreneurial 
                            passions. In its first two years, 100 
                            Thieves has won multiple esports 
                            major championships in Call of Duty, 
                            made the League of Legends and 
                            Fortnite World Championships, 
                            launched the top gaming podcasts 
                            on iTunes, sold out over a dozen 
                            apparel drops, and is supported by 
                            major partners such as Cash App, 
                            General Mills, Rocket Mortgage, 
                            and Red Bull. The company has 
                            raised $60M from investors including 
                            Drake, Scooter Braun, Cleveland 
                            Cavaliers Owner & Quicken Loans 
                            Chairman Dan Gilbert, Artist Capital 
                            Management, Ludlow Ventures, 
                            Green Bay Ventures, and Sequoia. 
                            100 Thieves' mission is to give every 
                            gamer something to be proud of.
                        </Text>
                </View>
                <View style={styles.section}>
                        <Text style={styles.sectionHeader}>matthew Nadeshot haag</Text>
                        <View style={styles.sectionTextContainer}>
                            <Text style={styles.sectionText}>
                                Matthew "Nadeshot" Haag is the Founder & CEO of 100 Thieves. Matt leads the company’s creative, brand, and strategic direction, while also sitting on the company’s board of directors. Prior to founding 100 Thieves, Matt was one of the most decorated esports athletes in video game history. Originally a Call of Duty competitor, from 2011 - 2015 Matt was captain of OpTic Gaming, which he led to both an X Games gold medal and a Call of Duty World Championship. In 2014, Matt was named Esports Athlete of the Year. After retiring from competitive play, Matt built some of the most popular gaming channels on Twitch and Youtube, and was named Forbes 30 under 30 for his success as an entrepreneur and content creator. In 2017, Matt founded 100 Thieves to pursue his passions in competitive gaming, entertainment, and apparel.
                            </Text>
                            <Text style={styles.sectionText}>
                                Matt grew up in Chicago, Illinois where he attended college and was working at McDonald’s before leaving both to pursue his career as a professional gamer. His biggest inspiration came from his father, who taught him that nothing in life comes easy, contributing to 100 Thieves’ motto: “Take what's not given.” Matt is based in Los Angeles and can be found online @nadeshot.
                            </Text>
                        </View>
                </View>
            </Content>
        </Fragment>
    );
}

export default About;