import { AppContext } from "@/api/api"
import { ThemedText } from "@/components/ThemedText"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { FlatList, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Button, TextInput, useTheme } from "react-native-paper"
import useIndicator from "./useIndicator"


const Data = ()=>{
    const [data,setData] = useState('')
    const [network,setNetwork] = useState("MTN_DATA")
    const [select,setSelect] = useState([''])
    const [toggle,setToggle] = useState(true)
    const [show,setShow] = useState(true)
    const [error,setError] = useState('')
    const [phone,setPhone] = useState('')
      const { users} = useContext(AppContext);
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

                    {toggle? <View>
                     <ThemedText style={{padding:10, fontWeight:"bold",textAlign:"center"}}  >Select Network</ThemedText> 
                     <View  style={style.cont}>
                            <View style={[network === "MTN_DATA"? {padding:1, backgroundColor:"green"}:{ backgroundColor:"none"}]}><Image  style={style.img}  onClick={()=>setNetwork("MTN_DATA")} source={require('@/assets/images/mtn.png')} /></View> 
                            <View style={[network === "AIRTEL_DATA"? {padding:1, backgroundColor:"green"}:{ backgroundColor:"none"}]}> <Image style={style.img} onClick={()=>setNetwork("AIRTEL_DATA")} source={require('@/assets/images/airtel.jpg')} /> </View>
                            <View style={[network === "GLO_DATA"? {padding:1, backgroundColor:"green"}:{ backgroundColor:"none"}]}> <Image style={style.img} onClick={()=>setNetwork("GLO_DATA")} source={require('@/assets/images/glo.jpg')} /></View> 
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
                    <Text style={{textAlign:"center",marginTop:20, fontWeight:"bold", color:"coral",marginBottom:20}}> Data Plan Selected</Text>
                    <View  style={style.item}>
                       <Text>{select.plan}</Text></View>
                      {error && <Text style={{color:theme.colors.error}}>{error}</Text>}
                    <Button  mode="contained" style={{backgroundColor:"green",color:"white",marginTop:20}} onPress={()=>handleAunthentication()}>Pay</Button> 
                  
                  <Button  mode="text" onPress={()=>setToggle(true)} style={{marginTop:20,marginBottom:200}}>Back</Button> 
               
                 </View> }
                 </View>

                </View>
              </KeyboardAvoidingView>
          </ScrollView>

      )
}
export default Data
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