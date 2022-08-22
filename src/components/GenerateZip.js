import JSZip from  'jszip';
import { saveAs } from 'file-saver';
import {zipUrl} from '../pages/Story'

export const generateZipFromCloud = () => { 
    let filename = "Vngle";
    const zip = new JSZip()
    const folder = zip.folder('Media')

    zipUrl.forEach((url)=> {
    const blobPromise =  fetch(url)    
    .then(function (response) {  
           
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