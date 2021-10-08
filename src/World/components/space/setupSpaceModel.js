function setupSpaceModel(data) {
  console.log(data)
  // Indentifing the Mesh using the array index is very fragile
  // Need to find a better way
  // const model = data.scene.children[2]; // For Point_Cloud_Location.glb
  const model = data.scene.children[0]; // For Drone_Space_Low_Res.glb
  // const model = data.scene //This works, but data.scene is a group and adds an extra node to the scene

  // Set material so space is transparent.
  // model.material.setValues({
  //   transparent: false,
  //   opacity: 0.5,
  //   depthWrite: true,
  // });

  model.name = 'space';
  return model;
}

export { setupSpaceModel };
