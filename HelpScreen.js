import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import { Constants } from 'expo';
//import { Dropdown } from 'react-native-material-dropdown';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

export default class HelpScreen extends Component {

    static navigationOptions = {
        drawerLabel: 'Help',
        drawerIcon: (
            <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-help-128.png' }}
                style={{ height: 20, width: 20 }}
            />
        )
    }
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }


    render() {
        //const data1 = [{
        // value: 'We are your friends.'
        //}];
        // let data2 = [{
        //     value: 'We can provide solutions to all of your queries.'
        // }];

        return (
            <View>
                <Header style={{ marginTop: Constants.statusBarHeight, backgroundColor: '#0288D1' }}>
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'left', marginTop: 8 }}>Help ... ??</Text>
                    <Right>
                        <Icon style={{ color: 'white' }}
                            name='ios-home'
                            onPress={() => this.props.navigation.goBack()}
                        />
                    </Right>
                </Header>
                <View />
                <View>

                    <Text
                        style={{ fontSize: 18, padding: 10 }}
                        onPress={() => {
                            this.setState({ visible: true });
                        }}>Who are we ?</Text>
                    <Dialog
                        visible={this.state.visible}
                        onTouchOutside={() => {
                            this.setState({ visible: false });
                        }}>
                        <DialogContent>
                            <Text>We are your fashion friends.</Text>
                        </DialogContent>
                    </Dialog>

                    <Text
                        style={{ fontSize: 18, padding: 10 }}
                        onPress={() => {
                            this.setState({ visible: true });
                        }}>How can we help you ?</Text>

                    <Dialog
                        visible={this.state.visible}
                        onTouchOutside={() => {
                            this.setState({ visible: false });
                        }}>
                        <DialogContent>
                            <Text>We can help you by answering all of your queries and solving all of your fashion problems. Be sure, we can preserve you from fashion police !!</Text>
                        </DialogContent>
                    </Dialog>

                    <Text
                        style={{ fontSize: 18, padding: 10 }}
                        onPress={() => {
                            this.setState({ visible: true });
                        }}>How old are you ?</Text>

                    <Dialog
                        visible={this.state.visible}
                        onTouchOutside={() => {
                            this.setState({ visible: false });
                        }}>
                        <DialogContent>
                            <Text>I am 21 years old.</Text>
                        </DialogContent>
                    </Dialog>
                </View>
            </View>
        );
    }
}