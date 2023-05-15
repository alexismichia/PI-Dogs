
import axios from 'axios';
import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_DOG_ID,
  POST_DOGS

} from "./types";

// Action creator para obtener la lista de perros
export const getDogs= ()=> {
  return async(dispatch)=>{
  const response = axios.get('http://localhost:3001/dogs')
  dispatch({ type: GET_DOGS, payload: response.data})
}}


export async function getDogId(id) {
  return async function(dispatch){    
  const { data } = await axios(`http://localhost:3001/dogs/${id}`);
      return { type: GET_DOG_ID, payload: data };
    }}

export const getTemperaments = () => async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/temperaments');
        const temperaments = response.data.map((t) => t.name);
        dispatch({ type: GET_TEMPERAMENTS, payload: temperaments });
      } catch (error) {
        console.log(error);
      }
    };

export async function createNewDog(newDog) {
  return async function(dispatch){    
  const { data } = await axios.post("https://api.thedogapi.com/v1/breeds", newDog);
      return { type: POST_DOGS, payload: data };
    }}
    
        
        
