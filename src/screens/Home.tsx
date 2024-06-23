// import React from 'react'
// import { Categories, FIlterProducts, ProductList } from '../components'

// const Home = () => {
//   return (
//     <>
//       {/* <Categories /> */}
//       {/* <ProductList /> */}
//       {/* <FIlterProducts /> */}
      
//     </>
//   )
// }

// export default Home



// App.js or any component where you want to use the API data
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions/index';

const Home = ({ data, loading, error, fetchData }: any) => {
  console.log(',,,,,,,,,,,,,,,,,,,,,,data', loading, fetchData)
  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View>
      <Text>Data:</Text>
      <Text>{JSON.stringify(data)}</Text>
      <Button title="Refresh Data" onPress={() => fetchData()} />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  data: state.api.data,
  // loading: state.api.loading,
  // error: state.api.error,
});


export default connect(mapStateToProps, { fetchData })(Home);
