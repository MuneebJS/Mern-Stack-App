import AuthActions from './authConst';
import * as firebase from 'firebase'
// import {browserHistory} from 'react-router'
import { Actions } from 'react-native-router-flux'; 

const signup_successful = () => {
    return {
        type: AuthActions.SIGNUP_SUCCESSFUL
    }
}

const signup_rejected = (error) => {
    return {
        type: AuthActions.SIGNUP_REJECTED,
        payload: error
    }
}

export const signup = (credentials, dispatch) => {
    return dispatch => {
        firebase.auth()
            .createUserWithEmailAndPassword(credentials.email, credentials.pass)
            .then(
                (user) => {
                    // browserHistory.push('signin')
                    console.log('signup success full' ,user )
                    Actions.map()
                },
                // () => {
                //     dispatch(signin_successful())
                // },
            // (user) => {
            //     console.log("signup successful", user)
            //     // console.log(user)
            // }
            )
            .catch(
            (error) => {
                console.log("signup rejected", error.message)                                     
                dispatch(signup_rejected(error.message));

                
                // () => {
                //     console.log("signup rejected", error)                     
                // },
                // () => {
                //    ()  => {
                //        dispatch(signin_rejected(error.message))C
                //    }
                // }
            })
    }
}

export const signin = (credentials) => {
    return dispatch => {
        firebase.auth()
        .signInWithEmailAndPassword(credentials.email, credentials.pass)
        .then(
            (user) => {
                console.log("signin successfull", user);
                Actions.map()
            }
        )
        .catch(
            (error) => {
                console.log('signin error', error)
            }
        )
    }
}