import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';

// import Category from '../components/Category';
import Footer from '../components/Footer';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      latestProducts: [
        {
          id: '1',
          title: 'Nike shoes 1',
          img:
            'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
          price: '159.0',
        },
        {
          id: '2',
          title: 'Nike shoes 2',
          img:
            'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
          price: '159.0',
        },
        {
          id: '3',
          title: 'Nike shoes 3',
          img:
            'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
          price: '159.0',
        },
        {
          id: '4',
          title: 'Nike shoes 4',
          img:
            'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
          price: '159.0',
        },
      ],
      categories: [
        {
          id: '1',
          title: 'Electronics',
          products: [
            {
              id: '1',
              title: 'Realme C2',
              img:
                'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
              price: '159.0',
            },
            {
              id: '2',
              title: 'Redmi 7 Pro',
              img:
                'https://i.ibb.co/txycdrb/redmi-note-7s-64-d-m1901f71-mi-4-original-imafe48ru3s66sjd.jpg',
              price: '159.0',
            },
            {
              id: '3',
              title: 'Realme C2',
              img:
                'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
              price: '159.0',
            },
            {
              id: '4',
              title: 'Redmi 7 Pro',
              img:
                'https://i.ibb.co/txycdrb/redmi-note-7s-64-d-m1901f71-mi-4-original-imafe48ru3s66sjd.jpg',
              price: '159.0',
            },
            {
              id: '5',
              title: 'Realme C2',
              img:
                'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
              price: '159.0',
            },
            {
              id: '6',
              title: 'Redmi 7 Pro',
              img:
                'https://i.ibb.co/txycdrb/redmi-note-7s-64-d-m1901f71-mi-4-original-imafe48ru3s66sjd.jpg',
              price: '159.0',
            },
          ],
        },
        {
          id: '2',
          title: 'Clothes',
          products: [
            {
              id: '1',
              title: 'Realme C2',
              img:
                'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
              price: '159.0',
            },
            {
              id: '2',
              title: 'Redmi 7 Pro',
              img:
                'https://i.ibb.co/txycdrb/redmi-note-7s-64-d-m1901f71-mi-4-original-imafe48ru3s66sjd.jpg',
              price: '159.0',
            },
            {
              id: '3',
              title: 'Realme C2',
              img:
                'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
              price: '159.0',
            },
            {
              id: '4',
              title: 'Redmi 7 Pro',
              img:
                'https://i.ibb.co/txycdrb/redmi-note-7s-64-d-m1901f71-mi-4-original-imafe48ru3s66sjd.jpg',
              price: '159.0',
            },
            {
              id: '5',
              title: 'Realme C2',
              img:
                'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
              price: '159.0',
            },
            {
              id: '6',
              title: 'Redmi 7 Pro',
              img:
                'https://i.ibb.co/txycdrb/redmi-note-7s-64-d-m1901f71-mi-4-original-imafe48ru3s66sjd.jpg',
              price: '159.0',
            },
          ],
        },
        {
          id: '3',
          title: 'Watches',
          products: [
            {
              id: '1',
              title: 'Realme C2',
              img:
                'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
              price: '159.0',
            },
            {
              id: '2',
              title: 'Redmi 7 Pro',
              img:
                'https://i.ibb.co/txycdrb/redmi-note-7s-64-d-m1901f71-mi-4-original-imafe48ru3s66sjd.jpg',
              price: '159.0',
            },
            {
              id: '3',
              title: 'Realme C2',
              img:
                'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
              price: '159.0',
            },
            {
              id: '4',
              title: 'Redmi 7 Pro',
              img:
                'https://i.ibb.co/txycdrb/redmi-note-7s-64-d-m1901f71-mi-4-original-imafe48ru3s66sjd.jpg',
              price: '159.0',
            },
            {
              id: '5',
              title: 'Realme C2',
              img:
                'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
              price: '159.0',
            },
            {
              id: '6',
              title: 'Redmi 7 Pro',
              img:
                'https://i.ibb.co/txycdrb/redmi-note-7s-64-d-m1901f71-mi-4-original-imafe48ru3s66sjd.jpg',
              price: '159.0',
            },
          ],
        },
        {
          id: '4',
          title: 'Baby care',
          products: [
            {
              id: '1',
              title: 'Realme C2',
              img:
                'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
              price: '159.0',
            },
            {
              id: '2',
              title: 'Redmi 7 Pro',
              img:
                'https://i.ibb.co/txycdrb/redmi-note-7s-64-d-m1901f71-mi-4-original-imafe48ru3s66sjd.jpg',
              price: '159.0',
            },
            {
              id: '3',
              title: 'Realme C2',
              img:
                'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
              price: '159.0',
            },
            {
              id: '4',
              title: 'Redmi 7 Pro',
              img:
                'https://i.ibb.co/txycdrb/redmi-note-7s-64-d-m1901f71-mi-4-original-imafe48ru3s66sjd.jpg',
              price: '159.0',
            },
            {
              id: '5',
              title: 'Realme C2',
              img:
                'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
              price: '159.0',
            },
            {
              id: '6',
              title: 'Redmi 7 Pro',
              img:
                'https://i.ibb.co/txycdrb/redmi-note-7s-64-d-m1901f71-mi-4-original-imafe48ru3s66sjd.jpg',
              price: '159.0',
            },
          ],
        },
        {
          id: '5',
          title: 'Home & Furnitures',
          products: [
            {
              id: '1',
              title: 'Realme C2',
              img:
                'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
              price: '159.0',
            },
            {
              id: '2',
              title: 'Redmi 7 Pro',
              img:
                'https://i.ibb.co/txycdrb/redmi-note-7s-64-d-m1901f71-mi-4-original-imafe48ru3s66sjd.jpg',
              price: '159.0',
            },
            {
              id: '3',
              title: 'Realme C2',
              img:
                'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
              price: '159.0',
            },
            {
              id: '4',
              title: 'Redmi 7 Pro',
              img:
                'https://i.ibb.co/txycdrb/redmi-note-7s-64-d-m1901f71-mi-4-original-imafe48ru3s66sjd.jpg',
              price: '159.0',
            },
            {
              id: '5',
              title: 'Realme C2',
              img:
                'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
              price: '159.0',
            },
            {
              id: '6',
              title: 'Redmi 7 Pro',
              img:
                'https://i.ibb.co/txycdrb/redmi-note-7s-64-d-m1901f71-mi-4-original-imafe48ru3s66sjd.jpg',
              price: '159.0',
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text
            style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
            Latest Collections
          </Text>
          <View
            style={{
              height: 130,
              marginTop: 20,
            }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {this.state.latestProducts.map(one => (
                <View
                  key={one.id}
                  style={{
                    height: 130,
                    width: 130,
                    marginLeft: 2,
                    borderWidth: 0.5,
                    borderColor: '#dddddd',
                  }}>
                  <View style={{flex: 2}}>
                    <Image
                      source={{
                        uri: `${one.img}`,
                      }}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: 'cover',
                      }}
                    />
                  </View>
                  <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                    <Text style={{textAlign: 'center'}}>{one.title}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
          {this.state.categories.map(each => (
            <View key={each.id}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 24,
                    fontWeight: '700',
                    paddingHorizontal: 20,
                  }}>
                  {each.title}
                </Text>
                <Text
                  style={{
                    marginTop: 15,
                    fontSize: 15,
                    fontWeight: '500',
                    paddingHorizontal: 20,
                  }}>
                  View All
                </Text>
              </View>
              <View style={{height: 130, marginTop: 20}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {each.products.map(one => (
                    <View
                      key={one.id}
                      style={{
                        height: 130,
                        width: 130,
                        marginLeft: 2,
                        borderWidth: 0.5,
                        borderColor: '#dddddd',
                      }}>
                      <View style={{flex: 2}}>
                        <Image
                          source={{
                            uri: `${one.img}`,
                          }}
                          style={{
                            marginTop: 5,
                            flex: 1,
                            width: null,
                            height: null,
                            resizeMode: 'contain',
                          }}
                        />
                      </View>
                      <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                        <Text style={{textAlign: 'center'}}>{one.title}</Text>
                      </View>
                    </View>
                  ))}
                </ScrollView>
              </View>
            </View>
          ))}
          <Footer />
        </View>
      </ScrollView>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    // justifyContent: 'center',
  },
});
