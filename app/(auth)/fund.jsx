import { AppContext } from "@/api/api"
import { ThemedText } from '@/components/ThemedText'
import axios from "axios"
import { useContext, useState } from "react"
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Button, TextInput, useTheme } from "react-native-paper"
import useIndicator from "./useIndicator"



const Fund = ()=>{
    const [data,setData] = useState('')
     const [error,setError] = useState('')
    const [phone,setPhone] = useState('')
    const { users } = useContext(AppContext);
    const {indicator,indicator2,setLoading,setText,setVisible} = useIndicator()

    
    const theme = useTheme()
    
    const handleBuying =async()=>{
      setLoading(true)
      setText("Processing...")

     await axios.post("https://dnadata.vercel.app/mtn/payment",{
      amount:phone,
      email:users?.email,
      name:users?.name
    })
   .then(res =>{setText(res.data.status);setLoading(false);setVisible(true);window.location.href = res.data.data.authorization_url;console.log(res)}).catch(err => {console.log(err);setText("error");setVisible(true)})
    setLoading(false)
    }

    

    const handleAunthentication =async()=>{
    if(!phone){
      setError("Please fill the all fields")
    } else {
      setError("")
      handleBuying()
    }
  }
 
    return(
          <ScrollView>
             {indicator}
             {indicator2}   
                 
              <KeyboardAvoidingView> 
              <View style={{backgroundColor:theme.colors.background,height:"100hv"}}>
                <View style={style.div}>
                     <ThemedText type="subtitle">Fund Your Wallet</ThemedText>
                    <TextInput style={{width:300,marginTop:20}} readOnly  value={users?.name} label={"Account Name"}/>
                    <TextInput style={{width:300,marginTop:20}} readOnly  value={users?.total} label={"Account Balance"}/>
                    <TextInput style={{width:300,marginTop:20}} onChange={(e)=>setPhone(e.target.value)}  mode="outlined" label={"Enter Amount"}/>
                       {error && <Text style={{color:theme.colors.error}}>{error}</Text>}
                    <Button style={{width:300,marginTop:20}} mode="contained" onPress={()=>handleAunthentication()}>Fund Your Wallet</Button>
                 </View>

                </View>
              </KeyboardAvoidingView>
          </ScrollView>

      )
}
export default Fund

const style = StyleSheet.create({
    flex:{
     display:"flex",
     alignContent:"center",
     justifyContent:"center",
     margin:"auto"
  },
      div:{
    paddingTop:120,
    display:"flex",
    alignContent:"center",
    alignItems:"center",
    margin:"auto"
  },
  img:{
    height:50,
    width:50,
    margin:10

  } ,
  cont:{
    display:"flex",
    flexDirection:"row",
    alignSelf:"center"

  },
  item:{
    padding:10,
    borderRadius:10,
    backgroundColor:"#eee",
    marginTop:5
    
  } 
})