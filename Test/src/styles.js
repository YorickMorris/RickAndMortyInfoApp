import {StyleSheet} from 'react-native';

 export const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#4e4e4e',
      alignItems:'center',
      justifyContent:'center',
    },
    item1:{
      flex:1,
      padding:5,
      alignItems:'center',
      justifyContent:'center',
      color:'#fffdd0',
      borderBottomWidth:1,
      borderBottomColor: '#eee',
    },
    touch:{
      marginTop:15,
      backgroundColor:'#a2a2a2',
      marginHorizontal:5,
      paddingHorizontal:10,
      paddingVertical:5,
      borderRadius:5,
    },
    item2:{
     
      padding:5,
      alignItems:'center',
      justifyContent:'center',
      color:'#fff',
    },
    item3:{
      color:'#d2d2d2',
      padding:5,
      alignItems:'center',
      justifyContent:'center',
    }
  });
  
  export default styles;