import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/*
 * ToggledOribitControls toggles the enabled state for the OribitControls
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

 * down and up  ould be the state of enabled, true or false
 * intial is the initial state for , true or false for enabled.
 */
class ToggledOrbitControls extends OrbitControls {
  toggle;
  constructor( camera, domElement, toggle ){
    super( camera, domElement );
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
  } // end costructors
} // end class ToggledOribitControls

export { ToggledOrbitControls };
