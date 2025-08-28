import { ThemedText } from '@/components/ThemedText'
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Text, TextInput, useTheme } from "react-native-paper"

export default function Signup() {
  const [toggle,setToggle] = useState(false)
  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
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
  const errors ={
       name:"Full name is required",
       email:"email field is required",
       address:"Address is required",
       phone:"phone is required",
       user:"fill your user field",
       password:"create your password",
       confirm:"pass most be equal matched",
       pin:"set your transaction pin"
  }
  const handleAunthentication =async()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailRegex.test(email)
   if(name === "") setError(errors.name)
   else if(email === "" || !validEmail) setError(errors.email)
   else if(address === "") setError(errors.address)
   else if(phone === "" || phone.length === 11) setError(errors.phone)
   else if(user === "") setError(errors.user)
   else if(password === "" || password.length < 7) setError(errors.password)
   else if(confirm !== password) setError(errors.confirm)
   else if(pin.length == 5) setError(errors.pin)
   else return setError("")
  }
  return (
    <>
    <ScrollView>
    <KeyboardAvoidingView  enabled={true} behavior='padding'>
    <View style={style.div}>
      <ThemedText type='subtitle'>Create Account</ThemedText>
      <View  style={{ width:300}}><Text style ={{alignSelf:"center",  padding:12, color:'coral'}}>Fill the following:</Text></View>
         
      <TextInput onChangeText={setName} style={style.p} placeholder='fullname...' mode='outlined' label={"Fullname"} />
      {error === errors.name && <Text style={{color:theme.colors.error}}>{errors.name}</Text>}

       <TextInput onChangeText={setEmail} style={style.p} placeholder='example@gmail.com...' mode='outlined' label={"Email"} />
      {error === errors.email && <Text style={{color:theme.colors.error}}>{errors.email}</Text>}


      <TextInput onChangeText={setAddress} style={style.p} placeholder='address...' mode='outlined' label={"Address"} />
      {error === errors.address && <Text style={{color:theme.colors.error}}>{errors.address}</Text>}

      <TextInput onChangeText={setPhone}  keyboardType='numeric' style={style.p} placeholder='Phone...' mode='outlined' label={"Phone"} />
      {error === errors.phone && <Text style={{color:theme.colors.error}}>{errors.phone}</Text>}

      <TextInput onChangeText={setUser} style={style.p} placeholder='username...' mode='outlined' label={"Username"} />
      {error === errors.user && <Text style={{color:theme.colors.error}}>{errors.user}</Text>}

      <TextInput onChangeText={setPassword} style={style.p} placeholder='password...' mode='outlined' label={"password"} />
      {error === errors.password && <Text style={{color:theme.colors.error}}>{errors.password}</Text>}

      <TextInput onChangeText={setConfirm} style={style.p} placeholder='comfirm...' mode='outlined' label={"Comfirm"} />
      {error === errors.confirm && <Text style={{color:theme.colors.error}}>{errors.confirm}</Text>}

      <TextInput onChangeText={setPin}  keyboardType='numeric' style={style.p} placeholder='pin...' mode='outlined' label={"Set Pin"} />
      {error === errors.pin && <Text style={{color:theme.colors.error}}>{errors.pin}</Text>}

                
      <Button style={style.p} mode='contained' onPress={handleAunthentication}>Register</Button>:
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

