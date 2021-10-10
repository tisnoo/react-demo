import React, { Component } from 'react'
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native'

class Animations extends Component {
    
    state = {
        animatedWidth: new Animated.Value(50),
        animatedHeight: new Animated.Value(100),
    }
    componentDidMount = () => {
        
    }

   animatedBox = () => {
      Animated.timing(this.state.animatedWidth, {
         toValue: 200,
         duration: 1000,
         useNativeDriver: false,
      }).start()
      Animated.timing(this.state.animatedHeight, {
         toValue: 500,
         duration: 500,
         useNativeDriver: false,
      }).start()
   }
   render() {
      const animatedStyle = { width: this.state.animatedWidth, height: this.state.animatedHeight }
      return (
         <TouchableOpacity style = {styles.container} onPress = {this.animatedBox}>
            <Animated.View style = {[styles.box, animatedStyle]}/>
         </TouchableOpacity>
      )
   }
}
export default Animations

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center'
   },
   box: {
      backgroundColor: 'blue',
      width: 50,
      height: 100
   }
})