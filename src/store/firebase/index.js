import axios from 'axios';
import {uploadFile} from '../Functions';
import { REACT_APP_AUTH_ID,REACT_APP_API_KEY,REACT_APP_DB_ID} from '../../../Auth';

const projectID = REACT_APP_AUTH_ID
const key = REACT_APP_API_KEY
const doc = REACT_APP_DB_ID
const url = `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${doc}/?key=${key}`

export const postResults = async data => {
    let record = data.record;
    if(record !== ""){
        await uploadFile(record,data.dry)
    }
    const _data =  { 
        fields: { 
            age: { integerValue: data.age },  
            height: { integerValue: data.height },  
            gender: { integerValue: data.gender },  
            weight: { integerValue: data.weight },  
            lbs: { booleanValue: data.lbs },  
            smell: { integerValue: data.smell },  
            taste: { integerValue: data.taste },  
            smoke: { integerValue: data.smoke },  
            breath: { integerValue: data.breath },  
            phelgm: { integerValue: data.phelgm },  
            dry: { integerValue: data.dry },  
            poop: { integerValue: data.poop },  
            head: { integerValue: data.head },  
            fever: { integerValue: data.fever },   
            created: { timestampValue: new Date() }, 
            modified: { timestampValue: new Date() },
            record:{ mapValue: data.record}
        } 
    }
    return axios.post(url,_data).then(r=>console.log("SUCCESSFUL")).catch(e=>console.log(e))
}