export default function makeURL(input, callback ) {
  return () => {

    const curFiles = input.files;

    if(curFiles.length > 0) {
      const file = curFiles[0];

      const url = URL.createObjectURL( file )
      callback( url )

    // All of below handle errors
    }
    else {
        alert("No files selected for upload.");
    } // end else no files

  } // end of returned function
}
