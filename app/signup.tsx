import { ThemedText } from '@/components/ThemedText'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Text, TextInput, useTheme } from "react-native-paper"

export default function Signup() {
  const [toggle,setToggle] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [address,setAddress] = useState('')
  const [phone,setPhone] = useState('')
  const [confirm,setConfirm] = useState('')
  const [pin,setPin] = useState('')
  const [error,setError] = useState('')
  const [user,setUser] = useState('')
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
    <ScrollView>
    <KeyboardAvoidingView>
    <View style={style.div}>
      <ThemedText type='title'>Create Account</ThemedText>
      <TextInput onChangeText={setEmail} style={style.p} placeholder='fullname...' mode='outlined' label={"Fullname"} />
      <TextInput onChangeText={setAddress} style={style.p} placeholder='address...' mode='outlined' label={"Address"} />
      <TextInput onChangeText={setPhone} style={style.p} placeholder='Phone...' mode='outlined' label={"Phone"} />
      <TextInput onChangeText={setUser} style={style.p} placeholder='username...' mode='outlined' label={"Username"} />
      <TextInput onChangeText={setPassword} style={style.p} placeholder='password...' mode='outlined' label={"password"} />
      <TextInput onChangeText={setConfirm} style={style.p} placeholder='comfirm...' mode='outlined' label={"Comfirm"} />
      <TextInput onChangeText={setPin} style={style.p} placeholder='pin...' mode='outlined' label={"Set Pin"} />
                  {error && <Text style={{color:theme.colors.error}}>{error}</Text>}
      <Button style={style.p} mode='contained' onPress={handleAunthentication}><Link href={"/"} style={{color:"blue"}}>Signup</Link></Button>:
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
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
    margin:10,
  }
  
})

