import React, { Component } from 'react';
import { Button, Dimensions, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import axios from 'axios';
import Inputs from '../components/input';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ScrollViewExample from '../components/ScrollView';
import NewsImageComponent from '../components/NewsImage';
import Animations from '../components/Animations';
import ActivityIndicatorExample from '../components/ActivityIndicator';
import NewsCardComponent from '../components/NewsCard';
import NewsItem from '../models/NewsItem';
import NewsFeedList from '../components/NewsFeedList';
import WebView from 'react-native-webview';

const NewsItemScreen = (props: any) => {

    const {url} = props.route.params;
    
    return (
        <View style={styles.container}>
        <WebView
        source={{uri: url}}
        >

        </WebView>
    </View>
    );



}

export default NewsItemScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    list: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.86,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 0,
    },
    root: {
        marginBottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    heading: {
        textAlign: 'center',
        marginTop: 24
    },
    header: {
        padding: 10,
        backgroundColor: '#FDA085',
        width: Dimensions.get('window').width
    },
});


const PresentationalComponent = (props: any) => {
    return (
        <View>
            <Text onPress={props.updateState} style={styles.heading}>
                {props.myState}
            </Text>
        </View>
    )
}