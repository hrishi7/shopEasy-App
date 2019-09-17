import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

//import screens

import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Category from '../screens/Category';
import Login from '../screens/Login';
import MyOrders from '../screens/MyOrders';
import Register from '../screens/Register';
import Splash from '../screens/Splash';
import Profile from '../screens/Profile';
import Product from '../screens/Product';
// import Icon from 'react-native-vector-icons/AntDesign';

class Navigation extends Component {
  render() {
    return <AppContainer />;
  }
}

const HomeTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: () => (
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 5,
            }}>
            Home
          </Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <AntDesign name="home" color={tintColor} size={25} />
        ),
      },
    },
    Category: {
      screen: Category,
      navigationOptions: {
        tabBarLabel: () => (
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 5,
            }}>
            Search
          </Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <AntDesign name="search1" color={tintColor} size={25} />
        ),
      },
    },
    MyOrders: {
      screen: MyOrders,
      navigationOptions: {
        tabBarLabel: () => (
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 5,
            }}>
            MyOrders
          </Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <Entypo name="text-document" color={tintColor} size={25} />
        ),
      },
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        tabBarLabel: () => (
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 5,
            }}>
            Cart
          </Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <AntDesign name="shoppingcart" color={tintColor} size={25} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: () => (
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 5,
            }}>
            Profile
          </Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <AntDesign name="user" color={tintColor} size={25} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        color: 'black',
        height: 60,
      },
      activeTintColor: 'orange',
    },
  },
);

const AppStacknavigator = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: HomeTabNavigator,
    navigationOptions: {
      header: null,
    },
  },
  Product: {
    screen: Product,
  },
});
const AppContainer = createAppContainer(AppStacknavigator);
export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    height: null,
    width: null,
  },
});
