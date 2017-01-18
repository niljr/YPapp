import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  Dimensions 
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Entypo';
const SCREEN = Dimensions.get('window');

const ListRow = ({data, onPress}) => 
    <TouchableOpacity style={{width: SCREEN.width / 3.2, height: SCREEN.width / 3.2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#939598', margin: 3}}
      onPress={onPress}>
      <Icon name='chat' style={{fontSize: 20, paddingBottom: 5}} />
      <Text style={{textAlign: 'center'}}>{data.text}</Text>
    </TouchableOpacity>


export default ListRow;