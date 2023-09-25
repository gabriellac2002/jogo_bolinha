import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#222',
    
  },

  area:{
    flex:1,
    backgroundColor:'#333',
    alignItems:'center',
    
  },

  control:{
    flexDirection:'row',
    gap: 20,
    alignItems:'center',
    margin:20,
  },

  controllText:{
    color:'#FFF'
  },

  controllButonn:{
    flex:1,
    height:100,
    backgroundColor:'#0061FF',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
});