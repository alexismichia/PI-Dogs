import { GET_DOGS, GET_TEMPERAMENTS, GET_DOG_ID,POST_DOGS } from './actions/types';

const initialState = {
  dogs: [],
  currentDog: null,
  temperaments: [],
  filters: {
    name: '',
    temperament: '',
    weight: '',
    height: '',
    life_span: '',
  },
  sort: '',
  page: 1,
};

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
            return {
                 ...state,
                 arrayDogs: action.payload
             }
    case GET_TEMPERAMENTS:
            return {
              ...state,
              arrayTemperaments: action.payload
            };
    case GET_DOG_ID:
            return {
              ...state,
              dogById: action.payload
            };
    case POST_DOGS:
            return {
              ...state,
              createdDog: action.payload
            };                                    
    default:
      return state;
  }
};

export default dogReducer;
