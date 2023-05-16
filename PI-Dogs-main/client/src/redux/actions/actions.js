
import axios from 'axios';
import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_DOG_ID,
  POST_DOGS,
  FILTER_TEMPERAMENTS
} from "./types";

// Action creator para obtener la lista de perros
export const getDogs = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/dogs');
      console.log("Dogs response:", response.data);
      dispatch({ type: GET_DOGS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  }
};


export const getDogId = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/dogs/${id}`);
      console.log("Dog by ID:", response.data);
      dispatch({ type: GET_DOG_ID, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  }
};

export const getTemperaments = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/temperaments');
      
      console.log("Temperaments:", response.data);
      dispatch({ type: GET_TEMPERAMENTS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  }
};

export const createNewDog = (newDog) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/dogs/", newDog);
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
    

