import { ThemedText } from "@/components/ThemedText"
import axios from "axios"
import { useEffect, useState } from "react"
import { FlatList, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Button, TextInput, useTheme } from "react-native-paper"

const Data = ()=>{
    const [data,setData] = useState('')
    const [network,setNetwork] = useState("MTN_DATA")
    const [select,setSelect] = useState([''])
    const [toggle,setToggle] = useState(true)
    const theme = useTheme()
    useEffect(()=>{
    const handleRequest =()=>{
    axios.get("https://dnadata.vercel.app/mtn/api")
         .then(res =>{setData(res.data); console.log(res.data)}).catch(err => console.log(err))
    };handleRequest()},[network])

   

    const handleSelect = (item)=>{
      setSelect(item)
      setToggle(false)
    }
    return(
          <ScrollView>
              <KeyboardAvoidingView>
              <View style={{backgroundColor:theme.colors.background}}>
                <View style={style.div}>
                    <TextInput style={{width:300}} readOnly  value="100"  label={"Wallet balance"}/>
                    <TextInput style={{width:300}}  placeholder="Phone Number" mode="outlined" label={"Phone Number"}/>

                    {toggle? <View>
                     <ThemedText style={{padding:10}} >Select Network</ThemedText> 
                     <View  style={style.cont}>

                            <Image  style={style.img}  onClick={()=>setNetwork("MTN_DATA")} source={require('@/assets/images/mtn.png')} /> 
                            <Image style={style.img} onClick={()=>setNetwork("AIRTEL_DATA")} source={require('@/assets/images/airtel.jpg')} /> 
                            <Image style={style.img} onClick={()=>setNetwork("GLO_DATA")} source={require('@/assets/images/glo.jpg')} /> 
                     </View>
                     <ScrollView>
                     <View style={{height:300,padding:10}}>
                       <FlatList data={data?.[`${network}`]}
                                 numColumns={1}
                                 renderItem={({item,index})=>{return(
                        <View style={style.item}>
                        <Text onClick={()=>handleSelect(item)} key={index}>{item.plan}</Text>
                       </View> 
                        )}}
                       />
                    </View>
                    </ScrollView>
                 </View>
                  : <View> 
                    <Text> Data Plan Selected:</Text>
                    <View  style={style.item}>
                       <Text>{select.plan}</Text></View>
                    <Button mode="contained" style={{backgroundColor:"green",color:"white"}}>Pay</Button> 
                  </View> }
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
    backgroundColor:"#eee",
    marginTop:5
    
  } 
})