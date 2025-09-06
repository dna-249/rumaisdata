import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';

const useIndicator = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState("Please Wait...");

  const handleIndicator = () => {
    return(
     < View style={loading? [style.flex,{position:"absolute", color:"white",
                  width:"100%",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.73)", zIndex:20}] :{display:"none"}}>
                   <ActivityIndicator animating={true} color="white" size="large"  />
                   <Text style={{alignSelf:"center",color:'white',fontSize:"large", marginTop:20}}>{text}</Text>
                   </View>
        )
     }
 const indicator = handleIndicator()
 
  return {indicator,setLoading,setText} 

};


export default useIndicator;

const style = StyleSheet.create({
    flex:{
     display:"flex",
     alignContent:"center",
     justifyContent:"center",
     margin:"auto"
  }
})
