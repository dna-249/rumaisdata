import { HelloWave } from '@/components/HelloWave'
import { ThemedText } from '@/components/ThemedText'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Button, Text, TextInput, useTheme } from "react-native-paper"

export default function Login() {
  const [toggle,setToggle] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState('')
  const theme = useTheme()

  const handleToggle =()=>{
    setToggle(pre =>!pre)
  }

  const handleAunthentication =async()=>{
    if(!email || !password){
      setError("please fill the all fields")
    } else return;
  }
  return (
    <>
    <KeyboardAvoidingView>
    <View style={style.div}>
      <ThemedText type='subtitle'>{"Welcome Back"}<HelloWave/></ThemedText>
      <View  style={{ width:300}}><Text style ={{alignSelf:"center", color:'coral',padding:10}}>Sign in to your Account</Text></View>
   
      <TextInput onChangeText={setEmail} style={style.p} placeholder='username...' mode='outlined' label={"username"} />
      <TextInput onChangeText={setPassword} style={style.p} placeholder='password...' mode='outlined' label={"password"} />
                {error && <Text style={{color:theme.colors.error}}>{error}</Text>}
       <View  style={{ width:300}}><Text style ={{alignSelf:"flex-end", color:'blue'}}>forget password</Text></View>
   
      <Button style={style.p} mode='contained' onPress={handleAunthentication}>{"Sign In"}</Button>
        <Button  mode='text' onPress={handleToggle}> <Text style={{fontSize:11}}> Don't you already have an account?  Click<Link style={{color:"blue",textDecorationColor:"underlined"}} href="/signup"> here to signup</Link> </Text></Button>
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

