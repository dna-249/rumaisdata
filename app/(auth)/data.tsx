import { ThemedText } from "@/components/ThemedText"
import axios from "axios"
import { useEffect, useState } from "react"
import { FlatList, View } from "react-native"

const Data = ()=>{
    const [data,setData] = useState()
    useEffect(()=>{


    const handleRequest =()=>{
    axios.get("https://dnadata.vercel.app/mtn/api")
         .then(res =>{setData(res.data); console.log(res.data.MTN_DATA)}).catch(err => console.log(err))
    };handleRequest()},[])
    return(
          <View>
           <FlatList data={data}  renderItem={(({item,index}) =>{return(
            <>
            <ThemedText key={index}>{item.size}</ThemedText>
            <ThemedText key={index}>{item.network}</ThemedText>
            <ThemedText key={index}>{item.plan}</ThemedText>
            </>
            )})} />
          </View>
      )
}
export default Data