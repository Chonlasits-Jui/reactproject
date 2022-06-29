import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
    const textLogo = 'Thai-NichiInstitute of Technology';
    const isTH = false;

  return (
    <View>
      <Text style={styles.TextLogo}>TNI</Text>
      <text>{textLogo}</text>
      {/* {
        isTH && <Text>ภาษาไทย</Text>
      } */}
      {/* {use if/else or conditional operator} */}
      {
        isTH
        ?(<text>ภาษาไทย</text>)
        :(<text>ภาษาอังกฤษ</text>)
      }
    </View>
  )
}

export default Logo
const styles = StyleSheet.create({
    TextLogo:{
        color:"red",
        fontSize:60
    }
})