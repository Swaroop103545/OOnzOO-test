const initialState = {
  products: []
};

const ProductReducer = (state = initialState, action : any) => {
  switch(action.type) {
    case 'PRODUCT_DETAILS':
      return {
        ...state,
        state
      }
    default:
      return state
  }
}

export default ProductReducer;