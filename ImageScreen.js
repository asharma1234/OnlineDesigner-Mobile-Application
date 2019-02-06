import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Right, Card } from 'native-base';
import { Constants } from 'expo';

export default class ImageScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Images',
        drawerIcon: (
            <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png' }}
                style={{ height: 20, width: 20 }}
            />
        )
    }
    render() {
        return (
            <View>
            <Header style={{ marginTop: Constants.statusBarHeight, backgroundColor: '#0288D1' }}>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'left', marginTop: 8 }}>Image Section</Text>
                <Right>
                    <Icon style={{ color: 'white' }}
                        name='ios-home'
                        onPress={() => this.props.navigation.goBack()}
                    />
                </Right>
            </Header>
            <View>
                <Text style={{ fontSize: 18, textAlign: 'center' }}>Here, you will find the samples of dresses that you will love to have.</Text>
            </View>
            <View>
                <Card>
                    <Image
                    source= {{uri: 'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-o4dd5phahqh6bafr29i0r4l6m4-20170105141619.Medi.jpeg'}}
                    style={{height: 400, width: 500}}></Image>
                </Card>
            </View>
        </View>
        );
    }
}