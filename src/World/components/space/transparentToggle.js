
const KEY = 'KeyT'

function addTransparentListener ( world ) {

  const onKeyPress = ( event ) => {
    if( event.code === KEY ){
      const space = world.space;
      if( space.material.transparent ){
        space.material.setValues({
          transparent: false,
          opacity: 1,
          depthWrite: true,
        });
      }
      else { // transparent is false
        // Need to set depthWrite false, see
        // https://stackoverflow.com/questions/15994944/transparent-objects-in-threejs
        space.material.setValues({
          transparent: true,
          opacity: 0.5,
          depthWrite: false,
        });
      }
    }  // end if( event.code === KEY )
  } // end oKeyPress

  window.addEventListener( 'keypress', onKeyPress );
}

export { addTransparentListener };
