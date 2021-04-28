/*eslint-disable no-unused-expressions*/

import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('app-phaser-reactjs', () => App);
AppRegistry.runApplication('app-phaser-reactjs', { initialProps: {}, rootTag: document.getElementById('root') });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
