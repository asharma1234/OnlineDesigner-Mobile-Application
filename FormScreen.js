import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import { Dropdown } from 'react-native-material-dropdown';


import { Constants } from 'expo';

export default class FormScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Form',
        drawerIcon: (
            <Image source={{ uri: 'https://cdn3.iconfinder.com/data/icons/interaction-design/512/Form2-512.png' }}
                style={{ height: 20, width: 20 }}
            />
        )
    }

    render() {
        let data = [{
            value: 'Male',
        }, {
            value: 'Female',
        }];

        return (
            <View>
                <Header style={{ marginTop: Constants.statusBarHeight, backgroundColor: '#0288D1' }}>
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'left', marginTop: 8 }}>Form</Text>
                    <Right>
                        <Icon style={{ color: 'white' }}
                            name='ios-home'
                            onPress={() => this.props.navigation.goBack()}
                        />
                    </Right>
                </Header>
                <View>
                    <TextInput
                        placeholder="Full Name"
                        style={{ borderWidth: 2, borderColor: '#0288D1', margin: 5, padding: 10, width: '90%', fontSize: 18 }}>
                    </TextInput>
                    <TextInput
                        placeholder="Address"
                        style={{ borderWidth: 2, borderColor: '#0288D1', margin: 5, padding: 10, width: '90%', fontSize: 18 }}>
                    </TextInput>
                    <TextInput
                        placeholder="Phone Number"
                        style={{ borderWidth: 2, borderColor: '#0288D1', margin: 5, padding: 10, width: '90%', fontSize: 18 }}>
                    </TextInput>
                    <TextInput
                        placeholder="E-mail"
                        style={{ borderWidth: 2, borderColor: '#0288D1', margin: 5, padding: 10, width: '90%', fontSize: 18 }}>
                    </TextInput>
                    <Dropdown
                        placeholder="Gender"
                        containerStyle={{ borderWidth: 2, borderColor: '#0288D1', margin: 5, padding: 10, width: '90%', fontSize: 18 }}
                        data={data}
                    />
                    <TouchableOpacity>
                        <Button style={{ backgroundColor: '#0288D1', alignItems: 'center', padding: 10, margin: 10, width: '90%' }}>
                            <Text style={{ color: 'white', fontSize: 20, alignItems: 'center', padding: 120 }}>Submit</Text>
                        </Button>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}