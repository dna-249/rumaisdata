import { AppContext } from '@/api/api'
import { HelloWave } from '@/components/HelloWave'
import { ThemedText } from '@/components/ThemedText'
import axios from 'axios'
import { Link, useRouter } from 'expo-router'
import React, { useContext, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Button, Text, TextInput, useTheme } from "react-native-paper"

export default function Login() {
  const [toggle,setToggle] = useState(false)
  const [token,setToken] = useState("")
  const [user,setUser] = useState("")
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState('')
  const theme = useTheme()
  const nav = useRouter()
   const { users, setUsers } = useContext(AppContext);

  const handleAunthentication =async()=>{
    if(!user || !password){
      setError("please fill the all fields")
    } else {
      setError("")
      handleLogin()
    }
  }

  const handleLogin = async () => {
   
    await axios.post(`https://dnadata.vercel.app/user/login`,{
        user:user,
        password:password
      }).then(res => {setToken(res.data);handleVerify(); console.log(res)})
      .catch(err => {if(typeof user !== "undefined"){alert(user + "" + "access denied")} else console.log(err)})
   
  }
  
  const handleVerify = async() => {
    await axios.post(`https://dnadata.vercel.app/user/verify`,{
      user:user,
      password:password,
      header:token
    }).then(res =>{ setUsers(()=>res.data._id); nav.push({pathname: '/home',params:{id: res.data._id } }); console.log(res.data); alert(user +""+ "is verified successfully")})
    .catch(err => {alert("invalid username or password");console.log(err)})

 
  }
  
  
  return (
    <>
    <KeyboardAvoidingView>
    <View style={style.div}>
      <ThemedText type='subtitle'>{"Welcome Back"}<HelloWave/></ThemedText>
      <View  style={{ width:300}}><Text style ={{alignSelf:"center", color:'coral',padding:10}}>Sign in to your Account</Text></View>
   
      <TextInput onChangeText={setUser} style={style.p} placeholder='username...' mode='outlined' label={"username"} />
      <TextInput onChangeText={setPassword} style={style.p} placeholder='password...' mode='outlined' label={"password"} />
                {error && <Text style={{color:theme.colors.error}}>{error}</Text>}
       <View  style={{ width:300}}><Text style ={{alignSelf:"flex-end", color:'blue'}}>forget password</Text></View>
   
      <Button style={style.p} mode='contained' onPress={handleAunthentication}>{"Sign In"}</Button>
        <Button  mode='text' > <Text style={{fontSize:11}}> Don't you already have an account?  Click <Link style={{color:"blue",textDecorationColor:"underlined"}} href="/signup"> here to signup</Link> </Text></Button>
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

