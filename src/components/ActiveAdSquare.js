import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const adBackground = require('../../assets/media/bg/ad.png')
const whiteBubble = require('../../assets/media/icons/white-bubble.png')

const ActiveAdSquare = ({name, image}) => {
  return (
    <ImageBackground source={adBackground} imageStyle={{borderRadius: 10}} resizeMode='cover' style={styles.adWrapper}>
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', position: 'absolute', top: 10, right: 10, gap: 5}}>
            <Image source={whiteBubble} style={{height: 12, width: 12}}/>
            <Text style={{fontFamily: 'AsapBold', fontSize: 12, color: 'white'}}>10</Text>
        </View>

        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
          <Text style={{color: 'white', fontFamily: 'AsapRegular', fontSize: 10, marginBottom: -2}}>Tap to watch</Text>
          <Text style={{color: 'white', fontFamily: 'AsapBold', fontSize: 18}}>{name}</Text>
        </View>

        <View >
          <Image source={image} resizeMode='contain' style={{height: 60}}/>
        </View>
    </ImageBackground>
  )
}

export default ActiveAdSquare

const styles = StyleSheet.create({
    adWrapper: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 130, 
        height: 157,
    }
})