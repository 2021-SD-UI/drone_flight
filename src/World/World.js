import { loadInitSpace, addSpaceListener } from './components/space/space.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createOrbitControls } from './systems/orbitControls/orbitControls.js';
import { createDragControls } from './systems/dragControls/dragControls.js'
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

import { loadInitPath, addPathListener } from './components/path/path';
import { addTransparentListener } from './components/space/transparentToggle';

import { Matrix4 } from 'three';


import addHand from './components/hand';
// file properties are hinded from code not in this file.
let camera;
let orbitControls;
let renderer;
let dragControls;
let loop;
let pathJSObjs = new Array();

// let hand;
class World {
  // class properties so it can be passed to EventListener via world instarnce.
  space;
  scene;
  constructor(container, inputSpace, inputPath) {
    console.log('In World constructor')

    camera = createCamera();
    renderer = createRenderer();
    this.scene = createScene();

    // Hand is a sphere that stays in front of the camera
    // hand = addHand( camera, scene );

    loop = new Loop( camera, this.scene, renderer );
    container.append( renderer.domElement );
    orbitControls = createOrbitControls( camera, renderer.domElement );
    dragControls = createDragControls( camera, renderer.domElement );

    const { ambientLight, mainLight } = createLights();

    loop.updatables.push(orbitControls);
    // this.scene.add(ambientLight, mainLight);
    this.scene.add(mainLight);

    const resizer = new Resizer(container, camera, renderer);

    // Add event listeners
    addSpaceListener( inputSpace, this );
    addPathListener( inputPath, this.scene, dragControls, pathJSObjs );
    addTransparentListener( this );

  }

  async init() {
    // For development, load components
    // Comment below to remove loading space on page initialization
    this.space = await loadInitSpace( this );
    // Comment below to remove loading path on page initialization
    await loadInitPath( this.scene, dragControls, pathJSObjs );
  }

  render() {
    renderer.render(this.scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
