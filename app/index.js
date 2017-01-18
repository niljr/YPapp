/** 
 * Yellow pages
 */
import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  Dimensions,
  Navigator,
  StatusBar 
} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';
import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';
import Categories from './components/Categories';
import Jobs from './components/Jobs';
import Experts from './components/Experts';
import ExpertProfile from './components/ExpertProfile';

Meteor.connect('ws://192.168.254.101:3000/websocket');//do this only once
Meteor.loginWithPassword("bbing@gmail.com", "8345297");

let SCREEN = Dimensions.get('window');

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="categories" component={Categories} title="Categories" hideNavBar={true}/>
    <Scene key="jobs" component={Jobs} title="Jobs"/>
    <Scene key="experts" component={Experts} title="Experts"/>
    <Scene key="expertProfile" component={ExpertProfile} title="Expert Profile"/>
  </Scene>
);

export default class App extends Component {
  render() {
    return (
      <Router scenes={scenes}/>
    );
  }
}

// /**
//  * Sample lang
//  */
// import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
// import reducer from './reducers';

// const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

// function configureStore(initialState) {
//   const enhancer = compose(
//     applyMiddleware(
//       thunkMiddleware,
//       loggerMiddleware,
//     ),
//   );
//   return createStore(reducer, initialState, enhancer);
// }

// const store = configureStore({});

// import { 
//   View, 
//   Text, 
// } from 'react-native';

//  class Peckish extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Hello</Text>
//       </View>
//     );
//   }
// }

// const App = () => (
//   <Provider store={store}>
//     <Peckish/>
//   </Provider>
// );
// export default App;
