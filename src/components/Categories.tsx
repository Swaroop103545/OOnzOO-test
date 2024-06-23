import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios';

const Categories = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    // Example GET request using axiosInstance
    axiosInstance.get('/products')
      .then(response => {
        console.log(',,,,,,,,,,,,,,,,respone', response)
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(',,,,,,,,,,,,,,,,,,,,data', data.category)
  
  return (
    <>
      <ScrollView>
        {data && <Text>{data.category}</Text>}
      </ScrollView>
    </>
  )
}

export default Categories