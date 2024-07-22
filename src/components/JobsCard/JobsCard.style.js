import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2, // Android için gölge
    shadowColor: '#000', // iOS için gölge
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location_container: {
    marginVertical: 8,
    backgroundColor:"#C90035",
    alignSelf:"baseline",
    padding:3,
    borderRadius:5,

  },
  location: {
    fontSize: 16,
    color: 'white',
  },
  level_info: {
    fontSize: 16,
    fontWeight:"450",
    color: '#C90035',
    textAlign:"right",
  },
});
