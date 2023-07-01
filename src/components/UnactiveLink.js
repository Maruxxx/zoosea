import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const btnBgGray = require('../../assets/media/bg/btnnotactive.jpg')

const UnactiveLink = ({time}) => {
  return (
    <>
      <ImageBackground resizeMode='cover' imageStyle={{borderRadius: 10}} source={btnBgGray} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontFamily: 'AsapRegular', fontSize: 12, marginBottom: -3}}>Link available in</Text>
            <Text style={{color: 'white', fontFamily: 'AsapBold', fontSize: 18}}>{time}</Text>
        </View>
      </ImageBackground>
    </>
  )
}

export default UnactiveLink

const styles = StyleSheet.create({})