import { StyleSheet,View, Text,Button,SafeAreaView } from 'react-native'
import React from 'react'
import Stysheet from './Stysheet'

const separator = () => {
    <View style ={Stysheet.separator}/>
}

const ButtonExample = () => {
  return (
    <SafeAreaView style={StyleSheet.container}>
        <View>
            <Text>
            The title and onPress handler are required.It is recommended to set   accessigilityLabel to thelp make your app usable by everyone.
            </Text>
            <Button
            title='Press Me'
            onPress={()=>alert ('Simple Button pressed')}
            />
        </View>
        <View>
            <Text>
            The title and onPress handler are required.It is recommended to set   accessigilityLabel to thelp make your app usable by everyone.
            </Text>
            <Button
            title='Press Me'
            onPress={()=>alert ('Button with adj')}
            color="#465"
            />
        </View>
        <View>
            <Text>
            The title and onPress handler are required.It is recommended to set   accessigilityLabel to thelp make your app usable by everyone.
            </Text>
            <Button
            title='Press Me'
            disabled //Buuton can not press
            />
        </View>
        
        <View>
            <Text>
            The title and onPress handler are required.It is recommended to set   accessigilityLabel to thelp make your app usable by everyone.
            
            </Text>
        </View>
        <View style={styles.fixToText}>
            <Button
            title='Left button'
            onPress={()=>alert ('Left button pressed')}
            />
            <Button
            title='Right button'
            onPress={()=>alert ('Right button pressed')}
            />
        </View>
        </SafeAreaView>
  )
}


export default ButtonExample
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});