
import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import styles from '../style'
import { StackNavigator } from 'react-navigation';
import renderIf from './renderIf'
// import image1 from './images'
// const image1 = require('../images/image1.jpg'),
// const footerStyle = StyleSheet.create({   
//     footer:  {
//         // heigh: 100,
//         // paddingTop: 50,
//         // paddingBottom: 50,
//         background: "#eee"
//     }
// })    
export default class Footer extends React.Component {
    render() {
        return(
            <View style={styles.footerStyle}>
           <Text style={styles.footerText}> Developed By Muneeb</Text>
        </View>
        ) 
    }
}