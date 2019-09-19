/**
 * @format
 */

import {React, AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './src/App';
import {name as appName} from './app.json';
import { createStore } from 'redux'

// const reducer = (state={}, action) => {
//     return state
// }

// const store = createStore(reducer)
// const AppContainer = <Provider store={store}>
//     <App />
// </Provider>
AppRegistry.registerComponent(appName, () => App);
