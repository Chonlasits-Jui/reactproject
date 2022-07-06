import { StyleSheet, Text, View,TextInput,Button} from 'react-native'
import React,{useState} from 'react'

const UsernameandPassWord = () => {
    
    
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    

  return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <TextInput
        value={Email}
        onChangeText = {(Email)=>{setEmail(Email)}}
        style={styles.textInput}
        placeholder='Email'
      />
      <TextInput 
        value={Password}
        onChangeText = {(Password)=>{setPassword(Password)}}
        style={styles.textInput}
        placeholder='Password'
      />
        <Button 
        color= '#978465'
        title = 'Submit'
        onPress={()=> alert("email: "+Email+"\npassword: "+Password)}
        />
    </View>
  )
}

export default UsernameandPassWord

const styles = StyleSheet.create({
    textInput  :{
    width:250,
    height:45,
    padding:10,
    marginTop:20,
    marginBottom:10,
    borderWidth:3,
    borderColor: '#498',
    backgroundColor:'#1235'
    }
})