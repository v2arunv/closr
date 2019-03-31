/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProfilePage from "./src/components/scenes/profile";
import LandingPage from "./src/components/scenes/landing";
import reducer from './src/reducers/';
import {applyMiddleware, compose, createStore} from 'redux'
import { Provider } from 'react-redux'
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from './src/sagas';
import FeedPage from "./src/components/scenes/feed";

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware((sagaMiddleware)))
);

sagaMiddleware.run(rootSaga);

const AppNavigator = createStackNavigator({
    Landing: LandingPage,
    Profile: ProfilePage,
    Feed: {
        screen: FeedPage,
        navigationOptions: {
            gesturesEnabled: false,
        }
    },
}, {
    initialRouteName: "Landing",
});

const Navigation = createAppContainer(AppNavigator);

interface Props {}
class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
          <Navigation/>
      </Provider>
    );
  }
}

export default App;