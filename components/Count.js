import { View, Text,Button } from 'react-native'
import React , {useState,useEffect} from 'react'
// import { useState } from 'react'

const Count = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
      console.log('use effecf 1')
    })

    useEffect(()=>{
      console.log('use effecf 2')
    },[count])

    useEffect(()=>{
      console.log('use effecf 3')
    },[])
  return (
    <View>
      <Text>{count}</Text>
      <Button
        title = 'Click Me'
        onPress={()=>setCount(count+1)}
      />
    </View>
  )
}

export default Count