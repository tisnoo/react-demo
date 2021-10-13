import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import NewsItem from '../models/NewsItem'
import NewsCardComponent from './NewsCard'
   
const NewsFeedList = (props: any) => {
   return (
      <View>
         <FlatList
           contentContainerStyle={{paddingBottom:40, paddingTop: 40}} 
           ItemSeparatorComponent={
            () => (<View 
               style={{
                 borderBottomColor: '#D8D8D8',
                 borderBottomWidth: 1,
               }}>
            </View>)
          }
        data={props.newsItems}
        renderItem={({item, index, separators}) => <NewsCardComponent key={item.key} newsItem={item} isLoading={props.isLoading}></NewsCardComponent>}
      />
      </View>
   )
}
export default NewsFeedList