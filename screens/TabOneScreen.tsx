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

export class TabOneScreen extends Component {

    state = {
        newsArticles: [
            new NewsItem("", "", "", "", "1"),
            new NewsItem("", "", "", "", "2"),
            new NewsItem("", "", "", "", "3"),
            new NewsItem("", "", "", "", "4"),
            new NewsItem("", "", "", "", "5"),
            new NewsItem("", "", "", "", "6"),
            new NewsItem("", "", "", "", "7"),
            new NewsItem("", "", "", "", "8"),
            new NewsItem("", "", "", "", "9"),
            new NewsItem("", "", "", "", "10"),
            new NewsItem("", "", "", "", "11"),
            new NewsItem("", "", "", "", "12"),
            new NewsItem("", "", "", "", "13"),
            new NewsItem("", "", "", "", "14"),
            new NewsItem("", "", "", "", "15"),
            new NewsItem("", "", "", "", "16"),
            new NewsItem("", "", "", "", "17"),
            new NewsItem("", "", "", "", "18"),
            new NewsItem("", "", "", "", "19"),
            new NewsItem("", "", "", "", "20"),
        ],
        isLoading: true,
    }

    componentDidMount() {
        this.getNews();
    }

    render() {

        return (
            <View style={styles.container}>
            <NewsFeedList
                isLoading={this.state.isLoading}
                newsItems={this.state.newsArticles}
            />
        </View>
        );
    }


    getNews = () => {

        const url = 'https://newsapi.org/v2/top-headlines?' +
            'country=nl&' +
            'apiKey=6a00cc160b284464857f254b17801070';
        const req = new Request(url);
        const state = this;
        fetch(req)
            .then(function (response) {
                response.json().then(function (respJson) { state.setArticles(respJson) })
            })

    }

    getFirstArticle = (articles: any) => {
        this.setState({ articleText: articles["articles"][0]["title"] })
    }

    setArticles = (articles: any) => {

        var newsItems = articles["articles"].map((item: any, index: any) => {
            return new NewsItem(item["title"], item["urlToImage"] ?? "https://www.tekstmaatje.nl/wp-content/uploads/2020/06/placeholder.png", item["content"], item["author"], index.toString());
        });

        newsItems = newsItems.filter((item: NewsItem) => item.body != null);
        
        setTimeout(() => {this.setState({ newsArticles: newsItems, isLoading: false })}, 1000)
    }

}




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