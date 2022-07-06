import { View, Text } from 'react-native'
import React from 'react'

const Greeting = ({name,dete})=>{
    return(
        <view style={{alignItems : 'center'}}>
            <text>Hello {name} {dete}</text>
        </view>
    )
}

const LotsOfGreetings = () => {
  return (
    <View style={{alignItems : 'center',top:50}}>
        <Greeting name ='Marry christms ' dete = '25-Dec-2022'/>
        <Greeting name ='Happy New Year' dete = '31-Dec-2022'/>
        <Greeting name ='Songkarn Festival' dete = '13-Apr-2022'/>
      
    </View>
  )
}

export default LotsOfGreetings