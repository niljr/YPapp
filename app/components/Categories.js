import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  TextInput, 
  View, 
  StatusBar,
  StyleSheet 
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Meteor, { createContainer, MeteorComplexListView } from 'react-native-meteor';
import ListRow from './common/ListRow';
import Icon from 'react-native-vector-icons/Entypo';
const styles = StyleSheet.create(require('./../styles/MainStyle'));

class Categories extends Component {
  render() {
    return (
      <Image style={{width: null, height: null, flex: 1}} resizeMode={'cover'}
          source={require('./../assets/images/galaxy.jpg')} >
        <StatusBar backgroundColor="black"/>
        <View style={styles.searchBoxContainer}>
          <Icon name='magnifying-glass' style={styles.icon}/>
          <TextInput
            placeholder='Search'
            placeholderTextColor={'#231f20'}
            style={[styles.input, {color: '#ffffff'}]}
            onChangeText={(text) => this.setState({search: text})}
            underlineColorAndroid={'transparent'} />
        </View>
        <View style={{flex: 1}}/>
        <MeteorComplexListView
          elements={() => this.props.categories}
          renderRow={this._renderRow}
          enableEmptySections = {true}
          contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-end', flex: 1}}
        />
      </Image>
    );
  }

  _renderRow(category) {
    const goToJobList = () => Actions.jobs({category: category}); 
    return (
      <ListRow data={category} onPress={goToJobList} />
    );
  }
}

export default createContainer(params => {
  Meteor.subscribe('userCategories');
  return {
    categories: Meteor.collection('categories').find({})
  };
}, Categories)