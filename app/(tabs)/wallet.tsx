import React from 'react'
import { KeyboardAvoidingView,Platform, View,StyleSheet } from 'react-native'
import {Button, Text,TextInput,useTheme}from "react-native-paper"
import { useState } from 'react'
import { ThemedText } from '@/components/ThemedText'
import { Link } from 'expo-router'

export default function wallet() {
  const [toggle,setToggle] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState('')
  const theme = useTheme()


  return (
    <>
    <KeyboardAvoidingView>
       <View style={style.div}>
                <ThemedText type='title'>Wallet History</ThemedText>
                <TextInput onChangeText={setEmail} style={style.p} placeholder='search...' mode='outlined' label={"search history"} />
       </View>
    </KeyboardAvoidingView>
  </>)
}
const style = StyleSheet.create({
  div:{
    paddingTop:120,
    display:"flex",
    alignContent:"center",
    alignItems:"center",
    margin:"auto"
  },
  p:{
    width:300,
    margin:10
  }
  
})

