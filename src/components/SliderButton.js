import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SliderButton = ({ scrollTo, title }) => {
  return (
    <TouchableOpacity onPress={scrollTo} style={styles.button}>
      <Text style={{fontFamily: 'AsapBlack', fontSize: 24, color: '#0B44A1'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SliderButton

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '65%',
        paddingVertical: 15,
        marginVertical: 20,
        borderRadius: 8,

        borderBottomColor: '#0B44A1',
        borderBottomWidth: 6
    }
})