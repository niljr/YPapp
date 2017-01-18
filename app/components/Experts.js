import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  Dimensions 
} from 'react-native';
import Meteor, { createContainer, MeteorComplexListView } from 'react-native-meteor';
import Icon from 'react-native-vector-icons/Entypo';
let SCREEN = Dimensions.get('window');


class Experts extends Component {
  render() {
    return (
      <MeteorComplexListView
        elements={() => this.props.customers}
        renderRow={this._renderRow}
        enableEmptySections = {true}
        contentContainerStyle={{marginTop: 50}}
      />
    );
  }

  _renderRow(customer) {
    const onPress = () => Actions.expertProfile({job: job}); 
    return (
      <TouchableOpacity style={{height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}
        onPress={onPress}>
        <Icon name='chat' style={{fontSize: 20, paddingBottom: 5}} />
        <Text style={{flex: 1}}>{customer.name}</Text>
      </TouchableOpacity>
    );
  }
}

export default createContainer(params => {
  console.log(params);
  Meteor.subscribe('customersByJobId');
  return {
    customers: Meteor.collection('customers').find({job: params.job.text})
  };
}, Experts)