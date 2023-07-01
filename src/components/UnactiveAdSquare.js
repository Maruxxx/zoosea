import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const adBackground = require('../../assets/media/bg/notactivead.png')


const UnactiveAdSquare = ({time, image}) => {
  return (
    <ImageBackground source={adBackground} imageStyle={{borderRadius: 10}} resizeMode='cover' style={styles.adWrapper}>
        

        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
          <Text style={{color: 'white', fontFamily: 'AsapRegular', fontSize: 10, marginBottom: -2}}>Ad available in</Text>
          <Text style={{color: 'white', fontFamily: 'AsapBold', fontSize: 18}}>{time}</Text>
        </View>

        <View>
          <Image source={image} resizeMode='contain' style={{height: 60}}/>
        </View>

    </ImageBackground>
  )
}

export default UnactiveAdSquare

const styles = StyleSheet.create({
  adWrapper: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 130, 
    height: 157,
}
})