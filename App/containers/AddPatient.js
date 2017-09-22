import React, { Component } from 'react';
import { Text, View, Alert, TextInput, Button, StyleSheet, FlatList, Picker, ScrollView } from 'react-native';
import styles from '../style'
import axios from 'axios';
import Footer from '../components/Footer'
import { Container, Content, Item, Input, Form, Label } from 'native-base';


export default class AddPatient extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'no name provided',
            desease: 'no desease provided',
            gender: 'male',
            senLevel: 'normal',
            medication: 'no medicatin provided',
            description: 'n/a'
        };
        this.watchGender = this.watchGender.bind(this);
        this.watchGender = this.watchLevel.bind(this);
        this.setItem = this.setItem.bind(this);
    }

    static navigationOptions = {
        title: 'Add Patient',
    };

    addData() {
        let date = new Date();
        // console.log(date)
        let today = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let fullDate = today + '/' + month + '/' + year;
        console.log('date',fullDate);
        let patientData = {
            name: this.state.name,
            date: fullDate,
            desease: this.state.desease,
            gender: this.state.gender,
            senLevel: this.state.senLevel,
            medication: this.state.medication,
            description: this.state.description
        }
        console.log('patien data obj', patientData);
        // this.setItem(patientData);

        axios({
            method: 'post',
            url: 'https://patient-tracking-application.herokuapp.com/api/addName',
            data: patientData
        })
            .then(() => {
                console.log('posted successfully')
                Alert.alert(
                    'Success',
                    'Your data has been added successfully',
                    [
                        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )
            })
            .catch((err) => {
                console.log('post error')
                Alert.alert(
                    'Error',
                    err,
                    [
                        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )
            })
    }


    setItem(obj) {
        arrayToPushedData = this.state.setData;
        arrayToPushedData.push(obj);
        // console.log(obj)
    }



    watchGender = (gender) => {
        this.setState({ gender: gender })
    }
    watchLevel = (level) => {
        this.setState({ senLevel: level })
    }

    render() {
        return (
            // <Container>
            //     <Content>
            //         <Form>
            //             <Item inlineLabel>
            //                 <Label>Name</Label>
            //                 <Input onChangeText={(text) => this.setState({ name: text })} />
            //             </Item>
            //             <Item inlineLabel>
            //                 <Label>Desease</Label>
            //                 <Input onChangeText={(text) => this.setState({ desease: text })} />
            //             </Item>
            //             <Item inlineLabel>
            //                 <Label>Name</Label>
            //                 <Input onChangeText={(text) => this.setState({ desease: text })} />
            //             </Item>

            //             <Text style={styles.margin20}>Name of Desease</Text>
            //             <TextInput
            //                 style={{ height: 40, borderColor: '#eee', borderWidth: 0, }}
            //                 onChangeText={(text) => this.setState({ desease: text })}
            //             />
            //             <Text style={styles.margin10}>Gender</Text>
            //             <Picker style={{}} selectedValue={this.state.gender} onValueChange={(item) => this.watchGender(item)}>
            //                 <Picker.Item label="Male" value="male" />
            //                 <Picker.Item label="Female" value="female" />
            //                 <Picker.Item label="Other" value="other" />
            //             </Picker>

            //             <Text style={styles.margin10}>Level of sensitivity</Text>
            //             <Picker style={{}} selectedValue={this.state.senLevel} onValueChange={(item) => this.watchLevel(item)}>
            //                 <Picker.Item label="Normal" value="normal" />
            //                 <Picker.Item label="High" value="high" />
            //                 <Picker.Item label="Low" value="low" />
            //             </Picker>
            //             <Text style={styles.margin20}>Medication</Text>
            //             <TextInput multiline={true}
            //                 style={{ height: 40, borderColor: '#eee', borderWidth: 0, }}
            //                 onChangeText={(text) => this.setState({ medication: text })}
            //                 placeholder="Desease"
            //             />
            //             <Text style={styles.margin20}>Description</Text>
            //             <TextInput multiline={true}
            //                 style={{ height: 40, borderColor: '#eee', borderWidth: 0, }}
            //                 onChangeText={(text) => this.setState({ description: text })}
            //                 placeholder="Desease"
            //             />
            //             <Button title="Add" style={{
            //                 flex: 1
            //             }} onPress={this.addData.bind(this)} />


            //         </Form>
            //     </Content>
            // </Container>

            <ScrollView >
            <View style={styles.container} >
                     {/* <Item floatingLabel> */}
              {/* <Label>Username</Label> */}
              <Input
                        style={{ height: 40, borderColor: '#eee', borderWidth: 0, }}
                        onChangeText={(text) => this.setState({ name: text })}
                        placeholder="Name"
                    />
              {/* </Item> */}


                    <Text style={styles.margin20}>Name of Desease</Text>
                    <TextInput
                        style={{ height: 40, borderColor: '#eee', borderWidth: 0, }}
                        onChangeText={(text) => this.setState({ desease: text })}
                        placeholder="Desease"
                    />
                    <Text style={styles.margin10}>Gender</Text>
                    <Picker style={{}} selectedValue={this.state.gender} onValueChange={(item) => this.watchGender(item)}>
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Other" value="other" />
                    </Picker>

                    <Text style={styles.margin10}>Level of sensitivity</Text>
                    <Picker style={{}} selectedValue={this.state.senLevel} onValueChange={(item) => this.watchLevel(item)}>
                        <Picker.Item label="Normal" value="normal" />
                        <Picker.Item label="High" value="high" />
                        <Picker.Item label="Low" value="low" />
                    </Picker>
                    <Text style={styles.margin20}>Medication</Text>
                    <TextInput multiline={true}
                        style={{ height: 40, borderColor: '#eee', borderWidth: 0, }}
                        onChangeText={(text) => this.setState({ medication: text })}
                        placeholder="Desease"
                    />
                    <Text style={styles.margin20}>Description</Text>
                    <TextInput multiline={true}
                        style={{ height: 40, borderColor: '#eee', borderWidth: 0, }}
                        onChangeText={(text) => this.setState({ description: text })}
                        placeholder="Desease"
                    />
                    <Button title="Add" style={{
                        flex: 1
                    }} onPress={this.addData.bind(this)} />

            </View>


            </ScrollView>
        )
    }
}
