import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Splash extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: true,
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setTimePassed();
    }, 1000);
  };
  setTimePassed = () => {
    this.state.isAuthenticated
      ? this.props.navigation.navigate('Home')
      : this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>EASY SHOP</Text>
        <Image
          style={styles.splashImage}
          source={require('../assets/splash.png')}
        />
        <Text style={styles.subheading}>
          A Destination of Quality Products.
        </Text>
      </View>
    );
  }
}
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    backgroundColor: 'white',
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  heading: {
    textAlign: 'center',
    fontSize: 34,
    paddingBottom: 8,
    color: '#091B37',
  },
  subheading: {
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 8,
    fontWeight: 'bold',
    color: '#091B37',
  },
});
