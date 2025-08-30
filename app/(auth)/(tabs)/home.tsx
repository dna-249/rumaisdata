import { HelloWave } from '@/components/HelloWave'
import { ThemedText } from '@/components/ThemedText'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
import axios from 'axios'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'


function Home() {
  const [toggle,setToggle]=useState(false)
  const [name,setName]=useState<any>('')
  const { id} = useLocalSearchParams()
   const theme = useTheme()


    const data = ["Data","Airtime","Cable","Electricity",
                  "Data Card","Bonus to Wallet","Airtime to Cash","Recharge Pin",
                  "Edu Pin","Affiliate Website","My Referrals","More Service"
                 ]
    const data2 = ["3113271035","1% Charge","Account Names","(Cap at N50)","(RumaisData - Your)", "Opay"]
    const data3 = [{item:"Account Names",id:"eye-slash", amt:"N0:00",star:"******"},{star:"******",item:"Referral Bonus",id:"eye-slash",amt:"N0:00"}]
    const icons = ["earth","inbox","iconfontdesktop","bulb1","creditcard","wallet","export","sync","rocket1","team","gift","ellipsis1"]
  
    useEffect(() => {
         axios.get(`https://dnadata.vercel.app/user/one/${id}`)
                 .then(res =>{setName(()=>res.data)}).catch(err => console.log(err))
     }, [id])
   
  
   return (
    <>
    <ScrollView>
      
     
      <View style={{backgroundColor:theme.colors.background}}>
        
              <View style={[style.cont2,{ justifyContent:"space-between",flexDirection:"row",padding:20}] }> 
              <ThemedText type='subtitle'>Welcome Back!<HelloWave/><br/><Text>{name?.user}</Text></ThemedText>
              <Text> <Ionicons name='notifications' size={24}/></Text>
                </View>
                        




      <View><ThemedText style={{alignSelf:"center",margin:10,fontWeight:"bold"}} >USER PACKAGE: SMART EARNER</ThemedText></View>
     <View style={[style.cont3,{backgroundColor:theme.colors.primary}]}>
       <FlatList data={data3} numColumns={2} renderItem={({item})=>{return(
       <ThemedText  style={style.cont2A}>{item.item}</ThemedText >
        )}}/> 
        <FlatList data={data3} numColumns={2} renderItem={({item})=>{return(
       <ThemedText  style={[style.cont2A,{ justifyContent:"space-between"}] }>{toggle? item.amt:item.star} <Feather style={{position:"relative",left:30}} size={20} onPress={handleToggle} name={[`${toggle? "eye":"eye-off"}`]}/></ThemedText >
        
        )}}/> 
         <Text style={style.box}><AntDesign  name="plussquare"/> Fund Wallet</Text>    
     </View>

     <View style={[style.cont4,{backgroundColor:theme.colors.primary}]}>
       <FlatList data={data2} numColumns={2} renderItem={({item})=>{return(
        <ThemedText  style={style.cont2A}>{item}</ThemedText >
        )}}/> 
         
     </View>

      <View >
       <FlatList data={data}  numColumns={4} style={style.cont}
                renderItem={({item,index})=>{return(
                <View style={style.div}>
                  <View style={style.item}>
                <AntDesign  name={`${icons[index]}`} color={"white"} size={20}/></View>
                <ThemedText style={style.iconText}>{item}</ThemedText> 
                </View>
              )}} />
      </View>
      </View>
     </ScrollView>
</>  )
}

export default Home
const style = StyleSheet.create({
     item:{
      backgroundColor:"coral",
      width:30,
      padding:5,
      borderRadius:10
     
     },

    div:{
      width:320,
      alignContent:'center',
      justifyContent:'space-between',
      flex:1,
       },

    iconText:{
      fontSize:12,
      fontWeight:"bold",
    },
    cont:{
      width:320,
      height:250,
      margin:"auto",
      padding:5,
      
      
    },
    cont2:{
      width:320,
      height:80,
      alignSelf:"center",
      padding:5,
      backgroundColor:'rgb(242, 219, 242)',
      borderRadius:20,
      color:"white",
      alignContent:"center"
    },
     cont2A:{
      justifyContent:"space-between",
      alignContent:"center",
      width:200,
      height:25,
      color:"white",
      fontWeight:"bold",
      padding:10,
      alignItems:"center"
    },
     cont3:{
      width:320,
      height:150,
      alignSelf:"center",
      marginBottom:30,
      padding:5,
      backgroundColor:"blue",
      borderRadius:12,
    },
    cont4:{
      width:320,
      height:120,
      alignSelf:"center",
      marginBottom:30,
      padding:5,
      backgroundColor:"blue",
      borderRadius:12,
    },
    box:{
      height:30, 
      width:200, 
      backgroundColor:"white",
      borderRadius:5,
      marginBottom:10,
      alignSelf:"center",
      textAlign:"center",
      alignContent:"center",
      fontWeight:"bold"
    }
    
  })