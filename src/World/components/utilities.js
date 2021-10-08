
function findChildernByName( group, name ) {
  const children = group.children
  const found = children.filter( child => child.name === name );
  return found;
}
export { findChildernByName };
