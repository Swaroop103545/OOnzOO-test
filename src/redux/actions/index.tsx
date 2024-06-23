// store/actions/apiActions.js
import {REQUEST_DATA, RECEIVE_DATA, API_ERROR} from './types';

export const fetchData = () => async (dispatch: any) => {
  dispatch({type: REQUEST_DATA});

  try {
    // Perform API request here, e.g., using fetch or axios
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    dispatch({type: RECEIVE_DATA, payload: data});
  } catch (error: any) {
    dispatch({type: API_ERROR, payload: error.message});
  }
};
