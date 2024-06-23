// store/reducers/apiReducer.js
import { REQUEST_DATA, RECEIVE_DATA, API_ERROR } from '../actions/types'

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, loading: true };
    case RECEIVE_DATA:
      return { ...state, loading: false, data: action.payload };
    case API_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
