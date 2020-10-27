import React, {Component} from 'react';
import * as THREE from "three";

import {SceneDiv} from './Scene.styles';

class Scene extends Component {
  componentDidMount() {
  let scene, camera, renderer, cube, sphere;
  let ADD = 0.005;
  
  let createGeometry = function() {
     
    // let texture = new THREE.TextureLoader().load( 'https://res.cloudinary.com/dxehksqg1/image/upload/v1603815298/wood-1866661_1280_e4u0zk.jpg');
    let texture = new THREE.TextureLoader().load( 'https://res.cloudinary.com/dxehksqg1/image/upload/v1603823389/confectioners/Vendors/earth-11595_1280_wxatbo.jpg');
      
      let material =  new THREE.MeshBasicMaterial({map: texture});
                  
      // let geometry = new THREE.BoxGeometry(12,12,12);
      // let geometry = new THREE.CircleGeometry(5,70,70);
      let geometry = new THREE.SphereGeometry(5,70,70);
     
      cube = new THREE.Mesh(geometry, material);
      sphere = new THREE.Mesh(geometry, material);
       
      // scene.add(cube); 
      scene.add(sphere); 
      
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

      createGeometry();
      
      renderer = new THREE.WebGLRenderer();   
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.mount.appendChild( renderer.domElement );
      
  
  let mainLoop = function() {
    cube.rotation.x += ADD;
    cube.rotation.y += ADD;
    sphere.rotation.x += ADD;
    sphere.rotation.y += ADD;
     
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
