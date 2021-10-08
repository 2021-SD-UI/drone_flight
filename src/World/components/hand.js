import { SphereGeometry } from 'three';
import { MeshPhongMaterial, MeshBasicMaterial } from 'three';
import { Mesh } from 'three';
import { DoubleSide } from 'three';

function addHand( camera, scene ){

  const length = 5; // this must be larger then camera's near and smaller then far.
  const radius = 0.5;
  const widthSegments = 8;
  const heightSegments = 8;
  const geometry = new SphereGeometry(radius, widthSegments, heightSegments);

  const material = new MeshPhongMaterial( {
    color: 0x00ff00,
    opacity: 0.4,
    transparent: true,
    side: DoubleSide,
   } );

  const hand = new Mesh( geometry, material );

  camera.add( hand );
  hand.translateZ( -length ); // Must be negative because camera looks down local negative z axis.
  scene.add( camera );  // need to add the camera to the scene for it to move.

  return hand;
}

export default addHand;
