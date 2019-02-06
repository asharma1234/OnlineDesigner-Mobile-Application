import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
//import { Card, Icon } from 'react-native-elements';
import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ImageScreen from './ImageScreen';
import MaleScreen from './MaleScreen';
import FemaleScreen from './FemaleScreen';
import FormScreen from './FormScreen';
import DesignScreen from './DesignScreen';
import HelpScreen from './HelpScreen';
import {Constants} from 'expo';
import { Container, Content, Header, Body, Icon } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <MyApp />
    );
  }
}
const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style ={{marginTop: Constants.statusBarHeight}}>
      <Body>
        <Image source={{ uri: 'https://cdn2.iconfinder.com/data/icons/glyphie-1/40/dress_costume_fashion_cloth_clothing-512.png' }} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
)

const MyDrawer = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Images: {
    screen: ImageScreen
  },
  Male: {
    screen: MaleScreen
  },
  Female: {
    screen: FemaleScreen
  },
  Forms: {
    screen: FormScreen
  },
  Designs: {
    screen: DesignScreen
  },
  Help: {
    screen: HelpScreen
  }
},
  {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
)

const MyApp = createAppContainer(MyDrawer)

