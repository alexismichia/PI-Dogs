
import axios from 'axios';
import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_DOG_ID,
  POST_DOGS,
  FILTER_TEMPERAMENTS,
  FILTER_BY_BREEDS,
  SORT_BREEDS,
FILTER_BY_ORIGIN
} from "./types";

// Action creator para obtener la lista de perros
export const getDogs = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/dogs');
      
      dispatch({ type: GET_DOGS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  }
};
export const getDogsByBreed = (breed) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/dogs?name=${breed}`);
      console.log("Dogs response:", response.data);
      dispatch({ type: FILTER_BY_BREEDS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  }
};


export const getDogId = (id) => {
  return (dispatch) => {
    
      axios.get(`http://localhost:3001/dogs/${id}`).then(({data})=>{
          
      return dispatch({
          type: GET_DOG_ID,
          payload:data
      })
      })
      
      
   
  }
};

export const getTemperaments = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/temperaments');
      
      
      dispatch({ type: GET_TEMPERAMENTS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  }
};

export const createNewDog = (newDog) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/dogs", newDog);
      console.log("New dog created:", response.data);
      dispatch({ type: POST_DOGS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  }
};

export const filterByTemp=(temperaments)=>{
return {type: FILTER_TEMPERAMENTS, payload:temperaments}
};

export const sortedBreeds=(weight)=>{
  return {type: SORT_BREEDS, payload:weight}
}

export const filterorigin=(origin)=>{
  return {type: FILTER_BY_ORIGIN, payload:origin}
}





