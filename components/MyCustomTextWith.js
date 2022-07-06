import {  View, Text } from 'react-native'
import React from 'react'

const Greeting = ({fname,lname})=>{
    return(
        <view >
            <text>Your Fist Name is {fname}! and Last name is {lname}</text>
        </view>
    )
}

const MyCustomTextWith = () => {
  return (
    <View style={{/*flex:1,justifyContent: 'center'*/alignItems: 'center',top:400,fontSize: 12}}>
        <Greeting fname ='Chonlasit ' lname = 'Maneegobkulwong'/>
        <Greeting fname ='Kraiwit' lname = 'Chinchanathavorn'/>  
    </View>
  )
}

export default MyCustomTextWith

