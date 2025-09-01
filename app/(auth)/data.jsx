import axios from "axios"
import { useEffect, useState } from "react"
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native"
import { useTheme } from "react-native-paper"

const Data = ()=>{
    const [data,setData] = useState('')
    const theme = useTheme()
    useEffect(()=>{


    const handleRequest =()=>{
    axios.get("https://dnadata.vercel.app/mtn/api")
         .then(res =>{setData(res.data); console.log(res.data)}).catch(err => console.log(err))
    };handleRequest()},[])
    return(
          <ScrollView>
              <KeyboardAvoidingView>
              <View style={{backgroundColor:theme.colors.background}}>
                    <View>
                       <Text> {data?.MTN_DATA.map((item,index)=>{return(
                        <>
                        <Text key={index}>{item.size}</Text>
                        <Text key={index}>{item.network}</Text>
                        <Text key={index}>{item.plan}</Text>
                        </>
                        )})}</Text>
                    </View>
                </View>
              </KeyboardAvoidingView>
          </ScrollView>

      )
}
export default Data