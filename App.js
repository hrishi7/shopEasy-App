import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Navigation from './src/navigation/Navigation';

class App extends Component {
  render() {
    return <Navigation />;
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

console.disableYellowBox = true;
