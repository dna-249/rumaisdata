import { AppContext } from '@/api/api'
import { AntDesign } from '@expo/vector-icons'
import axios from 'axios'
import { useRouter } from 'expo-router'
import React, { useContext, useEffect, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useTheme } from 'react-native-paper'


const transaction = () => {
    const [toggle,setToggle] = useState(false)
    const [datas,setDatas] = useState()
    const [show,setShow] = useState(-1600)
    const [select,setSelect] = useState<String>("Data")
    const theme = useTheme()
    const { users } = useContext(AppContext);
    const nav = useRouter()
       





 useEffect(()=>{
     const handleRequest =()=>{
     axios.get(`https://dnadata.vercel.app/user/one/${users?._id}`)
          .then(res =>{setDatas(res.data); console.log(res.data)}).catch(err => console.log(err))
     };handleRequest()},[users])
 

    const data = ["Data","Airtime","Electricity","Cable","Education Pin","Bulk SMS","Recharge Card","Airtime Swap"]
    const data2 = ["Date","status","Amount","plan"]
    const handleToggle =()=>{
        if(show === -300){
        setShow( -1600)
        }else{
        setShow(-300)}
    }
     const handleSelect =(item:string)=>{
        setSelect(()=>item)
     }
  
  
    return (
  
        <KeyboardAvoidingView>

                <View style={{backgroundColor:theme.colors.background}}>
                    <View  style={style.flex}>

                          <View  style={{justifyContent:"flex-start",width:20,paddingTop:20}}><AntDesign name='caretdown' size={14}  onPress={handleToggle}/></View>
                          <View style={{width:300,paddingTop:20,}}><Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}}>{select}</Text></View>
                    </View>
                   
                  
                    <View style={style.flex}>
                        <ScrollView>
                             <View style={{padding:10,margin:"auto",minWidth:320,width:"100%"}}>
                               <FlatList data={data2}
                                          numColumns={4}
                                          renderItem={({item,index})=>{return(
                                  <View  style={[style.flex,{margin:"auto",minWidth:320,width:"100%"}]}>
                                  <Text style={[style.p,{fontSize:14,fontWeight:"bold"}]} key={index}>{item}</Text>
                                   </View> )}} />
                                <FlatList data={users?.transaction.reverse()}
                                          numColumns={1}
                                          renderItem={({item,index})=>{return(
                                  <View style={[style.flex,{justifyContent:"center",margin:5,padding:5,backgroundColor:"aliceblue"}]}>
                                  <Text style={style.p} key={index}>{item.date}</Text>
                                  <Text style={style.p} key={index}>{item.status}</Text>
                                  <Text style={style.p} key={index}>N{item.amount}</Text>
                                  <Text style={style.p} key={index}>{item.size}</Text>
                                  <Text style={style.p} key={index}>{item.plan}</Text>
                                  </View> )}} />
                              </View>
                      </ScrollView>
                   </View>

                   
                   <View style={style.flex}>
                        <View style={[style.show,{bottom:show,zIndex:10}]}>
                            <Text style={{fontSize:18,color:"grey",textAlign:"center",padding:10}}> Search Service</Text>




                                <ScrollView>
                                  <View style={{height:300,paddingBottom:20,justifyContent:"center"}}>
                                    <FlatList  data={data} renderItem={({item,index})=>{return(<Text style={{fontSize:16,padding:10}} key={index} onPress={()=>handleSelect(item)}>{item}</Text>)}}/>
                                </View>
                              </ScrollView>
                        </View>
                    </View>
                 
               </View>
    </KeyboardAvoidingView>
    
  )
}

export default transaction
const style = StyleSheet.create({
      flex:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
   
  },
  div:{
    width:150
  },
  p:{
    fontWeight:"medium",
    padding:5,
    fontSize:12,
    textTransform:"capitalize"
  },
   show:{
    width:320,
    position:"relative",
    backgroundColor:"white",
    padding:10,
    borderTopRightRadius:"10px",
    borderTopLeftRadius:"10px",
    fontSize:24,
    shadowOpacity:0.02,
    shadowOffset:{width:2,height:-5},
    shadowColor:"black",
    transitionDuration:"0.01"
   }
})