import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PixelRatio,
  TextInput,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      id: '10001',
      fullName: 'Hrishikesh Baidya',
      email: 'hrishikeshbaidya7@gmail.com',
      mobile: '8442979928',
      profileImage: 'https://i.ibb.co/vVTxs2M/avengers-iron-man.jpg',
      homeAddress:
        '1671, SodePur Ramkrishna Nagar, Kolkata -700054, West Bengal, India',
      officeAddress: '167,Park street, Kolkata -700045, West Bengal, India',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '700',
            marginTop: 10,
          }}>
          Profile
        </Text>
        <View
          style={{
            marginVertical: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 0.6,
          }}
        />
        <ScrollView style={{marginHorizontal: 5}}>
          <TouchableOpacity
            // onPress={this.selectPhotoTapped.bind(this)}
            style={{alignItems: 'center'}}>
            <View
              style={[
                styles.avatar,
                styles.avatarContainer,
                {marginBottom: 20},
              ]}>
              {this.state.profileImage === '' ? (
                <Text>Add a Photo</Text>
              ) : (
                <Image
                  style={styles.avatar}
                  source={{uri: this.state.profileImage}}
                />
              )}
            </View>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', fontSize: 18, marginVertical: 8}}>
            {this.state.fullName}
          </Text>
          <Text style={{textAlign: 'center', fontSize: 14, marginVertical: 2}}>
            Email
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 0.4,
              borderRadius: 22,
              marginBottom: 5,
            }}
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <Text style={{textAlign: 'center', fontSize: 14, marginVertical: 2}}>
            Mobile No
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 0.4,
              borderRadius: 22,
              marginBottom: 5,
            }}
            onChangeText={mobile => this.setState({mobile})}
            value={this.state.mobile}
          />
          <Text style={{textAlign: 'center', fontSize: 14, marginVertical: 2}}>
            Home Address
          </Text>
          <TextInput
            style={{
              height: null,
              borderColor: 'gray',
              borderWidth: 0.4,
              borderRadius: 22,
              marginBottom: 5,
            }}
            multiline={true}
            numberOfLines={4}
            onChangeText={homeAddress => this.setState({homeAddress})}
            value={this.state.homeAddress}
          />
          <Text style={{textAlign: 'center', fontSize: 14, marginVertical: 2}}>
            Office Address
          </Text>
          <TextInput
            style={{
              height: null,
              borderColor: 'gray',
              borderWidth: 0.4,
              borderRadius: 22,
              marginBottom: 5,
            }}
            multiline={true}
            numberOfLines={4}
            onChangeText={officeAddress => this.setState({officeAddress})}
            value={this.state.officeAddress}
          />
          <TouchableOpacity
            style={{
              flexGrow: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ee6e73',
              width: 90,
              height: 45,
              alignSelf: 'center',
              marginVertical: 15,
              borderRadius: 25,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Update
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInputBox: {
    marginVertical: 5,
    marginRight: 10,
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150,
  },
});
