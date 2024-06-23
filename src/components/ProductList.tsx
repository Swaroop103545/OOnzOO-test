import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {commonStyles} from './Styles';
import axiosInstance from '../axios';

const ProductList = ({products}: any) => {
  const [data, setData] = useState(null);

  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;

  useEffect(() => {
    // Example GET request using axiosInstance
    axiosInstance
      .get('/products')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderItem = ({item}: any) => (
    <>
      <TouchableOpacity style={commonStyles.productItem}>
        <Image source={item.image} style={commonStyles.productImage} />
        {/* <View style={commonStyles.productDetails}> */}
        <View style={{width: WIDTH / 1.5}}>
          <Text style={commonStyles.productName}>{item.name}</Text>
          <Text style={commonStyles.productDescription}>
            {item.description}
          </Text>
          <Text style={commonStyles.productPrice}>{'$ ' + item.price}</Text>
        </View>
      </TouchableOpacity>
    </>
  );

  return (
    <View style={commonStyles.container}>
      {/* <ScrollView horizontal>
        <Text>A</Text>
        <Text>A</Text>
        <Text>A</Text>
        <Text>A</Text>
        <Text>A</Text>
        <Text>A</Text>
        <Text>A</Text>
        <Text>A</Text>
        <Text>A</Text>
        <Text>A</Text>
        <Text>A</Text>
        <Text>A</Text>
        <Text>A</Text>
        <Text>A</Text>
        <Text>A</Text>
      </ScrollView> */}
      <FlatList
        data={products}
        renderItem={renderItem}
        nestedScrollEnabled
        keyExtractor={item => item.id}
        contentContainerStyle={commonStyles.productList}
      />
    </View>
  );
};

export default ProductList;
