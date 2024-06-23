import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  Card: {
    backgroundColor: 'yellow',
    padding: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  productList: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  productItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
})

// export const commonStyles = StyleSheet.create({
//   fdRow: {
//     flexDirection: 'row'
//   },
//   fdColumn: {
//     flexDirection: 'row'
//   },
//   flex1: {
//     flex: 1
//   }
// })