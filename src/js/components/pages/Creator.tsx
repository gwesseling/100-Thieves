import React, {ReactNode, Fragment} from 'react';
import {View, Text} from 'react-native';
import generalStyles from '_STYLES/general';
import styles from '_STYLES/pages/creator';
import Topbar from '_SHARED/Topbar';
import Content from '_SHARED/Content';
import Person from '_SHARED/Person';
import Section from '_SHARED/Section';
import SocialMedia from '_COMPONENTS/SocialMedia';
import {SOCIAL_MEDIA_TYPES} from '_HOOKS/socialMedia';

import noahj from '_ASSETS/image/creators/noahj456.jpg';

function Creator(): ReactNode {
    return (
        <Fragment>
            <Topbar />
            <Content style={generalStyles.pageContainer}>
                <Person
                    styles={{
                        containerStyle: styles.creator,
                        nameStyle: styles.creatorName,
                        imageStyle: styles.creatorImage,
                    }} 
                    name="Noah"
                    tag="@Noahj456"
                    cover={noahj}
                />
                <View style={styles.statsContainer}>
                    <View style={styles.stat}>
                        <Text style={styles.stateValue}>4.16M</Text>
                        <Text style={styles.stateTitle}>Subscribers</Text>
                    </View>
                     <View style={styles.stat}>
                        <Text style={styles.stateValue}>3.2K</Text>
                        <Text style={styles.stateTitle}>Videos</Text>
                    </View>
                     <View style={styles.stat}>
                        <Text style={styles.stateValue}>1.01B</Text>
                        <Text style={styles.stateTitle}>Views</Text>
                    </View>
                </View>
                <Text style={styles.aboutTitle}>About</Text>
                <Text style={styles.aboutText}>
                    Noah, is an American YouTuber who is best known for posting Call of Duty, 
                    Destiny, Dying Light, The Division, as well as Grand Theft Auto gaming videos 
                    on his main channel titled NoahJ456. 
                </Text>
                <Text style={styles.aboutText}>
                    He is also famous for having a second 
                    gaming channel titled NoahJAFK on which he uploads mobile gaming videos. 
                    With over 4 million subscribers and more than 7 billion views, Noah's channels 
                    have everything from gameplays to live streams and more. Noah routinely 
                    uploads videos on both his channels, and is a fun loving guy. He is a married 
                    man who also loves capturing the special moments he spends with his lovely 
                    wife.
                </Text>
                <Section
                    style={{marginBottom: 25}}
                    data={[
                        {
                            id: '1',
                            title: 'Noahj456',
                            type: SOCIAL_MEDIA_TYPES.youtube,
                            link: 'https://www.youtube.com/noahj456',
                        },
                        {
                            id: '0',
                            title: '100T NoahJ456',
                            type: SOCIAL_MEDIA_TYPES.twitter,
                            link: 'http://www.twitter.com/NoahJ456',
                        },
                        {
                            id: '2',
                            title: 'Noahj456',
                            type: SOCIAL_MEDIA_TYPES.instagram,
                            link: 'http://www.instagram.com/NoahJ456',
                        },
                        {
                            id: '3',
                            title: 'Noahj456 Official Discord',
                            type: SOCIAL_MEDIA_TYPES.discord,
                            link: 'https://discord.gg/NoahJ456',
                        }
                    ]}
                    renderItem={({item, index}) => 
                        <SocialMedia 
                            title={item.title}
                            tag={item.tag}
                            type={item.type}
                            link={item.link}
                        />
                    }
                />
            </Content>
        </Fragment>
    );
}

export default Creator;