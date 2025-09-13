import { AppContext } from "@/api/api"
import { ThemedText } from '@/components/ThemedText'
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from "react-native"
import { Button, TextInput, useTheme } from "react-native-paper"
import useIndicator from "./useIndicator"



const Fund
 = ()=>{
    const [data,setData] = useState('')
    const [network,setNetwork] = useState("MTN_DATA")
    const [select,setSelect] = useState([''])
    const [toggle,setToggle] = useState(false)
    const [show,setShow] = useState(true)
    const [error,setError] = useState('')
    const [phone,setPhone] = useState('')
    const { users } = useContext(AppContext);
    const {indicator,indicator2,setLoading,setText,setVisible} = useIndicator()

    
    const theme = useTheme()
    useEffect(()=>{
    const handleRequest =()=>{
    axios.get(`https://dnadata.vercel.app/user/${users?._id}`)
         .then(res =>{setData(res.data); console.log(res.data)}).catch(err => console.log(err))
    };handleRequest()},[users])

    const handleBuying =()=>{
      setLoading(true)
      setText("Processing...")

      axios.post("https://dnadata.vercel.app/mtn/buy",{
      userId:users?._id,
      amount:phone,
      email:users?.email,
      name:users?.name
    })
    .then(res => {console.log(res);window.location.href = res.data.data.authorization_url;})
    .then(res =>{setData(res.data);setText(res.data.code);setVisible(true) ;console.log(res)}).catch(err => {console.log(err);setText(res.data.code);setVisible(true)})
    setLoading(false)
    };

    const handleSelect = (item)=>{
      setSelect(item)
      setToggle(false)
    }
    

    const handleAunthentication =async()=>{
      console.log("its")
    if(!select || !phone){
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
                    <TextInput style={{width:300,marginTop:20}} readOnly  value={data.name} label={"Account Name"}/>
                    <TextInput style={{width:300,marginTop:20}} readOnly  value={data.total} label={"Account Balance"}/>
                    <TextInput style={{width:300,marginTop:20}} onChange={(e)=>setPhone(e.target.value)}  mode="outlined" label={"Enter Amount"}/>
                    <Button style={{width:300,marginTop:20}} mode="contained" >Fund Your Wallet</Button>
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