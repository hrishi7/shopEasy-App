import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  PixelRatio,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      productMainImage:
        'https://i.ibb.co/qDhsZKF/realme-c2-rmx1945-original-imaffnumfyvfzc8y.jpg',
      productSubImages: [
        {
          id: '1',
          img:
            'https://i.ibb.co/PGJGZKh/realme-c2-rmx1941-original-imaffnum5twhbz2j.jpg',
        },
        {
          id: '2',
          img:
            'https://i.ibb.co/rbX4k2n/realme-c2-rmx1941-original-imaffnumjjxhhuzv.jpg',
        },
        {
          id: '3',
          img:
            'https://i.ibb.co/svC9ZdZ/realme-c2-rmx1941-original-imaffnumze3hhyyv.jpg',
        },
        {
          id: '4',
          img:
            'https://i.ibb.co/89q11BZ/realme-c2-rmx1945-original-imaffnumcbhwwzws.jpg',
        },
        {
          id: '5',
          img:
            'https://i.ibb.co/zNf7hqc/realme-c2-rmx1945-original-imaffnumhnmnzd8j.jpg',
        },
      ],
      title: 'Realme C2 ( 16GB + 2GB )',
      discountedPrice: '5999',
      originalPrice: '6999',
      discount: '14',
      availablilityCount: '5',
      hightlights: [
        '2 GB RAM | 16 GB ROM | Expandable Upto 256 GB',
        '15.49 cm (6.1 inch) HD+ Display',
        '13MP + 2MP | 5MP Front Camera',
        '4000 mAh Battery',
        'MediaTek P22 Octa Core 2.0 GHz Processor',
        'Dual Nano SIM slots and Memory Card Slot',
        'Face Unlock',
      ],
      description:
        'Viewing pictures and watching videos become enjoyable on the C2’s 15.5-cm (6.1) display. While the curved boundaries at the dewdrop area add to the beauty of the screen, the C2’s 19.5:9 aspect ratio and the 89.35% screen-to-body ratio provide a truly immersive visual experience',

      packageContain:
        'Handset, Adapter (5V/1A), Micro-USB Cable, Important Information Booklet with Warranty Card, Quick Guide, SIM Card Tool, Screen Protect Film',

      BatteryCapacity: '4000',

      Warrenty:
        'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories',
    };
  }
  render() {
    return (
      <ScrollView>
        <Image
          source={{uri: `${this.state.productMainImage}`}}
          style={{
            width: null,
            height: 250,
            resizeMode: 'contain',
            marginVertical: 10,
          }}
        />
        <View
          style={{
            height: 110,
            marginTop: 20,
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.state.productSubImages.map(one => (
              <View
                key={one.id}
                style={{
                  height: 110,
                  width: 110,
                  marginLeft: 2,
                  borderWidth: 0.5,
                  borderColor: '#dddddd',
                }}>
                <View>
                  <TouchableOpacity
                    onPress={() => this.setState({productMainImage: one.img})}
                    style={{alignItems: 'center'}}>
                    <View
                      style={[
                        styles.avatar,
                        styles.avatarContainer,
                        {marginBottom: 20},
                      ]}>
                      <Image style={styles.avatar} source={{uri: one.img}} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <Text style={{textAlign: 'center', fontSize: 20, marginVertical: 5}}>
          {this.state.title}
        </Text>
        <View style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={{fontSize: 25, fontWeight: '900', marginHorizontal: 5}}>
            ₹{this.state.discountedPrice}
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginTop: 3,
              color: 'grey',
              marginHorizontal: 5,
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
            }}>
            ₹{this.state.originalPrice}
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginTop: 3,
              color: 'green',
              marginHorizontal: 5,
            }}>
            {this.state.discount}% off
          </Text>
        </View>
        {this.state.availablilityCount > 0 ? (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignSelf: 'center',
              marginVertical: 5,
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                width: null,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'orange',
                borderRadius: 15,
                marginHorizontal: 5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Add To Cart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                width: null,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'green',
                borderRadius: 15,
                marginHorizontal: 5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Open Cart
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignSelf: 'center',
              marginVertical: 5,
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                width: null,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'green',
                borderRadius: 15,
                marginHorizontal: 5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Open Cart
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {this.state.availablilityCount > 0 ? (
          <Text style={{flex: 1, textAlign: 'center', fontSize: 15}}>
            Only {this.state.availablilityCount} available
          </Text>
        ) : (
          <Text style={{flex: 1, textAlign: 'center', fontSize: 18}}>
            Out Of Stock
          </Text>
        )}
        <Text
          style={{
            flex: 1,
            fontSize: 19,
            color: 'grey',
            fontWeight: 'bold',
            marginLeft: 10,
            marginVertical: 10,
          }}>
          HightLights
        </Text>
        {this.state.hightlights.map(one => (
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              textAlign: 'center',
              marginVertical: 4,
            }}>
            * {one}
          </Text>
        ))}
        <Text
          style={{
            flex: 1,
            fontSize: 19,
            color: 'grey',
            fontWeight: 'bold',
            marginLeft: 10,
            marginVertical: 10,
          }}>
          Description
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            marginVertical: 4,
            marginHorizontal: 10,
          }}>
          {this.state.description}
        </Text>
        <Text
          style={{
            flex: 1,
            fontSize: 19,
            color: 'grey',
            fontWeight: 'bold',
            marginLeft: 10,
            marginVertical: 10,
          }}>
          Specification
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginVertical: 4,
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 15, color: 'grey', marginTop: 10}}>
            IN THE BOX
          </Text>
          <Text
            style={{
              flexWrap: 'wrap',
              fontSize: 14,
              color: 'black',
            }}>
            {this.state.packageContain}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginVertical: 4,
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 15, color: 'grey', marginTop: 10}}>
            Battery
          </Text>
          <Text
            style={{
              flexWrap: 'wrap',
              fontSize: 14,
              color: 'black',
            }}>
            {this.state.BatteryCapacity} mAh
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginVertical: 4,
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 15, color: 'grey', marginTop: 10}}>
            Warranty
          </Text>
          <Text
            style={{
              flexWrap: 'wrap',
              fontSize: 14,
              color: 'black',
            }}>
            {this.state.Warrenty}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
