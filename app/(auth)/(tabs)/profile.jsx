import { AppContext } from '@/api/api'
import { ThemedText } from '@/components/ThemedText'
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons'
import { useContext, useEffect, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native'
import { Text, useTheme } from "react-native-paper"
   



export default function profile() {
  const [toggle,setToggle] = useState(false)
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState('')
  const theme = useTheme()
  const { users} = useContext(AppContext);
    useEffect(() => {
      let online = true
      if(!users){
       nav.replace('/')
      }
       return() =>{
    if(!online){
      nav.replace("/+not-found")
    }
      }
    }, [users])
     
    
  return (
    <> <ScrollView>
    <KeyboardAvoidingView>
     
    <View style={{backgroundColor:theme.colors.background}}>
      <View>
            <View style={style.flex}>
                  <View style={{ width:"320px"}} >
                        <ThemedText type="title">Profile</ThemedText>
                        <View  style={{alignSelf:"center",marginBottom:"20px"}}> 
                              <AntDesign name='user' size={100}/>
                             <ThemedText type="subtitle">{users?.name}</ThemedText>
                              <Text style={{color:"grey"}}>{users?.user}</Text>
                        </View>
                        <Text  style={{fontSize:"20px",color:"grey",fontWeight:"bold"}}>General Settings</Text>
                  </View>
          </View>
          <View style={style.flex}>
                    <View style={style.circle}><FontAwesome name='user' color={"grey"} size={24}/></View>
                    <View style={style.div2}>
                      <Text style={style.head}>Profile</Text>
                      <Text style={style.p}>Your personal information</Text>
                    </View>
                    <View style={style.div}>
                            <View style={{alignSelf:"flex-end"}}>
                                  <AntDesign name="right" color={"coral"} size={20}/>
                            </View>
                    </View>
           </View>

          <View style={style.flex}>
                    <View style={style.circle}><FontAwesome name='dollar' color={"grey"} size={24}/></View>
                    <View style={style.div2}>
                          <Text style={style.head}>Pricing</Text>
                          <Text style={style.p}>Our Pricing</Text>  
                    </View>
                    <View style={style.div}>
                                  <View style={{alignSelf:"flex-end"}}>
                                  <AntDesign name="right" color={"coral"} size={20}/>
                            </View>
                    </View>
          </View>

           <View style={style.flex}>
                    <View style={style.circle}><FontAwesome name='code' color={"grey"} size={24}/></View>
                    <View style={style.div2}>
                          <Text style={style.head}>Code To Check Balance</Text>
                          <Text style={style.p}>code to chech data and airtime balance</Text>  
                    </View>
                    <View style={style.div}>
                                  <View style={{alignSelf:"flex-end"}}>
                                  <AntDesign name="right" color={"coral"} size={20}/>
                            </View>
                    </View>
          </View>


           <View style={style.flex}>
                    <View style={style.circle}><AntDesign name='gift' color={"grey"} size={24}/></View>
                    <View style={style.div2}>
                          <Text style={style.head}>Update Virtual Account</Text>
                          <Text style={style.p}>Update Virtual Account As Required By CBN</Text>  
                    </View>
                    <View style={style.div}>
                                  <View style={{alignSelf:"flex-end"}}>
                                  <AntDesign name="right" color={"coral"} size={20}/>
                            </View>
                    </View>
          </View>



           <View style={style.flex}>
                    <View style={style.circle}><AntDesign name='phone' color={"grey"} size={24}/></View>
                    <View style={style.div2}>
                          <Text style={style.head}>Contact Us</Text>
                          <Text style={style.p}>Contact our support</Text>  
                    </View>
                    <View style={style.div}>
                                  <View style={{alignSelf:"flex-end"}}>
                                  <AntDesign name="right" color={"coral"} size={20}/>
                            </View>
                    </View>
          </View>



          

          <View style={style.flex}>
                    <View style={style.circle}><FontAwesome name='tasks' color={"grey"} size={24}/></View>
                    <View style={style.div2}>
                          <Text style={style.head}>Log Complaint</Text>
                          <Text style={style.p}>log Your any complaint to our support</Text>  
                    </View>
                    <View style={style.div}>
                                  <View style={{alignSelf:"flex-end"}}>
                                  <AntDesign name="right" color={"coral"} size={20}/>
                            </View>
                    </View>
          </View>



          <View style={style.flex}>
                    <View style={style.circle}><AntDesign name='earth' color={"grey"} size={24}/></View>
                    <View style={style.div2}>
                          <Text style={style.head}>Affiliate Website</Text>
                          <Text style={style.p}> get your affiliate Website</Text>  
                    </View>
                    <View style={style.div}>
                                  <View style={{alignSelf:"flex-end"}}>
                                  <AntDesign name="right" color={"coral"} size={20}/>
                            </View>
                    </View>
          </View>
         
          

        <View style={style.flex}>
                          <View style={style.circle}><FontAwesome name='share' color={"grey"} size={24}/></View>
                          <View style={style.div2}>
                                <Text style={style.head}>Share App</Text>
                                <Text style={style.p}> share our app with frient and family</Text>  
                          </View>
                          <View style={style.div}>
                                        <View style={{alignSelf:"flex-end"}}>
                                        <AntDesign name="right" color={"coral"} size={20}/>
                                  </View>
                          </View>
                </View>


                <View style={style.flex}>
                          <View style={style.circle}><AntDesign name='setting' color={"grey"} size={24}/></View>
                          <View style={style.div2}>
                                <Text style={style.head}>Settings</Text>
                                <Text style={style.p}> Account Notifications</Text>  
                          </View>
                          <View style={style.div}>
                                        <View style={{alignSelf:"flex-end"}}>
                                        <AntDesign name="right" color={"coral"} size={20}/>
                                  </View>
                          </View>
                </View>  


                 <View style={style.flex}>
                          <View style={style.circle}><AntDesign name='upload' color={"grey"} size={24}/></View>
                          <View style={style.div2}>
                                <Text style={style.head}>Account Limits</Text>
                                <Text style={style.p}> Upgrade your Limits</Text>  
                          </View>
                          <View style={style.div}>
                                        <View style={{alignSelf:"flex-end"}}>
                                        <AntDesign name="right" color={"coral"} size={20}/>
                                  </View>
                          </View>
                </View> 


                <View style={style.flex}>
                          <View style={style.circle}><AntDesign name='upload' color={"grey"} size={24}/></View>
                          <View style={style.div2}>
                                <Text style={style.head}>Upgrade Your Account</Text>
                                <Text style={style.p}>upgrade your app account</Text>  
                          </View>
                          <View style={style.div}>
                                        <View style={{alignSelf:"flex-end"}}>
                                        <AntDesign name="right" color={"coral"} size={20}/>
                                  </View>
                          </View>
                </View>



                <View style={style.flex}>
                          <View style={style.circle}><AntDesign name='team' color={"grey"} size={24}/></View>
                          <View style={style.div2}>
                                <Text style={style.head}>My Referrals</Text>
                                <Text style={style.p}>referrals, commissions</Text>  
                          </View>
                          <View style={style.div}>
                                        <View style={{alignSelf:"flex-end"}}>
                                        <AntDesign name="right" color={"coral"} size={20}/>
                                  </View>
                          </View>
                </View>  

                <View style={style.flex}>
                          <View style={style.circle}><Feather name='phone-call' color={"grey"} size={24}/></View>
                          <View style={style.div2}>
                                <Text style={style.head}>Help and Support</Text>
                                <Text style={style.p}>help or support contact our customer service</Text>  
                          </View>
                          <View style={style.div}>
                                        <View style={{alignSelf:"flex-end"}}>
                                        <AntDesign name="right" color={"coral"} size={20}/>
                                  </View>
                          </View>
                </View> 

                <View style={style.flex}>
                          <View style={style.circle}><AntDesign name='database' color={"grey"} size={24}/></View>
                          <View style={style.div2}>
                                <Text style={style.head}>Legal</Text>
                                <Text style={style.p}>privacy, security,& term of use</Text>  
                          </View>
                          <View style={style.div}>
                                        <View style={{alignSelf:"flex-end"}}>
                                        <AntDesign name="right" color={"coral"} size={15}/>
                                  </View>
                          </View>
                </View> 

                 <View style={style.flex}>
                          <View style={style.circle}><AntDesign name='logout' color={"grey"} size={24}/></View>
                          <View style={style.div2}>
                                <Text style={style.head}>Log Out</Text>
                                <Text style={style.p}>sign out of your account</Text>  
                          </View>
                          <View style={style.div}>
                                        <View style={{alignSelf:"flex-end"}}>
                                        <AntDesign name="right" color={"coral"} size={15}/>
                                  </View>
                          </View>
                </View>


            


        </View>
     </View>
    
    </KeyboardAvoidingView>
    </ScrollView>
  </>)
}
const style = StyleSheet.create({
  flex:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    marginBottom:"10px"
  },
  div:{ 
   display:"flex",
    width:100,
    justifyContent:"flex-end"
  },
  div2:{
    width:180,
  }
  ,  circle:{
    marginRight:"10px",
    width:30,
    height:30,
    borderRadius:50,
    backgroundColor:"coral",
    alignItems:"center",
    justifyContent:"center"
  },
  head:{
    fontWeight:"bold",
    fontSize:"18px"
  },
  p:{
    fontSize:"15px",
    color:"grey"
  }
  })