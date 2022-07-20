import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
import LotsOfGreetings from './components/LotsOfGreetings'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import InputText from './components/InputText'
import UsernameandPassWord from './components/UsernameandPassWord'
import UserNamePassword from './components/UserNamePassword'


export default function App() {
  return (
    <View styles={styles.continuer}>
      {/* <Logo/>
      <User/> */}
      {/* <LotsOfGreetings/> */}
      {/* <MyCustomTextWith/> */}
      {/* <Count/> */}
      {/* <InputText/> */}
      {/* {<UsernameandPassWord/>} */}
      <UserNamePassword/>
    </View>
  )
}

const styles = StyleSheet.create({
  continuer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
