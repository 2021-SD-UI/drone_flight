import { ToggledDragControls } from './ToggledDragControls';

function createDragControls( camera, domElement ){

  const toggle = {
    keys: [ 'ControlLeft', 'ControlRight' ],
    down: true,
    up: false,
    initial: false,
  }
  const dragControls = new ToggledDragControls( [], camera, domElement, toggle );

  return dragControls;

}

export { createDragControls }
