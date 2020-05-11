import RNFS from 'react-native-fs';
import { REACT_APP_ID } from '../../../Auth';

export const uploadFile = async  (file,hasCovid) => {
    const base64  =await base64_encode(file)
    const id = REACT_APP_ID
    const _base64 = `data:${"audio/m4a"};base64,${base64}`
    var fd = new FormData();
    fd.append("file", _base64);
    fd.append("upload_preset",hasCovid ?  "covid_coughs" : "coughs");
    fd.append("resource_type", "video")
    fetch(`https://api.cloudinary.com/v1_1/${id}/video/upload`,
    {
        method: 'POST',
        body: fd
    }
    ).then(r=>r).catch(e=>console.log(e));
  }
  // function to encode file data to base64 encoded string
const base64_encode =async (file)  => {
    var bitmap = await RNFS.readFile(file,"base64").then(r=>r)
    return bitmap
}