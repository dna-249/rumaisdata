import { AppContext } from '@/api/api'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useContext, useEffect, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useTheme } from 'react-native-paper'
import Data from '../data'

const transaction = () => {
    const [toggle,setToggle] = useState(false)
    const [datas,setDatas] = useState()
    const [show,setShow] = useState(-1600)
    const [select,setSelect] = useState<String>("Data")
    const theme = useTheme()
    const { users } = useContext(AppContext);
    const nav = useRouter()
       
 useEffect(() => {
   if(!users){
    nav.replace('/')
   }
 }, [users])






    const data = ["Data","Airtime","Electricity","Cable","Education Pin","Bulk SMS","Recharge Card","Airtime Swap"]
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

                          <View  style={{justifyContent:"flex-start",width:20}}><AntDesign name='caretdown' size={14}  onPress={handleToggle}/></View>
                          <View style={{width:300}}><Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}}>{select}</Text></View>
                    </View>

                    <ScrollView>
                     <View style={{height:300,padding:10}}>
                       <FlatList data={users?.transaction}
                                 numColumns={1}
                                 renderItem={({item,index})=>{return(
                        <View >
                        <Text key={index}>{item.status}</Text>
                        <Text key={index}>{item.amount}</Text>
                        <Text key={index}>{item.size}</Text>
                        <Text key={index}>{item.plan}</Text>
                        <Text key={index}>{item.date}</Text>
                       </View> )}} />
                    </View>
                    </ScrollView>
                    <View style={style.flex}>
                        <View style={[style.show,{bottom:show}]}>
                            <Text style={{fontSize:18,color:"grey",textAlign:"center",padding:10}}> Search Service</Text>




                                <ScrollView>
                                  <View style={{height:300,paddingBottom:20}}>
                                    <FlatList  data={data} renderItem={({item,index})=>{return(<Text style={{fontSize:16,padding:10}} key={index} onPress={()=>handleSelect(item)}>{item}</Text>)}}/>
                                </View>
                                <Data />
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