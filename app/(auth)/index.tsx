import { AppContext } from '@/api/api'
import { HelloWave } from '@/components/HelloWave'
import { ThemedText } from '@/components/ThemedText'
import axios from 'axios'
import { Link, useRouter } from 'expo-router'
import { useContext, useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Button, Text, TextInput, useTheme } from "react-native-paper"
import useIndicator from './useIndicator'

export default function Login() {
  const [toggle,setToggle] = useState(false)
  const [token,setToken] = useState("")
  const [user,setUser] = useState("")
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState('')
  const [online,setOnline] = useState(navigator.onLine)

  const theme = useTheme()
  const nav = useRouter()
   const { users, setUsers } = useContext(AppContext);
   const {indicator,indicator2,setLoading,setText,setVisible} = useIndicator()

  const handleAunthentication =async()=>{
    if(!user || !password){
      setError("please fill the all fields")
    } else {
      setError("")
      handleLogin()
    }
  }

  const handleLogin = async () => {
    setText("Please Wait...")
   setLoading(true)
   
    await axios.post(`https://dnadata.vercel.app/user/login`,{
        user:user.trim().toLowerCase(),
        password:password.trim().toLowerCase()
      }).then(res => {setToken(res.data);setText("Authentication...");setVisible(true);console.log(res)})
      .catch(err => {if(!user){setText("Access Denied"); setLoading(false)
      } else {setText("network error");setVisible(true);setLoading(false)}})
      ;
  }

  const Online =()=>{
    setOnline(navigator.onLine)
    setText("Online")
    setVisible(true)
  }
  const Offline =()=>{
    setOnline(navigator.onLine)
    setText("offline")
    setVisible(true)
  }
  useEffect(() => {
    window.addEventListener("online", Online)
    window.addEventListener("offline", Offline)
    return()=>{
    window.removeEventListener("online", Online)
    window.removeEventListener("offline", Offline)
 
    }
  }, [online])
  
  
  useEffect(() => {
    
    if(token) {handleVerify();}
  }, [token])
  
  
  const handleVerify = async() => {
    await axios.post(`https://dnadata.vercel.app/user/verify`,{
      user:user.trim().toLowerCase(),
      password:password.trim().toLowerCase(),
      header:token
    }).then(res =>{ setUsers(()=>res.data);set(res.data.name);setText("Verification successfully");setVisible(true) ;nav.push({pathname: '/home',params:{id: res.data._id } });setLoading(false); console.log(res.data); })
    .catch(err => {setText("Access Denied"); console.log(err)})
    setLoading(false)
    setText("Please Wait...")
    
  }
  
  const set =(id:any)=>{
    localStorage.setItem("id",JSON.stringify(id))
  }
  return (
    <>
    <KeyboardAvoidingView>
      {indicator}
      {indicator2}
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

