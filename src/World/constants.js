/*
 * World Constants
 */
 import { Color } from 'three';
 // https://threejs.org/docs/#api/en/math/Color

 // Paths
export const PATH_HIGH_LIGHT = 0.3 // add to color for highlighting.

// Cycle through array of colors to color paths differently.
// RBG values should be less than 1-PATH_HIGH_LIGHT, for highlighting to work properly.
export const PATH_COLORS = [ new Color(.7, 0, .7), new Color(.7, 0, 0)]
