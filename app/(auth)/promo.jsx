import { AppContext } from "@/api/api"
import { ThemedText } from "@/components/ThemedText"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { FlatList, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Button, TextInput, useTheme } from "react-native-paper"
import useIndicator from "./useIndicator"


const Promo = ()=>{
    const [data,setData] = useState('')
    const [network,setNetwork] = useState("MTN_DATA")
    const [select,setSelect] = useState([''])
    const [toggle,setToggle] = useState(true)
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

    const handleAunthentication =async()=>{
    if(!select || !phone){
      setError("Please fill the all fields")
    } else {
      setError("")
      handleBuying()
    }
  }

    const handleBuying =async()=>{
      

     const a = Number(select.price)
     const b = Number(users?.total)
       

      if(a > b){
      
        setText("Processing...")
        setVisible(true)
        setText("Insufficent Balance!")
      } else{
      setText("Processing...")
      setLoading(true)

      await axios.post("https://dnadata.vercel.app/mtn/buy",{
      size:select.size,
      phone:phone,
      network:network.slice(0,-5),
      date:Date().slice(0,21),
      userId:users._id,
      amount:select.price
    })
    .then(res =>{setData(res.data);setText(res.data.code);setVisible(true);console.log(res);setLoading(false)})
    .catch(err => {console.log(err);setText(res.data.code);setVisible(true);setLoading(false)})
    } 
  };

    const handleSelect = (item)=>{
      setSelect(item)
      setToggle(false)
    }
    
    const datas  =  [{plan:"1GB MONTHLY PLAN",price:"450"},
                    {plan:"2GB MONTHLY PLAN",price:"900"},
                    {plan:"3GB MONTHLY PLAN",price:"1300"},
                    {plan:"4GB MONTHLY PLAN",price:"1700"},
                    {plan:"5GB MONTHLY PLAN",price:"2200"},
                    {plan:"10GB MONTHLY PLAN",price:"4200"},
                    ]
    
 
    return(
          <ScrollView>
            {indicator}
           
              <KeyboardAvoidingView> 
              <View style={{backgroundColor:theme.colors.background,height:"100hv"}}>
                <View style={style.div}>
                      {indicator2}
                    <TextInput style={{width:300}} readOnly  value={users?.total}  label={"Wallet balance"}/>
                    <TextInput style={{width:300,marginTop:20}} onChange={(e)=>setPhone(e.target.value)}  placeholder="Phone Number" mode="outlined" label={"Phone Number"}/>

                    {toggle? <View>
                     <ThemedText style={{padding:10, fontWeight:"bold",textAlign:"center"}}  >MTN DATA PLAN MONTHLY</ThemedText> 
                     <View  style={style.cont}>
                            <View style={[network === "MTN_DATA"? {padding:1, backgroundColor:"green"}:{ padding:1, backgroundColor:"green"}]}><Image  style={style.img}  onClick={()=>setNetwork("MTN_DATA")} source={require('@/assets/images/mtn.png')} /></View> 
                            <View style={[network === "AIRTEL_DATA"? {padding:1, backgroundColor:"none"}:{ backgroundColor:"none"}]}> <Image style={style.img} onClick={()=>setNetwork("AIRTEL_DATA")} source={require('@/assets/images/airtel.jpg')} /> </View>
                            <View style={[network === "GLO_DATA"? {padding:1, backgroundColor:"none"}:{ backgroundColor:"none"}]}> <Image style={style.img} onClick={()=>setNetwork("GLO_DATA")} source={require('@/assets/images/glo.jpg')} /></View> 
                     </View>
                     <ScrollView>
                     <View style={{height:300,padding:10}}>
                       <FlatList data={datas}
                                 numColumns={1}
                                 renderItem={({item,index})=>{return(
                        <View style={style.item}>
                        <Text style={{textAlign:"center"}} onClick={()=>handleSelect(item)} key={index}>{item.plan}<br/>N{item.price}</Text>
                       </View> 
                        )}}
                       />
                    </View>
                    </ScrollView>
                 </View>
                  : <View> 
                    <Text style={{textAlign:"center",marginTop:20, fontWeight:"bold", color:"coral",marginBottom:20}}> Data Plan Selected</Text>
                    <View  style={style.item}>
                       <Text  style={{textAlign:"center"}}>{select.plan}<br/>N{select.price}</Text></View>
                      {error && <Text style={{color:theme.colors.error}}>{error}</Text>}
                    <Button  mode="contained" style={{backgroundColor:"green",color:"white",marginTop:20}} onPress={()=>handleAunthentication()}>Pay</Button> 
                  
                  <Button  mode="text" onPress={()=>setToggle(true)} style={{marginTop:20,marginBottom:100}}>Back</Button> 
               
                 </View> }
                 </View>

                </View>
              </KeyboardAvoidingView>
          </ScrollView>

      )
}
export default Promo
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