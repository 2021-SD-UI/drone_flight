
// For drawing
import { World } from './World/World.js';

async function main() {

  // Get references of page elements
  const container = document.querySelector('#scene-container');
  const inputPath = document.querySelector('#path_uploads');
  const inputSpace = document.querySelector('#space_upload');

  // create a new world with path loader
  const world = new World(container, inputSpace, inputPath);

  // complete async tasks
  await world.init();

  // start the animation loop
  world.start();
}

main().catch((err) => {
  console.error(err);
});
