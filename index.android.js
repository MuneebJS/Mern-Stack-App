// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class patient_tracking_heroku extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('patient_tracking_heroku', () => patient_tracking_heroku);



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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


