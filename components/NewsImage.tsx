import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';

const NewsImageComponent = (props: any) => (
   <Image source = {{uri:props.imageURL}}
      style ={styles.image}
   />
)
export default NewsImageComponent


const styles = StyleSheet.create({
   image: {
       width: 125,
       height: 90,
       borderRadius: 5,
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
       flex: 1,
       padding: 20,
   },
})