/*eslint-disable no-undef*/


import * as React from 'react';
import { View } from 'react-native';
import Config from './Config';
import { enable3d } from '@enable3d/phaser-extension';

class App extends React.Component {

    render() {
        enable3d(() => new Phaser.Game(Config)).withPhysics('/assets/lib');
        return (
            
        <View style={{flex: 1}}>
            <div id="phaser" ></div>
        </View>
        );
    }

}

export default App;
