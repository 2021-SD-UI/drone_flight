export default (pathString ) => {
  /*
   * This function parses a path text file
   * and makes an array of position and orientation:
   *  [{
   *      position: {x, y, z},
   *      speed: {x, y, z},
   *      orintation: {pitch, yaw, roll},
   *      time: a number
   *   }, ...]
   */

 /*
  * Regular Expressions for parsing a line into an object
  */
 const dRe = /(-?\d+\.\d+)/;
 const sRe = /\s+/;
 const xRe = /Coordinate x:\s+/;
 const yRe = /Coordinate y:\s+/;
 const zRe = /Coordinate z:\s+/;
 const sxRe = /Speed x:\s+/;
 const syRe = /Speed y:\s+/;
 const szRe = /Speed z:\s+/;
 const pitchRe = /Pitch x:\s+/;
 const yawRe = /Yaw y:\s+/;
 const rollRe = /Roll z:\s+/;
 const tRe = /Time:\s+/;

 const parsingRE = new RegExp (
   xRe.source + dRe.source + sRe.source +
   yRe.source + dRe.source + sRe.source +
   zRe.source + dRe.source + sRe.source +
   sxRe.source + dRe.source + sRe.source +
   syRe.source + dRe.source + sRe.source +
   szRe.source + dRe.source + sRe.source +
   pitchRe.source + dRe.source + sRe.source +
   yawRe.source + dRe.source + sRe.source +
   rollRe.source + dRe.source + sRe.source +
   tRe.source + dRe.source
 );

 /*
  * Ulitity functions for parsing and making the object
  */
  // console.log("In callback!!!");
  const parseAndMakeObj = ( line ) => {
    // Find match
    const match = line.match(parsingRE);

    // Make the object
    let x = - parseFloat( match[1] ); // Note the minus flips the path
    let y = parseFloat( match[2] );
    let z = parseFloat( match[3] );
    const position = { x, y, z };

    x = - parseFloat( match[4] ); // the minus because we have flipped path
    y = parseFloat( match[5] );
    z = parseFloat( match[6] );
    const speed = { x, y, z };

    const pitch = - parseFloat( match[7] );  // rotation about the X avis. Minus because we have flipped X axis
    const yaw = parseFloat( match[8] );  // rotation about the Y axis
    const roll = parseFloat( match[9] ); // rotation about Z axis
    const orientation = { pitch, yaw, roll };

    const time = parseFloat( match[10] );

    const obj = { position, speed, orientation, time };

    return obj;
  } // end parseAndMakeObj

  const matchFilter = ( line ) => {
    const match = line.match(parsingRE);
    return !!match
  } // end matchFilter

  /*
   * Main code
   */
  // Split the string on lines
  const lines = pathString.split( /\r\n|\r|\n/ );

  // Filter out lines that do not have matches
  const filteredLines = lines.filter( matchFilter );

  // Map the string array to an object array
  const returnObj = filteredLines.map( parseAndMakeObj );
  // console.log( returnObj );
  return returnObj;
}
