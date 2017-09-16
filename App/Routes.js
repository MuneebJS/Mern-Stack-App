import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Signup from './containers/Signup';
import * as firebase from 'firebase';
// import Map from './containers/Map';
import Signin from './containers/Signin';
import InitialMap from './containers/InitialMap';
import SearchPlace from './containers/SearchPlace';
import NearbyPlaces from './containers/NearbyPlaces';
import RnDirectionsApp from './containers/Navigater';
import {
    StackNavigator
} from 'react-navigation';


export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="signin"
                        component={RnDirectionsApp}
                        title="Tourist Guide"
                        initial
                    />
                    <Scene
                        key="map"
                        component={Map}
                        title="Map"
                    />
                    <Scene
                        component={Signup}
                        title="Signup"
                        key="signup"

                    />
                </Scene>
            </Router>
        )
    }
}
