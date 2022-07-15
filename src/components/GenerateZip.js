import JSZip from  'jszip';
import { saveAs } from 'file-saver';
import {zipUrl} from '../pages/ReviewDetails'
//import JSZipUtils from 'jszip-utils'
// export const generateZip = () => {
// var zip = new JSZip();
 
// zip.file("Hello.txt", "Hello World\n");

// var img = zip.folder("images");

// zip.generateAsync({type:"blob"}).then(function(content) {
//     saveAs(content, "example.zip");
// });
// }

export const generateZipFromCloud = () => { 
    console.log(zipUrl);
  let filename = "Vngle";
//   const urls = [
//     'http://localhost:1337/uploads/thumbnail_peakpx_9f2197dacc.jpg',
//     ]
    const zip = new JSZip()
    const folder = zip.folder('Media')
    zipUrl.forEach((url)=> {
   const blobPromise =  fetch(url)    
.then(function (response) {  
  console.log({response})             
    if (response.status === 200 || response.status === 0) {
        return Promise.resolve(response.blob());
    } else {
        return Promise.reject(new Error(response.statusText));
    }
})                          
 const name = url.substring(url.lastIndexOf('/'))
        folder.file(name, blobPromise)
    })

    zip.generateAsync({type:"blob"})
        .then(blob => saveAs(blob, filename))
        .catch(e => console.log(e));
}