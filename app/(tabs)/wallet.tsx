import { ThemedText } from '@/components/ThemedText'
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { TextInput, useTheme } from "react-native-paper"

export default function wallet() {
  const [toggle,setToggle] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState('')
  const theme = useTheme()


  return (
    <>
    <KeyboardAvoidingView>
      <ScrollView>
       <View style={style.div}>
                <ThemedText type='title'>Wallet History</ThemedText>
                <TextInput onChangeText={setEmail} style={style.p} placeholder='search...' mode='outlined' label={"search history"} />
       </View>
       </ScrollView>
    </KeyboardAvoidingView>
  </>)
}
const style = StyleSheet.create({
  div:{
    paddingTop:120,
    display:"flex",
    alignContent:"center",
    alignItems:"center",
   
  },
  p:{
    width:300,
    margin:10
  }
  
})

