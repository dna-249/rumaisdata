import { AppContext } from "@/api/api"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from "react-native"
import { TextInput, useTheme } from "react-native-paper"
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
    axios.get("https://dnadata.vercel.app/mtn/api")
         .then(res =>{setData(res.data); console.log(res.data)}).catch(err => console.log(err))
    };handleRequest()},[network])

    const handleBuying =()=>{
      setLoading(true)
      setText("Processing...")

      axios.post("https://dnadata.vercel.app/mtn/buy",{
      size:select.size,
      phone:phone,
      network:network.slice(0,-5),
      date:Date().slice(0,21),
      userId:users._id,
      amount:'amount'
    })
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
              <KeyboardAvoidingView> 
              <View style={{backgroundColor:theme.colors.background,height:"100hv"}}>
                <View style={style.div}>
                  {indicator}
                  {indicator2}   
                    <TextInput style={{width:300}} readOnly  value="100"  label={"Wallet balance"}/>
                    <TextInput style={{width:300,marginTop:20}} onChange={(e)=>setPhone(e.target.value)}  placeholder="Phone Number" mode="outlined" label={"Phone Number"}/>
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