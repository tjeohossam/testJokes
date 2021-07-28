import {
  JOKE_ADD_FAIL,
  JOKE_ADD_REQUEST,
  JOKE_ADD_SUCCESS,
  JOKE_LIST_DELETE_FAIL,
  JOKE_LIST_DELETE_REQUEST,
  JOKE_LIST_DELETE_SUCCESS,
  JOKE_LIST_FAIL,
  JOKE_LIST_REQUEST,
  JOKE_LIST_SUCCESS,
} from "../constants/jokeConstants";

export const jokeListReducer = (state = { jokes: [] }, action) => {
  switch (action.type) {
    case JOKE_LIST_REQUEST:
    case JOKE_ADD_REQUEST:
      return { ...state, loading: true };
    case JOKE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        jokes: state.jokes.concat(action.payload),
      };

    case JOKE_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        jokes: [...state.jokes, action.payload],
      };

    case JOKE_LIST_FAIL:
    case JOKE_ADD_FAIL:
      return { loading: false, error: action.payload };
    case JOKE_LIST_DELETE_REQUEST:
      return { ...state, loading: true };
    case JOKE_LIST_DELETE_SUCCESS:
      return {
        loading: false,
        jokes: [],
      };
    case JOKE_LIST_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
