export default  function makeTextFileUploader( input, callback ) {
  /*
   * This function creates a clousre
   * so that the returned function has access to input
   */
 return  () => {
   /*
    * For valid file types
    * See https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    * and https://www.iana.org/assignments/media-types/media-types.xhtml
    * for possible file types
    */
     const fileTypes = [
       'text/plain'
     ];

     const validFileTypes = (file) => {
       return fileTypes.includes(file.type);
     }

    const curFiles = input.files;
    const reader = new FileReader()

    if(curFiles.length > 0) {
      const file = curFiles[0];

      if( validFileTypes( file ) ){
        // The work on the file is done by the callback for onload
        // need to set reader onload callback before reading
        reader.onload = function (event) {
          const result = event.target.result;
          callback(result);
        } // end onload
        // read file after setting up callback
        reader.readAsText(file);

      } // end if validFileType
      // All of below handle errors
      else {
        alert(`The file ${file.name} is not a valid file type.`)
      }
      // reader.readAsText(file);  // reading can also be here
    }
    else {
        alert("No files selected for upload.");
    } // end else no files
  } // end returned function

} // end exported function
