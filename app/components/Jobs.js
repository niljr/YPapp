import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  Dimensions 
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ListRow from './common/ListRow';
import Meteor, { createContainer, MeteorComplexListView } from 'react-native-meteor';
import Icon from 'react-native-vector-icons/Entypo';
let SCREEN = Dimensions.get('window');


class Jobs extends Component {
  render() {
      console.log(this.props);
    return (
      <MeteorComplexListView
        elements={() => this.props.jobs}
        renderRow={this._renderRow}
        enableEmptySections = {true}
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 50}}
      />
    );
  }

  _renderRow(job) {
    const onPress = () => Actions.experts({job: job}); 
    return (
      <ListRow data={job} onPress={onPress} />
    );
  }
}

export default createContainer(params => {
  Meteor.subscribe('allJobs');
  return {
    jobs: Meteor.collection('jobs').find({categoryId: params.category._id})
  };
}, Jobs)