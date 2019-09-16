import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Overlay} from 'react-native-elements';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

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
          SIGN UP
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
          <TextInput
            placeholder="NAME"
            style={styles.textInput}
            placeholderTextColor="black"
          />
          <TextInput
            placeholder="MOBILE"
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
            SIGN UP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#091B37',
            }}>
            SIGN IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text
            style={{
              fontSize: 15,
              marginTop: 10,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#091B37',
            }}>
            SKIP TO MAIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.termsAndConditions}
          onPress={() => this.setState({isVisible: true})}>
          <Text
            style={{
              fontSize: 10,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#091B37',
            }}>
            Terms & Conditions
          </Text>
        </TouchableOpacity>
        <Overlay isVisible={this.state.isVisible}>
          <Text style={{textAlign: 'center', fontSize: 22, color: '#037D71'}}>
            Terms & Conditions
          </Text>
          <ScrollView
            style={{
              height: '100%',
              marginVertical: 15,
              marginHorizontal: 15,
              marginBottom: 30,
            }}>
            <Text caption gray height={24} style={{marginBottom: 5}}>
              1. Your use of the Service is at your sole risk. The service is
              provided on an "as is" and "as available" basis.
            </Text>
            <Text caption gray height={24} style={{marginBottom: 5}}>
              2. Support for Expo services is only available in English, via
              e-mail.
            </Text>
            <Text caption gray height={24} style={{marginBottom: 5}}>
              3. You understand that Expo uses third-party vendors and hosting
              partners to provide the necessary hardware, software, networking,
              storage, and related technology required to run the Service.
            </Text>
            <Text caption gray height={24} style={{marginBottom: 5}}>
              4. You must not modify, adapt or hack the Service or modify
              another website so as to falsely imply that it is associated with
              the Service, Expo, or any other Expo service.
            </Text>
            <Text caption gray height={24} style={{marginBottom: 5}}>
              5. You may use the Expo Pages static hosting service solely as
              permitted and intended to host your organization pages, personal
              pages, or project pages, and for no other purpose. You may not use
              Expo Pages in violation of Expo's trademark or other rights or in
              violation of applicable law. Expo reserves the right at all times
              to reclaim any Expo subdomain without liability to you.
            </Text>
            <Text caption gray height={24} style={{marginBottom: 5}}>
              6. You agree not to reproduce, duplicate, copy, sell, resell or
              exploit any portion of the Service, use of the Service, or access
              to the Service without the express written permission by Expo.
            </Text>
            <Text caption gray height={24} style={{marginBottom: 5}}>
              7. We may, but have no obligation to, remove Content and Accounts
              containing Content that we determine in our sole discretion are
              unlawful, offensive, threatening, libelous, defamatory,
              pornographic, obscene or otherwise objectionable or violates any
              party's intellectual property or these Terms of Service.
            </Text>
            <Text caption gray height={24} style={{marginBottom: 5}}>
              8. Verbal, physical, written or other abuse (including threats of
              abuse or retribution) of any Expo customer, employee, member, or
              officer will result in immediate account termination.
            </Text>
            <Text caption gray height={24} style={{marginBottom: 5}}>
              9. You understand that the technical processing and transmission
              of the Service, including your Content, may be transferred
              unencrypted and involve (a) transmissions over various networks;
              and (b) changes to conform and adapt to technical requirements of
              connecting networks or devices.
            </Text>
            <Text caption gray height={24} style={{marginBottom: 5}}>
              10. You must not upload, post, host, or transmit unsolicited
              e-mail, SMSs, or "spam" messages.
            </Text>
            <Text caption gray height={24} style={{marginBottom: 5}}>
              9. You understand that the technical processing and transmission
              of the Service, including your Content, may be transferred
              unencrypted and involve (a) transmissions over various networks;
              and (b) changes to conform and adapt to technical requirements of
              connecting networks or devices.
            </Text>
            <Text caption gray height={24} style={{marginBottom: 5}}>
              10. You must not upload, post, host, or transmit unsolicited
              e-mail, SMSs, or "spam" messages.
            </Text>
          </ScrollView>
          <TouchableOpacity
            style={styles.understand}
            onPress={() => this.setState({isVisible: false})}>
            <Text
              style={{
                fontSize: 10,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#091B37',
              }}>
              Understand
            </Text>
          </TouchableOpacity>
        </Overlay>
      </View>
    );
  }
}
export default Register;

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
    alignSelf: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    marginVertical: 10,
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: '#ffffff', // invisible color
  },
  termsAndConditions: {
    width: '35%',
    height: 40,
    borderRadius: 35,
    bottom: 5,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    shadowOffset: {width: 4, height: 4},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: '#ffffff', // invisible color
  },
  understand: {
    width: '35%',
    height: 40,
    borderRadius: 35,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowOffset: {width: 4, height: 4},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: '#ffffff', // invisible color
  },
});
