const initialState = {
  products: [],
  loading: false,
  error: null,
};

const ProductReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'PRODUCT_DETAILS':
      return {
        ...state,
      };
    case 'REQUEST_DATA':
      return {...state, loading: true};
    case 'RECEIVE_DATA':
      return {...state, loading: false, data: action.payload};
    case 'API_ERROR':
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default ProductReducer;