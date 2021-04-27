/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import './lockdown.umd.js'

lockdown({errorTaming: 'unsafe', consoleTaming: 'unsafe'})

AppRegistry.registerComponent(appName, () => App);
