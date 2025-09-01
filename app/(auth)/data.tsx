import { ThemedText } from "@/components/ThemedText"
import axios from "axios"
import { useEffect, useState } from "react"
import { FlatList, View } from "react-native"

const Data = ()=>{
    const [data,setData] = useState("")
    useEffect(()=>{

        
    const handleRequest =async()=>{
    axios.get("https://dnadata.vercel.app/mtn/api")
         .then(res =>{setData(res.data); console.log(res.data)}).catch(err => console.log(err))
    };handleRequest()},[])
    return(
          <View>
           <FlatList numColumns={2} renderItem={(({item}) =>{return(
            <ThemedText>{item}</ThemedText>
            )})} data={data}/>
          </View>
      )
}
export default Data