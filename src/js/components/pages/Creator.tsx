import React, {ReactNode, Fragment} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '_STYLES/pages/creator';
import Topbar from '_SHARED/Topbar';
import Content from '_SHARED/Content';
import Person from '_SHARED/Person';
import Carousel from '_SHARED/Carousel';
import SocialMedia from '_COMPONENTS/SocialMedia';
import Video from '_COMPONENTS/Video';
import {creatorsMock} from '_COMPONENTS/mocks/creatorsMock';
import {formatNumber} from '_LIBS/numbers';

import useCreatorStats from '_HOOKS/creatorStats';
import useCreatorVideos from '_HOOKS/creatorVideos';

function Creator(): ReactNode {
    const {name, tag, cover, about, links, channelID} = creatorsMock[0];
    const {videoCount, subCount, viewCount} = useCreatorStats(channelID);
    const {videos} = useCreatorVideos(channelID);

    return (
        <Fragment>
            <Topbar />
            <Content style={styles.pageContainer}>
                <Person
                    styles={{
                        containerStyle: styles.creator,
                        nameStyle: styles.creatorName,
                        imageStyle: styles.creatorImage,
                    }} 
                    name={name}
                    tag={tag}
                    cover={cover}
                />
                <View style={styles.statsContainer}>
                    <View style={styles.stat}>
                        <Text style={styles.stateValue}>{formatNumber(subCount)}</Text>
                        <Text style={styles.stateTitle}>Subscribers</Text>
                    </View>
                     <View style={styles.stat}>
                        <Text style={styles.stateValue}>{formatNumber(videoCount, 1)}</Text>
                        <Text style={styles.stateTitle}>Videos</Text>
                    </View>
                     <View style={styles.stat}>
                        <Text style={styles.stateValue}>{formatNumber(viewCount)}</Text>
                        <Text style={styles.stateTitle}>Views</Text>
                    </View>
                </View>
                {about ?
                    <View style={styles.aboutContainer}>
                        <Text style={styles.aboutTitle}>About</Text>
                        {about.map((text, i) => 
                            <Text key={i} style={styles.aboutText}>{text}</Text>
                        )}
                    </View> : null 
                }
            
                <Carousel
                    style={{containerStyle: {marginBottom: 25}}}
                    data={links}
                    renderItem={({item}) => 
                        <SocialMedia 
                            title={item.title}
                            tag={item.tag}
                            type={item.type}
                            link={item.link}
                        />
                    }
                    keyExtractor={item => item.id}
                />
                <Carousel 
                    style={{
                        containerStyle: {marginBottom: 25},
                        titleStyle: {marginBottom: 15, fontSize: 18}
                    }}
                    title="Last videos"
                    data={videos}
                    renderItem={({item}) => {
                        const {snippet} = item;
  
                        return (
                            <Video 
                                title={snippet.title}
                                cover={snippet.thumbnails.high.url}
                            />
                        );
                    }
                    }
                    keyExtractor={item => item.id.videoId}
                    snapToAlignment={"start"}
                    snapToInterval={315}
                    decelerationRate={"fast"}
                />
            </Content>
        </Fragment>
    );
}

export default Creator;