
import makeTextFileUploader from '../../../util/uploadTextFile/makeTextFileUploader';
import makePathMesh from './makePathMesh';
import makePathObject from './makePathObject';
import makePathGeometry from './makePathGeometry';
import { Matrix4 } from 'three';

// A curry/partial application function see
// https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983
const loadPath = ( scene, dragControls, pathJSObjs ) => pathString => {
  // make path JS object and add to pathJSObjects
  const pathObject = makePathObject( pathString );
  pathJSObjs.push( pathObject )
  // make path mesh
  // Using composition
  const pathMesh = makePathMesh( makePathGeometry( pathObject ) );
  // Another way to flip the path geometry
  // pathMesh.applyMatrix( new Matrix4().makeScale( -1, 1, 1 )); // Flip X-axis
  // I prefer flipping the JS object rather than the Mesh

  // Add path to the scene
  scene.add( pathMesh );
  // Add path to draggables
  const draggables = dragControls.getObjects();
  draggables.push( pathMesh );
}

function addPathListener ( input, scene, dragControls, pathJSObjs ){
  const makePath = loadPath( scene, dragControls, pathJSObjs ) // using the partial application
  const uploadPath = makeTextFileUploader( input, makePath ); // Make callback for EventListener
  input.addEventListener( 'change', uploadPath );
}


// Used for development
async function loadInitPath( scene, dragControls, pathJSObjs ) {
  const pathURL = '/assets/paths/Subject_Data.txt';
  // see using fetch with async and await:
  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
  const response = await fetch( pathURL );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/Response
  const pathString = await response.text();
  // Using partial application to call the complete function.
  const pathMesh = loadPath( scene, dragControls, pathJSObjs )( pathString );

} // end function loadInitPath

export { addPathListener, loadInitPath };
