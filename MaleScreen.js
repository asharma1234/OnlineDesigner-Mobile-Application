import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import { Constants } from 'expo';

export default class MaleScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Male',
        drawerIcon: (
            <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/492/aiga_toilet_men-512.png' }}
                style={{ height: 20, width: 20 }}
            />
        )
    }
    render() {
        return (
            <View>
                <Header style={{ marginTop: Constants.statusBarHeight, backgroundColor: '#0288D1' }}>
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'left', marginTop: 8 }}>Welcome Guys...</Text>
                    <Right>
                        <Icon style={{ color: 'white' }}
                            name='ios-home'
                            onPress={() => this.props.navigation.goBack()}
                        />
                    </Right>
                </Header>
                <View>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>Dresses you may like</Text>
                </View>
            </View>
        );
    }
}