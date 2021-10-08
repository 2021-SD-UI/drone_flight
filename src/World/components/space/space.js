import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import makeURL from '../../../util/makeURL/makeURL'
import { setupSpaceModel } from './setupSpaceModel.js'
import { Matrix4 } from 'three';

async function loadSpace( url, world ){
  const loader = new GLTFLoader();

  const [ spaceData ] = await Promise.all([
    loader.loadAsync(url),
  ]);
  const space = setupSpaceModel(spaceData);

  space.applyMatrix4( new Matrix4().makeScale( 1, 1, -1 )); // Flip Z-axis

  world.space = space;
  world.scene.add( space );
  return space;
}

// The old way to make curry function
function makeSpaceCallback ( world ){
  // world is now in the closure of makeSpaceCallback
  return async ( url) => {
    // if space exist remove it from the scene
    if ( world.space ) world.scene.remove(world.space);
    const space = await loadSpace( url, world );
  } // end returned function
} // end makeSpaceCallback

function addSpaceListener ( input, world ) {
  const makeSpace = makeSpaceCallback( world );
  const uploadSpace = makeURL( input, makeSpace );
  input.addEventListener( 'change', uploadSpace );
}

// For development
async function loadInitSpace( world ) {
  // const url = '/assets/models/Point_Cloud_Location.glb';
  const url = '/assets/models/Drone_Space_Low_Res.glb';
  const space = await loadSpace( url, world );
  return space;
}

export { loadInitSpace, addSpaceListener };
