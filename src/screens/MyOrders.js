import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';

class MyOrders extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Realme C2',
          img:
            'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Rebook Shoe',
          img:
            'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Easy Chair By Britain',
          img:
            'https://i.ibb.co/MZ5WD0x/cotton-relax-chair-red-smart-shelter-black-and-red-original-imafb2zq5vpauwjp.jpg',
        },
      ],
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
          Orders
        </Text>
        <View
          style={{
            marginVertical: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 0.6,
          }}
        />

        <SafeAreaView style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <View style={styles.item}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Image
                    style={{width: 60, height: 60}}
                    source={{
                      uri: `${item.img}`,
                    }}
                  />
                  <View
                    style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.status}>Delivery Status: Pending</Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    );
  }
}
export default MyOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f4f4f4',
    flex: 1,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  status: {
    fontSize: 15,
  },
  title: {
    fontSize: 17,
  },
});
