import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, Touchable } from 'react-native';
import NewsImageComponent from './NewsImage';

import SkeletonContent from 'react-native-skeleton-content';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import NewsItem from '../models/NewsItem';


const NewsCardComponent = (props: any) => {
    return (
        <TouchableOpacity onPress={() => openNewsArticle(props)}>
        <View style={[styles.container, {
            flexDirection: "row"
        }]}>
            <View style={{ flex: 3, }}>
                <SkeletonContent
                    containerStyle={styles.container}
                    isLoading={props.isLoading}
                    layout={[
                        { key: 'img', width: 125, height: 95, marginBottom: 6, },
                    ]}
                >
                    <NewsImageComponent imageURL={props.newsItem.imageURL}></NewsImageComponent>
                </SkeletonContent>
            </View>
            <View style={{flex:5}}>
                <SkeletonContent 
                    isLoading={props.isLoading}
                    layout={[
                        { key: 'someId', width: 220, height: 20, marginBottom: 6, },
                        { key: 'someOtherId', width: 220, height: 20, marginBottom: 6 },
                        { key: '3', width: 220, height: 20, marginBottom: 6 },
                    ]}
                >
                    <Text numberOfLines={3} style={styles.heading}>
                        {props.newsItem.header}
                    </Text>
                </SkeletonContent>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default NewsCardComponent;

const openNewsArticle = (props:any) => {
    props.navigation.navigate(
        'TabTwo',
      );
}

const styles = StyleSheet.create({
    heading: {
        textAlign: 'left',
        fontFamily: "roboto-medium",
        fontSize: 14
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1',
        alignItems: 'center',
        padding: 30,
        margin: 2,
    },
    cardTextColumn: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    container: {
        padding: 7,
        alignItems: 'center',
    },
})