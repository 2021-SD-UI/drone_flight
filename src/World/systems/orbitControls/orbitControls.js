// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ToggledOrbitControls } from './ToggledOrbitControls.js';
 
function createOrbitControls(camera, canvas) {

  const toggle = {
    keys: [ 'ControlLeft', 'ControlRight' ],
    down: false,
    up: true,
    initial: true,
  }
  const orbitControls = new ToggledOrbitControls( camera, canvas, toggle );
  // const orbitControls = new OrbitControls(camera, canvas);

  orbitControls.enableDamping = true;

  // forward controls.update to our custom .tick method
  orbitControls.tick = () => {
    return orbitControls.update();
  }

  return orbitControls;
}

export { createOrbitControls };
