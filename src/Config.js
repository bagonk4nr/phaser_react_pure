import * as Phaser from 'phaser';
import { Canvas } from '@enable3d/phaser-extension';
import {LoginPage} from './pages/login/login.page';
import {LoadingPage} from './pages/loading/loading.page';
import {Lvl1Page} from './pages/lvl1/lvl1.page';
import {LvlsPage} from './pages/lvls/lvls.page';
import {WinPage} from './pages/win/win.page';
import {LoserPage} from './pages/loser/loser.page';
import {SettingsPage} from './pages/settings/settings.page';

export const Config = {
    type: Phaser.WEBGL,
    parent: 'phaser',
    transparent: true,
    antialias: false,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.screen.width * window.devicePixelRatio, //1024,
        height: window.screen.height * window.devicePixelRatio, //768,
        pageAlignHorizontally: true,
        pageAlignVertically: true,
    },
    pixelArt: true,
    scene: [LoginPage, SettingsPage, LoadingPage, WinPage, LoserPage, Lvl1Page, LvlsPage],
    ...Canvas()
};


export default Config;
