import { LineBasicMaterial, Line, Color } from 'three';
import { PATH_COLORS } from '../../constants'

export default ( pathGeometry ) => {
  // make material
  const color = PATH_COLORS[0];

  const material = new LineBasicMaterial( { color } );
  // Note: Cannot change linewidth, see https://threejs.org/docs/#api/en/materials/LineBasicMaterial.linewidth
  // Use Line2 and LineGeometry, see https://threejs.org/examples/#webgl_lines_fat
  // https://github.com/mrdoob/three.js/blob/dev/examples/webgl_lines_fat.html

  // make mesh
  const line = new Line( pathGeometry, material );
  line.name = 0;  // name can be used to identify the line.
  // console.log(line)

  return line;
}
