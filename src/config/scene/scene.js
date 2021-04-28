/*eslint-disable no-unused-expressions*/
/*eslint-disable no-undef*/

class Scene {

  changeScene(parent, scene, scene1, data, song, type) {
    // console.log(scene, parent.constructor.name, ' scene.tsx');
    if (scene === 'SETTINGSPAGE') {
        // parent.scene.sleep();
        parent.scene.stop();
        // parent.scene.remove();
        
        parent.scene.launch(scene, {scene1: scene1, data: data, music: song, type: type});
       

    } else if (type === 'loses' || type === 'wins') {
      // console.log(scene, parent.video, 'changesceneloseswins')

      // if(parent.sound.sounds.length > 0) {

        // if (parent.sound.get(song) !== null) parent.sound.get(song).pause();
        if (parent.sound.get(song) !== null) parent.sound.get(song).stop();
        
      // } else {

        
        // parent.video.stop();

      // }

        // parent.scene.sleep();
        parent.scene.stop();
        // parent.scene.remove();

        let restartScene = parent.scene.get(scene);
        restartScene.scene.restart({scene1: scene1, data: data, music: song, type: type});


    } else {
      // console.log(song, scene, scene1, 'changescene')
      // if(parent.sound.sounds.length > 0) {

        // if (parent.sound.get(song) !== null) parent.sound.get(song).pause();
        if (parent.sound.get(song) !== null) parent.sound.get(song).stop();
        
      // } 
        // parent.scene.sleep();
        parent.scene.stop();

        // parent.scene.remove();
        // parent.scene.add(scene);
        parent.scene.launch( scene, {scene1: scene1, data: data, music: song, type: type});
        
    }

  }

}

export default Scene;