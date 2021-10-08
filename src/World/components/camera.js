import { PerspectiveCamera } from 'three';

function createCamera() {

  const fov = 90;
  const aspect = 1;  // think that this does not matter
  const near = 0.01;
  const far = 100;
  const camera = new PerspectiveCamera(fov, aspect, near, far);

  // Used for demoing loadSpace
  camera.position.set(30, 7, 10);

  return camera;
}

export { createCamera };
