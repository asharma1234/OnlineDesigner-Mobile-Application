import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
//import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import { Constants } from 'expo';
import moment from 'moment';


export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: (
            <Image source={{ uri: 'http://icons.iconarchive.com/icons/icons8/android/512/Very-Basic-Home-icon.png' }}
                style={{ height: 20, width: 20 }}
            />
        )
    };
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <ImageBackground source={{ uri: 'https://images.all-free-download.com/images/graphiclarge/background_with_abstract_flower_241161.jpg' }} style={{ height: '100%', width: '100%', backfaceVisibility: 'visible' }}>
                    <View style={{ flex: 0.9 }}>
                        <View style={{ marginTop: Constants.statusBarHeight }}>
                            <Text style={{ fontSize: 36, color: '#0288D1', fontWeight: 'bold', fontStyle: 'italic', marginLeft: 15 }}>Online Designs !!!</Text>
                        </View>
                        <View style={{ flex: 0.1, alignItems: 'baseline', marginTop: 280 }}>
                            <Text style={{ fontSize: 20, color: '#0288D1', fontWeight: 'bold', marginLeft: 5 }}>Be</Text>
                            <Text style={{ fontSize: 20, color: '#0288D1', fontWeight: 'bold', marginLeft: 5, marginTop: 5 }}>Your</Text>
                            <Text style={{ fontSize: 20, color: '#0288D1', fontWeight: 'bold', marginLeft: 5, marginTop: 5 }}>Own</Text>
                            <Text style={{ fontSize: 20, color: '#0288D1', fontWeight: 'bold', marginLeft: 5, marginTop: 5 }}>Designer</Text>
                            <Text style={{ fontSize: 18, color: '#0288D1', marginLeft: 5, marginTop: 75 }}>Date: {moment().format('llll')}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
