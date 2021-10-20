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
                 borderBottomColor: '#D3D3D3',
                 borderBottomWidth: 1,
                 marginEnd: 20,
                 marginStart: 20,
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