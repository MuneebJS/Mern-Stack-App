

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
// import Home from './App/components/Home';
import AddPatient from './App/containers/AddPatient.js';
import ShowPatient from './App/containers/ShowPatient.js';
import Home from './App/components/Home.js';
import Footer from './App/components/Footer';
import { TabNavigator } from "react-navigation";


console.disableYellowBox = true;




export default class App extends Component {

  static navigationOptions = {
    title: 'Home',
  };
  // showPatNav () {
  //   this.props.navigation.navigate('ShowPatient');
  // }
  render() {

    const { navigate } = this.props.navigation;
    return (
      
      <View>
           <Home addPatNav={() => navigate('AddPatient')} showPatNav={() => navigate('ShowPatient')} />
      <Footer />
             {/* <Text>Hll</Text> */}
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({

  Home: { screen: App },
  AddPatient: { screen: AddPatient },
  YourPatient: { screen: ShowPatient },
});

const PrimaryNavigation = StackNavigator({
  // Home: {screen: App},
  Home: {screen: MainScreenNavigator},
  AddPatient: {screen: AddPatient},
  ShowPatient: {screen: ShowPatient}
})

// AppRegistry.registerComponent('project0', () => PrimaryNavigation);
// AppRegistry.registerComponent('patient_tracking', () => PrimaryNavigation);
AppRegistry.registerComponent('patient_tracking_heroku', () => PrimaryNavigation);


