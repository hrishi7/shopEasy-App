import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            color: '#091B37',
            marginVertical: 10,
          }}>
          SIGN IN
        </Text>
        <View style={{alignItems: 'center'}}>
          <TextInput
            placeholder="EMAIL"
            style={styles.textInput}
            placeholderTextColor="black"
          />
          <TextInput
            placeholder="PASSWORD"
            style={styles.textInput}
            placeholderTextColor="black"
          />
        </View>
        <TouchableOpacity style={styles.signInBtn}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'white',
            }}>
            SIGN IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#091B37',
            }}>
            SIGN UP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text
            style={{
              marginTop: 25,
              fontSize: 15,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#091B37',
            }}>
            SKIP TO MAIN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  signInBtn: {
    width: '60%',
    height: 70,
    borderRadius: 35,
    marginVertical: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#091B37',
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 3,
    elevation: 5,
  },
  signUpBtn: {
    width: '60%',
    height: 70,
    borderRadius: 35,
    marginBottom: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: '#ffffff', // invisible color
  },
});
