import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import { Constants } from 'expo';

export default class FemaleScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Female',
        drawerIcon: (
            <Image source={{ uri: 'https://png.pngtree.com/svg/20150709/icon_order_details_ladies_1314062.png' }}
                style={{ height: 20, width: 20 }}
            />
        )
    }
    render() {
        return (
            <View>
                <Header style={{ marginTop: Constants.statusBarHeight, backgroundColor: '#0288D1' }}>
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'left', marginTop: 8 }}>Welcome Ladies...</Text>
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