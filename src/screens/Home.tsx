import React from 'react'
import { Categories, FIlterProducts, ProductList } from '../components'

import { connect } from 'react-redux'

import {ProductDetails} from '../redux/actions/ProductAction'

const Home = ({products, ProductDetails}: any) => {
  return (
    <>
      {/* <Categories /> */}
      <ProductList products={products} />
      {/* <FIlterProducts /> */}
      
    </>
  )
}

const mapStateToProps = (state: any) => ({
  products: state.productList.products
});

const mapDispatchToProps = {
  ProductDetails
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);
