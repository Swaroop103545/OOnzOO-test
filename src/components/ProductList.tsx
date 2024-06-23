import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/actions/ProductAction';

const ProductList = ({ products, fetchProducts }: any) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text>{item.title}</Text>
            <Text>Price: ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  products: state.products,
});

export default connect(mapStateToProps, { fetchProducts })(ProductList);
