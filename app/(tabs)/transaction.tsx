import { AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet, View ,Text, KeyboardAvoidingView,ScrollView} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useTheme } from 'react-native-paper'
const transaction = () => {
    const [toggle,setToggle] = useState(false)
    const [show,setShow] = useState(-600)
    const [select,setSelect] = useState<String>("Data")
    const theme = useTheme()
    const data = ["Data","Airtime","Electricity","Cable","Education Pin","Bulk SMS","Recharge Card","Airtime Swap"]
    const handleToggle =()=>{
        if(show === -200){
        setShow( -600)
        }else{
        setShow(-200)}
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
                    <View style={style.flex}>
                        <View style={[style.show,{bottom:show}]}>
                            <Text style={{fontSize:18,color:"grey",textAlign:"center",padding:10}}> Search Service</Text>
                                <ScrollView>
                                  <View style={{height:300,paddingBottom:20}}>
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
   show:{
    width:320,
    position:"relative",
    backgroundColor:"white",
    padding:10,
    borderTopRightRadius:"10px",
    borderTopLeftRadius:"10px",
    fontSize:24
   }
})