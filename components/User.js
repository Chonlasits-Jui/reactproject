import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const User = () => {
    const users = [
        {id:1,name:'john'},
        {id:2,name:'Mary'}
    ]
  return (
    <View>
      <Text></Text>
      {
        users.map((user,index)=>{
            return <Text style={styles.Textcolor}  key={user.id}>{index+1}. {user.name}</Text>
        })
      }
    </View>
  )
}

export default User
const styles = StyleSheet.create({
    Textcolor:{
        color:"#1478",
        fontSize:20
    }
})