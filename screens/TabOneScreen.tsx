import React, {Component} from 'react';
import { Button, Dimensions, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import axios from 'axios';
import List from '../components/List';
import Inputs from '../components/input';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ScrollViewExample from '../components/ScrollView';
import ImagesExample from '../components/ImageExample';
import Animations from '../components/Animations';
import ActivityIndicatorExample from '../components/ActivityIndicator';

export class TabOneScreen extends Component {

    state = {
        articleText: "State test",
    }

    componentDidMount = () =>{
        this.getNews();
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicatorExample></ActivityIndicatorExample>
                {/* <PresentationalComponent updateState={this.getNews} myState={this.state.articleText} ></PresentationalComponent>
                <TouchableOpacity><Text>Button</Text></TouchableOpacity>
                <TouchableNativeFeedback><Text>Button</Text></TouchableNativeFeedback>
                <Animations></Animations>
                <List></List>
                <Inputs></Inputs> */}
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