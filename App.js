import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'


export default function App() {
  return (
    <View>
      <Logo/>
      <User/>
    </View>
  )
}

const styles = StyleSheet.create({})