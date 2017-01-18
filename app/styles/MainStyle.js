import { Dimensions } from 'react-native';
const windowSize = Dimensions.get('window');

module.exports = {
  searchBoxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    borderRadius: 3,
    backgroundColor: '#000000AA', 
    width: windowSize.width - 20, 
    margin: 10
  },
  icon: {
    fontSize: 25, 
    color: '#ffffffAA', 
    padding: 5
  },
  input: {
    flex: 1,
    height: 35,
    padding: 5,
    // textAlign: 'center',
    backgroundColor: 'transparent'
  }
}