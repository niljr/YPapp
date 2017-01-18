import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Dimensions 
} from 'react-native';
import Meteor, { createContainer, MeteorComplexListView } from 'react-native-meteor';
import Icon from 'react-native-vector-icons/Entypo';
let SCREEN = Dimensions.get('window');


class ExpertProfile extends Component {
  render() {
    return (
        <View>
        </View>
    );
  }

}

export default createContainer(params => {
  Meteor.subscribe('customersByJobId');
  return {
    customers: Meteor.collection('customers').find({job: params.job.text})
  };
}, ExpertProfile)