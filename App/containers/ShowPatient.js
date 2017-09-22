import React, { Component } from 'react';
import { View, TextInput, Button, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../style'
import DatePicker from 'react-native-datepicker';
import Footer from '../components/Footer'
import axios from 'axios';
import { Container, Header, Content, Card, CardItem, Text,List, ListItem } from 'native-base';




export default class ShowPatient extends React.Component {
    constructor() {
        super();
        this.showData = this.showData.bind(this);
        this.searchByName = this.searchByName.bind(this);
        this.searchByDate = this.searchByDate.bind(this);
        this.state = {
            date: '16/08/2017',
            normalStatus: true,
            filterStatus: false,
            data: [],
            filterData: [],
            searchedVal: '',
            isLoading: true,
        }
    }

    searchByName(text) {
        var arrayToPushedData = this.state.data;
        this.setState({ searchedVal: text })
        var arrayToPushedData = arrayToPushedData.filter(asset => asset.name.toLowerCase().indexOf(text) !== -1);
        console.log('arrary to pushed', arrayToPushedData);

        if (text == '') {
            this.setState({
                normalStatus: true,
                filterStatus: false
            })

        }
        else {
            this.setState({
                filterStatus: true,
                normalStatus: false,
                filterData: arrayToPushedData,
                date: ''
            })
        }
    }

    // searchByDate(date) {
    //     // this.setState({
    //     //     date: date
    //     // })
    //     var arrayToPushedData = this.state.data;
    //     // this.setState({ date: date })
    //     var arrayToPushedData = arrayToPushedData.filter(asset => asset.date.indexOf(date) !== -1);

    //     if (date == '') {
    //         this.setState({
    //             normalStatus: true,
    //             filterStatus: false
    //         })

    //     }
    //     else {
    //         this.setState({
    //             filterStatus: true,
    //             normalStatus: false,
    //             filterData: arrayToPushedData
    //         })
    //     }
    // }

    searchByDate(date) {
        // console.log('searched by date', date)
        this.setState({
            date: date
        })
        var arrayToPushedData = this.state.data;
        this.setState({ date: date }) 
        var arrayToPushedData = arrayToPushedData.filter(asset => asset.date.indexOf(date) !== -1);
        console.log('searched by date', arrayToPushedData)
        console.log()
        if (date != '') {
            console.log('if run')
            this.setState({
                normalStatus: false,
                filterStatus: true,
                filterData: arrayToPushedData
            })

        }
        else {
            console.log('else run filter data', this.state.filterData)
            
            this.setState({
                filterStatus: false,
                normalStatus: true,
                // filterData: arrayToPushedData
            })
        }        
    }

     showData() {
        console.log('show data')
        axios.get('https://patient-tracking-application.herokuapp.com/api')
        .then((res) => {
            console.log(res.data) 
            let arrayToPushedData = res.data;
            this.setState({
                normalStatus: true,
                data: arrayToPushedData,
                isLoading: false
            })
        })
        .catch(err => {
            console.log('show data err', err)
            Alert.alert(
                'Error',
                err,
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
        })
    }

    static navigationOptions = {
        title: 'Your Patients',
    };

    componentDidMount() {
        this.showData();
    }
 


    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                    <TextInput multiline={true}
                        style={{ height: 40, borderColor: '#eee', borderWidth: 0, }}
                        onChangeText={(text) => this.searchByName(text.toLowerCase())}
                        placeholder="Search"
                    />
                    <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="D/M/YYYY"
                    minDate="1/5/2016"
                    maxDate="1/5/2018"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                      // ... You can check the source to find the other keys. 
                    }}
                    onDateChange={(date) => this.searchByDate(date)}
                  />

                 {this.state.normalStatus &&   <FlatList
                        data={this.state.data}
                        renderItem={({ item, index }) =>
                            <View style={styles.margin20} key={index}>
                                <Text >Name:  {item.name} </Text>
                                <Text>Date: {item.date}</Text>
                                <Text>Desease: {item.desease}</Text>
                                <Text>Sencivity Level: {item.senLevel}</Text>
                                <Text>Description: {item.description}</Text>
                            </View>
                        }
                    />}


                    {this.state.filterStatus && <FlatList
                        data={this.state.filterData}
                        renderItem={({ item }) =>
                            < View style={styles.margin20} >
                                <Text >Name:  {item.name} </Text>
                                <Text>Date: {item.date}</Text>
                                <Text>Desease: {item.desease}</Text>
                                <Text>Sencivity Level: {item.senLevel}</Text>
                                <Text>Description: {item.description}</Text>
                            </View>
                        }
                    />}
                </View>
                <Footer />
            </ScrollView>
        )
    }
}
