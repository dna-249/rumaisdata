import { ThemedText } from "@/components/ThemedText"
import axios from "axios"
import { useEffect, useState } from "react"
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Button, TextInput, useTheme } from "react-native-paper"

const Data = ()=>{
    const [data,setData] = useState('')
    const [network,setNetwork] = useState("MTN_DATA")
    const theme = useTheme()
    useEffect(()=>{
    const handleRequest =()=>{
    axios.get("https://dnadata.vercel.app/mtn/api")
         .then(res =>{setData(res.data); console.log(res.data)}).catch(err => console.log(err))
    };handleRequest()},[network])
    return(
          <ScrollView>
              <KeyboardAvoidingView>
              <View style={{backgroundColor:theme.colors.background}}>
                <View style={style.div}>
                    <TextInput style={{width:300}} readOnly  value="100"  label={"Wallet balance"}/>
                    <TextInput style={{width:300}}  placeholder="Phone Number" mode="outlined" label={"Phone Number"}/>
                     <ThemedText style={{padding:10}} >Select Network</ThemedText> 
                     <View  style={style.cont}>
                            <Image  style={style.img}  onPress={()=>setNetwork("MTN_DATA")} source={require('@/assets/images/mtn.png')} /> 
                            <Image style={style.img} onPress={()=>setNetwork("AIRTEL_DATA")} source={require('@/assets/images/airtel.jpg')} /> 
                            <Image style={style.img} onPress={()=>setNetwork("GLO_DATA")} source={require('@/assets/images/glo.jpg')} /> 
                     </View>
                     <View>
                       <Text> {data?.MTN_DATA?.map((item,index)=>{return(
                        <>
                        <Button mode="contained"  style={style.item}>
                        <Text key={index}>{item.size}</Text>
                        <Text key={index}>{item.network}</Text>
                        <Text key={index}>{item.plan}</Text>
                       </Button> 
                       </>
                        )})}
                        </Text>
                    </View>
                 </View>
                </View>
              </KeyboardAvoidingView>
          </ScrollView>

      )
}
export default Data
const style = StyleSheet.create({
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
    flexDirection:"row"

  },
  item:{
    padding:10,
    borderRadius:10,
  } 
})