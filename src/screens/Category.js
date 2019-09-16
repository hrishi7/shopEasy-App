import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
class Category extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme={true}
          round={true}
          style={{width: '100%'}}
          placeholder="Search by Name or Category"
          onChangeText={search => this.setState({search})}
          value={this.state.search}
        />
      </View>
    );
  }
}
export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
