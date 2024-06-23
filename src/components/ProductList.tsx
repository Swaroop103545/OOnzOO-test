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

const ProductList = () => {
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
      <ScrollView horizontal>
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
      </ScrollView>
      <FlatList
        data={data}
        renderItem={renderItem}
        nestedScrollEnabled
        keyExtractor={item => item.id}
        contentContainerStyle={commonStyles.productList}
      />
    </View>

    // <View style={commonStyles.flex1}>
    //   {data ? (
    //     <FlatList
    //       data={data}
    //       contentContainerStyle={commonStyles.productList}
    //       renderItem={({item}) => (

    //         <View style={[commonStyles.flex1, {backgroundColor: 'yellow', height: HEIGHT, width: WIDTH}]}>
    //           <View style={{padding: 10, backgroundColor: 'green'}}>

    //           </View>
    //         </View>

    //         // <View
    //         //   style={{marginHorizontal: 10, marginVertical: 2, padding: 6, borderRadius: 10}}>
    //         //   <View style={ProductStyles.Card}>
    //         //     <View style={[commonStyles.fdRow, {width: WIDTH - 25}]}>
    //         //       <Text numberOfLines={1}>{item.title}</Text>
    //         //       <Text>$ {item.price}</Text>
    //         //     </View>
    //         //     <Text>{item.description}</Text>
    //         //     <Text>{item.category}</Text>
    //         //   </View>
    //         // </View>
    //       )}
    //     />
    //   ) : (
    //     <Text>Loading...</Text>
    //   )}
    // </View>
  );
};

export default ProductList;
