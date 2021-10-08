import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { LineBasicMaterial } from 'three';
import { PATH_HIGH_LIGHT } from '../../constants'

/*
 * ToggledODragControls toggles the enabled state for the DragControls
 *
 * toggle = {
 *    keys,
 *    down,
 *    up,
 *    initial,
 * }
 *
 * keys should be the key codes for toggling. See
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code

 * down and up  are the state of enabled, true or false
 * intial is the initial state for, true or false, for enabled.
 */
class ToggledDragControls extends DragControls{
  toggle;
  constructor( objects, camera, domElement, toggle ) {
    super( objects, camera, domElement );
    // Toggle controls
    this.toggle = toggle;

    const onKeyDown = ( event )=>{
          if ( this.toggle.keys.includes( event.code )){
        this.enabled = this.toggle.down;
      }
    }

    const onKeyUp = ( event )=>{
      if ( this.toggle.keys.includes( event.code )){
        this.enabled = this.toggle.up;
      }
    }

    window.addEventListener( 'keydown', onKeyDown );
    window.addEventListener( 'keyup', onKeyUp );

    this.enabled = this.toggle.initial

    // For highligting paths
    this.addEventListener( 'hoveron', function( event ){
      const object = event.object
      const material = object.material
      if ( material instanceof LineBasicMaterial ){
        material.color.addScalar( PATH_HIGH_LIGHT )
      }
      else {
        material.emissive.set( 0xaaaaaa );
      }
    })

    this.addEventListener( 'hoveroff', function( event ){
      const object = event.object
      const material = object.material
      if ( material instanceof LineBasicMaterial ){
        material.color.addScalar( -PATH_HIGH_LIGHT )
      }
      else {
        material.emissive.set( 0x000000 );
      }
    })
  } // end constructor
} // end class ToggledDragControls

export { ToggledDragControls };
