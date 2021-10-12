import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import NewsImageComponent from './NewsImage';


const NewsCardComponent = (props: any) => {
    return (
        <View style={[styles.container, {
            flexDirection: "row"
        }]}>
            <View  style={{ flex: 3, }}>
                <NewsImageComponent imageURL={props.imageURL}></NewsImageComponent>
            </View>
            <View style={{ flex: 5, }}>
                <Text numberOfLines={3}  style={styles.heading}>
                {props.newsHeader}
            </Text></View>
        </View>
    )
}

export default NewsCardComponent;

const styles = StyleSheet.create({
    heading: {
        textAlign: 'left',
        fontFamily: "roboto-medium",
        fontSize: 14
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    },
    container: {
        alignItems: 'center',
        padding: 20,
    },
})