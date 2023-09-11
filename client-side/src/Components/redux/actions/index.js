import {Types} from '../types'





export const EditData = (data) =>{
  
    return {
        type: Types.EDIT_DATA,
        payload: {
           ...data
        }
    }
}
