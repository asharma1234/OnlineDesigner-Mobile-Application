import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import { Constants } from 'expo';

export default class DesignScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Designs',
        drawerIcon: (
            <Image source={{ uri: 'https://cdn2.iconfinder.com/data/icons/glyphie-1/40/dress_costume_fashion_cloth_clothing-512.png' }}
                style={{ height: 20, width: 20 }}
            />
        )
    }
    render() {
        return (
            <View>
                <Header style={{ marginTop: Constants.statusBarHeight, backgroundColor: '#0288D1' }}>
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'left', marginTop: 8 }}>Designs</Text>
                    <Right>
                        <Icon style={{ color: 'white' }}
                            name='ios-home'
                            onPress={() => this.props.navigation.goBack()}
                        />
                    </Right>
                </Header>
                <View>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>Designs you may like</Text>
                </View>
            </View>
        );
    }
}