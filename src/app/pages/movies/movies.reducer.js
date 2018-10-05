import { GET_MOVIES } from './movies.constant';

const initialState = {
  results: [],
  isFetching: false,
  isError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      const { results, isError, isFetching } = action;

      return {
        ...state,
        results,
        isFetching,
        isError
      };
    default:
      return state;
  }
};
