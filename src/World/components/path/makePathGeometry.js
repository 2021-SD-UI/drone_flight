import makePathObject from './makePathObject';
import { Vector3 } from 'three';
import { BufferGeometry } from 'three';

export default ( pathObj ) => {
  // make points
  const points = pathObj.map( point => {
    // Need to make the class instance before returning
     const vector = new Vector3(point.position.x, point.position.y, point.position.z);
     return vector
  });

  // make Geometry
  const pathGeometry = new BufferGeometry().setFromPoints( points );

  return pathGeometry
}
