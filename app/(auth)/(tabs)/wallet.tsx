import { AppContext } from '@/api/api'
import { ThemedText } from '@/components/ThemedText'
import { useRouter } from 'expo-router'
import React, { useContext, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { TextInput, useTheme } from "react-native-paper"


export default function wallet() {
  const [toggle,setToggle] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState('')
  const theme = useTheme()
   const { users } = useContext(AppContext);
    const nav = useRouter()
  
 

  return (
    <>
    <KeyboardAvoidingView>
      <ScrollView>
       <View style={style.div}>
                <ThemedText type='subtitle'>Wallet History</ThemedText>
                <TextInput onChangeText={setEmail} style={style.p} placeholder='search...' mode='outlined' label={"search history"} />
       </View>
       </ScrollView>
    </KeyboardAvoidingView>
  </>)
}
const style = StyleSheet.create({
  div:{
    flex:1,
    paddingTop:20,
    
    alignContent:"center",
    alignItems:"center",
   
  },
  p:{
    width:300,
    margin:10
  }
  
})

