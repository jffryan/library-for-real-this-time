import {
  GENERATE_GENRE_MASTERLIST,
  PULL_GENRE_MASTERLIST,
} from "../actions/variables";

const configReducerDefaultState = {};

const configReducer = (state = configReducerDefaultState, action) => {
  switch (action.type) {
    case GENERATE_GENRE_MASTERLIST:
      return { ...state, [action.payload.id]: action.payload };
    case PULL_GENRE_MASTERLIST:
      return { ...state, ["genres"]: action.payload };
    default:
      return state;
  }
};

export default configReducer;
