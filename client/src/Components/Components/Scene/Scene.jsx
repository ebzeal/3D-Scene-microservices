import React, {Component} from 'react';
import * as THREE from "three";

import {SceneDiv} from './Scene.styles';

class Scene extends Component {
  componentDidMount() {
    const { shape } = this.props;
    const {name, geopoints, texture, speed, geometry} = shape;
  let scene, camera, renderer, theShape;
  let SPEED = parseFloat(speed);
  let setGeometry ;
  switch (name) {
    case 'circle':
      setGeometry = new THREE.CircleGeometry(5,70,70)
      break;
    case 'square':
      setGeometry = new THREE.BoxGeometry(12,12,12)
    default:
      null
      break;
  }
  
  let createGeometry = function(setGeometry, image) {
     let texture = new THREE.TextureLoader().load( `${image}`);
      
      let material =  new THREE.MeshBasicMaterial({map: texture});
                  
      theShape = new THREE.Mesh(setGeometry, material);
       
      scene.add(theShape); 
      
  };
  
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);
      
         camera = new THREE.PerspectiveCamera(75, 
                      window.innerWidth / window.innerHeight, 
                      1, 1000);
      
      camera.position.z= 20;

      const lightUp = new THREE.DirectionalLight(0xffffff);
      scene.add(lightUp);

      const lightDown = new THREE.DirectionalLight(0xabcdef)
      lightDown.position.y = -1;

      scene.add(lightDown);
      scene.add(lightUp);

      createGeometry(setGeometry, texture);
      
      renderer = new THREE.WebGLRenderer();   
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.mount.appendChild( renderer.domElement );
      
  
  let mainLoop = function() {
    theShape.rotation.x += SPEED;
    theShape.rotation.y += SPEED;
     
      renderer.render(scene, camera);
      requestAnimationFrame(mainLoop);
  };
  
  mainLoop();
}
render(){
  return (
    <SceneDiv ref={ref => (this.mount = ref)} />
  )}
};

export default Scene
