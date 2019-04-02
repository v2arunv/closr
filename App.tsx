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
import ProfilePage from "./src/components/scenes/Profile";
import LandingPage from "./src/components/scenes/Landing";
import reducer from './src/reducers/';
import {applyMiddleware, compose, createStore} from 'redux'
import { Provider } from 'react-redux'
import {composeWithDevTools, devToolsEnhancer} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from './src/sagas';
import FeedPage from "./src/components/scenes/Feed";
import PhotoViewer from "./src/components/shared/PhotoViewer";

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware((sagaMiddleware)))
);

sagaMiddleware.run(rootSaga);

const AppNavigator = createStackNavigator({
    Landing: LandingPage,
    Profile: ProfilePage,
    Feed: FeedPage,
}, {
    initialRouteName: "Landing"
});

const RootStack = createStackNavigator( {
    Main: {
        screen: AppNavigator,
    },
    PhotoViewer: {
        screen: PhotoViewer
    },
}, {
    mode: 'modal',
    headerMode: 'none'
})

const Navigation = createAppContainer(RootStack);

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