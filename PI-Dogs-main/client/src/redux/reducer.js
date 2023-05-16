import { GET_DOGS, GET_TEMPERAMENTS, GET_DOG_ID,POST_DOGS, FILTER_TEMPERAMENTS} from './actions/types';

const initialState = {
  dogs: [],
  currentDog: null,
  temperaments: [],
  id: [],
  filter:[],
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
                 dogs: action.payload
             }
    case GET_TEMPERAMENTS:
            return {
              ...state,
              temperaments: action.payload
            };
    case GET_DOG_ID:
            return {
              ...state,
              id: action.payload
            };
    case POST_DOGS:
            return {
              ...state,
              createdDog: action.payload
            };
    case FILTER_TEMPERAMENTS: {
      const dogs= filter;
      const filterByTemp = action.payload === "All"
        ? dogs
        : dogs.filter((dog) => dog.temperaments.find(temperament=> temperament===payload))
      return {
        ...state,
        
        dogs: filterByTemp,
      };
    }                                           
    default:
      return state;
  }
};

export default dogReducer;
