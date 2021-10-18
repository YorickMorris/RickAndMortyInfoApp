import {StyleSheet} from 'react-native';

 export const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
    },
    item1:{
      flex:1,
      alignSelf:'stretch',
      margin:10,
      padding:5,
      alignItems:'center',
      justifyContent:'center',
      borderBottomWidth:1,
      borderBottomColor: '#eee'
    },
    touch:{
      marginTop:20,
      backgroundColor:'#3498db',
      marginHorizontal:5,
      paddingHorizontal:15,
      paddingVertical:5,
      borderRadius:5,
    }
  });
  
  export default styles;