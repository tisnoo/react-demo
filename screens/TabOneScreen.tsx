import React, {Component} from 'react';
import { Button, Dimensions, StyleSheet, View } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import axios from 'axios';
import List from '../components/List';
import Inputs from '../components/input';
import { ScrollView } from 'react-native-gesture-handler';
import ScrollViewExample from '../components/ScrollView';
import ImagesExample from '../components/ImageExample';

export class TabOneScreen extends Component {

    state = {
        articleText: "State test",
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <PresentationalComponent updateState={this.getNews} myState={this.state.articleText} ></PresentationalComponent> */}
                {/* <List></List> */}
                {/* <Inputs></Inputs> */}
                <ScrollViewExample></ScrollViewExample>
                <ImagesExample></ImagesExample>
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
                response.json().then(function (respJson) { state.getFirstArticle(respJson) })
            })

    }

    getFirstArticle = (articles: any) => {

        this.setState({ articleText: articles["articles"][0]["title"] })

    }

}




const styles = StyleSheet.create({
    container: {
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
         <Text onPress = {props.updateState} style={styles.heading}>
            {props.myState}
         </Text>
      </View>
   )
}