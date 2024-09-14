import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomSearch = () => {
  return (
    <View style={styles.container}>
      <TextInput
      placeholder='search'
      style={styles.input}
      />
    </View>
  )
}

export default CustomSearch

const styles = StyleSheet.create({
    container:{
        width: '90%',
        height: 50,
        borderRadius: 25,
        borderWidth: 0.1,
        borderColor: '#cdcbcb',
        elevation: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    input:{
        width: '100%',
        height: '100%',
        paddingLeft: 12,
    },
})