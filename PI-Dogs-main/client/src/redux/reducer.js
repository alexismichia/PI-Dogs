import { GET_DOGS, GET_TEMPERAMENTS, GET_DOG_ID,POST_DOGS, FILTER_TEMPERAMENTS, FILTER_BY_BREEDS} from './actions/types';

const initialState = {
  dogs: [],
  currentDog: null,
  temperaments: [],
  DogById: {},
  filter:[],
  createdDog:[],
  DogsByBreed:[],
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
              DogById: action.payload
            };
    case POST_DOGS:
            return {
              ...state,
              createdDog: action.payload
            };
    case FILTER_BY_BREEDS:
      return{
        ...state,
        DogsByBreed: action.payloads
      }


    case FILTER_TEMPERAMENTS: {
      const dogs= state.dogs
      const filterByTemp = action.payload === "All"
        ? []
        : dogs.filter((dog) =>{
          if(dog.temperament){
            return(dog.temperament.includes(action.payload))
            

          }
          else{return false}
        })
      return {
        ...state,
        
        filter: filterByTemp,
      };
    }                                           
    default:
      return state;
  }
};

export default dogReducer;
